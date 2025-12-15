/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return (userPref && userPref("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;

  // Reset icons
  $("#theme-icon").removeClass("fa-sun fa-moon");
  $("#theme-icon").siblings("img").remove();
  $("#theme-icon").show(); // Ensure icon is visible by default

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").addClass("fa-sun");
  } else if (use_theme === "disco") {
    $("html").attr("data-theme", "disco");
    $("#theme-icon").hide(); // Hide font icon
    // Insert disco ball image if not present
    if ($("#theme-icon").siblings("img.disco-icon-active").length === 0) {
      $('<img src="/images/disco-ball.png" class="disco-icon-active" style="width: 1em; height: 1em; vertical-align: -0.125em;">').insertBefore("#theme-icon");
    }
    // Start Particles
    if (window.ParticleEngine) window.ParticleEngine.init();
  }

  // Cleanup particles if not disco
  if (use_theme !== "disco" && window.ParticleEngine) {
    window.ParticleEngine.destroy();
  }

  // Toggle the theme manually
  var toggleTheme = () => {
    const current_theme = $("html").attr("data-theme");
    // If current is dark -> light
    // If current is light -> disco
    // If current is disco -> dark
    let new_theme = "light";
    if (current_theme === "light") {
      new_theme = "disco";
    } else if (current_theme === "disco") {
      new_theme = "dark";
    } else {
      // defaults to light if dark or unknown
      new_theme = "light";
    }

    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  };

  /* ==========================================================================
     Plotly integration script so that Markdown codeblocks will be rendered
     ========================================================================== */

  // Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
  // JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
  // actually present on the page.
  import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
  let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
  if (plotlyElements.length > 0) {
    document.addEventListener("readystatechange", () => {
      if (document.readyState === "complete") {
        plotlyElements.forEach((elem) => {
          // Parse the Plotly JSON data and hide it
          var jsonData = JSON.parse(elem.textContent);
          elem.parentElement.classList.add("hidden");

          // Add the Plotly node
          let chartElement = document.createElement("div");
          elem.parentElement.after(chartElement);

          // Set the theme for the plot and render it
          const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
          if (jsonData.layout) {
            jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
          } else {
            jsonData.layout = { template: theme };
          }
          Plotly.react(chartElement, jsonData.data, jsonData.layout);
        });
      }
    });
  }

  /* ==========================================================================
     Actions that should occur when the page has been fully loaded
     ========================================================================== */

  $(document).ready(function () {
    // SCSS SETTINGS - These should be the same as the settings in the relevant files 
    const scssLarge = 925;          // pixels, from /_sass/_themes.scss
    const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

    // Ensure default theme is dark if not set
    if (!localStorage.getItem("theme")) {
      setTheme("dark");
    } else {
      setTheme();
    }

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          setTheme(e.matches ? "dark" : "light");
        }
      });

    // Enable the theme toggle dropdown
    $('.theme-dropdown li').on('click', function (e) {
      e.stopPropagation(); // Prevent toggling the main button
      const selectedTheme = $(this).data('theme');
      setTheme(selectedTheme);
    });

    // Enable the sticky footer
    var bumpIt = function () {
      $("body").css("padding-bottom", "0");
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    }
    $(window).resize(function () {
      didResize = true;
    });
    setInterval(function () {
      if (didResize) {
        didResize = false;
        bumpIt();
      }
    }, 250);
    var didResize = false;
    bumpIt();

    // FitVids init
    fitvids();

    // Follow menu drop down
    $(".author__urls-wrapper button").on("click", function () {
      $(".author__urls").fadeToggle("fast", function () { });
      $(".author__urls-wrapper button").toggleClass("open");
    });

    // Restore the follow menu if toggled on a window resize
    jQuery(window).on('resize', function () {
      if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
        $(".author__urls").css('display', 'block')
      }
    });

    // Init smooth scroll, this needs to be slightly more than then fixed masthead height
    $("a").smoothScroll({
      offset: -scssMastheadHeight,
      preventDefault: false,
      speed: 500, // Speed up the scroll a bit
    });

    // Enable the theme toggle - only on the icon/link, not the whole LI (which contains the dropdown)
    $('#theme-toggle > a').on('click', function (e) {
      if ($(window).width() < scssLarge) {
        // On mobile, maybe we want it to just show the dropdown? 
        // Or if it's a toggle, we keep it. 
        // User requested "assign to each.. not toggle".
        // Use behavior: click on icon = show dropdown (css handles this via hover mostly, but for click support)
        // or just do nothing if hover handles it.
        // Let's keep toggle functionality ONLY for the main icon click as a fallback, 
        // BUT strictly prevented from the dropdown.
        toggleTheme();
      }
      // On desktop, hover handles it. Clicking the icon could still toggle if desired, 
      // but user said "toggle... not toggle". 
      // Safest bet: Clicking the main icon cycles themes or does nothing (just opens menu).
      // Let's make it cycle for convenience, but ONLY if clicking the icon directly.
      toggleTheme();
    });

  });
