# Implementation Plan
## Rupak Thapa - Creative Technologist Portfolio Platform
**Version:** 1.0  
**Date:** December 15, 2025  
**Based on:** PRD.md v1.0

---
I am working on a Jekyll site (Academic Pages).
Do not introduce new frameworks or JavaScript libraries.
Modify only existing layouts, includes, Markdown, or CSS.

## Overview
Transform the academicpages Jekyll theme into a "Dark-First" Creative Technologist portfolio that showcases UX Design and AI Process Automation expertise.

---

## Phase 1: Design System Foundation (P0 - Critical)

### Task 1.1: Create Custom SCSS Architecture
**Priority:** P0  
**Estimated Time:** 2-3 hours

**Actions:**
1. Create `assets/css/_custom_vibe.scss` file
2. Import Google Fonts (Inter) in `_includes/head/custom.html`
3. Define Sass variables for Dark Editorial theme:
   - `$primary-color: #f37f1b` (Safety Orange)
   - `$background-dark: #1a1a1a` (Deep Grey)
   - `$surface-card: #2d2d2d` (Project cards)
   - `$text-heading: #ffffff` (Headers)
   - `$text-body: #9ca3af` (Body text)
   - `$border-accent: 4px solid #f37f1b` (Card borders)
4. Import `_custom_vibe.scss` at the end of `assets/css/main.scss`

**Files to Create/Modify:**
- `assets/css/_custom_vibe.scss` (NEW)
- `assets/css/main.scss` (MODIFY - add import)
- `_includes/head/custom.html` (MODIFY - add Google Fonts link)

**Acceptance Criteria:**
- [ ] SCSS file compiles without errors
- [ ] Variables are accessible throughout the stylesheet
- [ ] Inter font loads correctly

---

### Task 1.2: Implement Typography System
**Priority:** P0  
**Estimated Time:** 1-2 hours

**Actions:**
1. Create `_sass/custom/_type.scss` (if directory doesn't exist, create it)
2. Define typography rules:
   - Base font: Inter, sans-serif
   - H1 (Hero): Uppercase, Weight 900, Letter-spacing -0.03em
   - H2: Weight 800
   - H3: Weight 700
   - Body: Weight 400, Line-height 1.7
3. Import typography file in `_custom_vibe.scss`

**Files to Create/Modify:**
- `_sass/custom/_type.scss` (NEW)
- `assets/css/_custom_vibe.scss` (MODIFY - add import)

**Acceptance Criteria:**
- [ ] All headings use Inter font
- [ ] Hero text displays in uppercase with correct weight
- [ ] Body text has readable line-height

---

### Task 1.3: Global Dark Theme Override
**Priority:** P0  
**Estimated Time:** 2-3 hours

**Actions:**
1. Override global background to `$background-dark`
2. Override text colors:
   - Headings: `$text-heading`
   - Body: `$text-body`
3. Ensure all theme defaults are properly overridden
4. Test dark theme across all pages

**Files to Create/Modify:**
- `assets/css/_custom_vibe.scss` (MODIFY - add global overrides)

**Acceptance Criteria:**
- [ ] Entire site uses dark background (#1a1a1a)
- [ ] Text is readable with proper contrast
- [ ] No light theme elements remain visible

---

## Phase 2: UI Components (P0 - Critical)

### Task 2.1: Floating Pill Navigation
**Priority:** P0  
**Estimated Time:** 2-3 hours

**Actions:**
1. Locate navigation include file (`_includes/masthead.html` or similar)
2. Style navigation container with:
   - Full border-radius (pill shape)
   - Backdrop blur: 10px
   - Semi-transparent background
   - Floating effect (position: fixed/sticky)
3. Ensure mobile responsiveness (doesn't obstruct content)
4. Update navigation links in `_data/navigation.yml`:
   - Home
   - Projects
   - Resume
   - Contact

**Files to Create/Modify:**
- `_includes/masthead.html` (MODIFY - add classes)
- `assets/css/_custom_vibe.scss` (MODIFY - add nav styles)
- `_data/navigation.yml` (MODIFY - update menu items)

**Acceptance Criteria:**
- [ ] Navigation has pill shape with blur effect
- [ ] Navigation floats above content
- [ ] Mobile view doesn't obstruct content
- [ ] All navigation links work correctly

---

### Task 2.2: Button Component System
**Priority:** P0  
**Estimated Time:** 1-2 hours

**Actions:**
1. Create button styles:
   - Full border-radius (pill shape)
   - Primary Orange background (#f37f1b)
   - White text
   - Hover: scale(1.05) transform
   - Smooth transitions
2. Apply to CTAs throughout site

**Files to Create/Modify:**
- `assets/css/_custom_vibe.scss` (MODIFY - add button styles)

**Acceptance Criteria:**
- [ ] Buttons have pill shape
- [ ] Hover effect scales smoothly
- [ ] Primary color is consistent

---

### Task 2.3: Image Grayscale-to-Color Effect
**Priority:** P0  
**Estimated Time:** 1 hour

**Actions:**
1. Apply CSS filter: grayscale(100%) to all images by default
2. On hover: filter: grayscale(0%)
3. Smooth transition effect

**Files to Create/Modify:**
- `assets/css/_custom_vibe.scss` (MODIFY - add image styles)

**Acceptance Criteria:**
- [ ] Images are grayscale by default
- [ ] Images show full color on hover
- [ ] Transition is smooth

---

## Phase 3: Homepage "Vibe" Module (P0 - Critical)

### Task 3.1: Hero Section
**Priority:** P0  
**Estimated Time:** 3-4 hours

**Actions:**
1. Update `_pages/about.md` (homepage) with hero content:
   - Title: "Creative Technologist & UX Designer"
   - Sub-text: "Bridging Human-Computer Interaction with Generative AI Workflows"
2. Create hero layout with:
   - Dark grid background pattern (CSS linear-gradient, opacity < 5%)
   - Centered text
   - CTA buttons: "View Projects" (anchor scroll) and "Download CV"
3. Style hero section in `_custom_vibe.scss`

**Files to Create/Modify:**
- `_pages/about.md` (MODIFY - update homepage content)
- `assets/css/_custom_vibe.scss` (MODIFY - add hero styles)
- Potentially create `_includes/hero.html` (NEW - if needed)

**Acceptance Criteria:**
- [ ] Hero displays correct title and subtitle
- [ ] Grid background is subtle (opacity < 5%)
- [ ] CTAs are styled as pill buttons
- [ ] "View Projects" scrolls to projects section
- [ ] "Download CV" links to CV download

---

### Task 3.2: Featured Projects Grid
**Priority:** P0  
**Estimated Time:** 2-3 hours

**Actions:**
1. Create featured projects section on homepage
2. Display 3-4 featured portfolio items in grid layout
3. Each project card:
   - Dark card background ($surface-card)
   - Top border accent (4px solid orange)
   - Project image (with grayscale effect)
   - Project title and brief description
   - "View Project" link
4. Link to full portfolio collection

**Files to Create/Modify:**
- `_pages/about.md` (MODIFY - add projects grid)
- `assets/css/_custom_vibe.scss` (MODIFY - add project card styles)
- Potentially create `_includes/featured-projects.html` (NEW)

**Acceptance Criteria:**
- [ ] Projects display in responsive grid
- [ ] Cards have dark background with orange top border
- [ ] Images have grayscale-to-color effect
- [ ] Links navigate to project detail pages

---

## Phase 4: Portfolio Collection (P0 - Critical)

### Task 4.1: Portfolio Collection Structure
**Priority:** P0  
**Estimated Time:** 2-3 hours

**Actions:**
1. Review existing portfolio items in `_portfolio/`
2. Create/update portfolio items:
   - **Social Media Automation Manager**
     - Tech: Make.com, OpenAI API, Full-stack Content App
     - Story: Automating caption generation and workflow integration
   - **Morrisville Smart City Dashboard**
     - Tech: IoT Data Viz, Dashboard Design
     - Story: Visualizing live data for occupancy and flood warnings
   - **Restaurant Digital Display Manager**
     - Tech: Google Anti-Gravity, API Integration
3. Ensure each has proper front matter (title, date, categories, etc.)

**Files to Create/Modify:**
- `_portfolio/social-media-automation.md` (CREATE/MODIFY)
- `_portfolio/morrisville-dashboard.md` (CREATE/MODIFY)
- `_portfolio/restaurant-display.md` (CREATE/MODIFY)

**Acceptance Criteria:**
- [ ] All 3 portfolio items exist with proper metadata
- [ ] Each item has tech stack and story
- [ ] Portfolio items display correctly

---

### Task 4.2: Portfolio Archive Page with Filters
**Priority:** P0  
**Estimated Time:** 3-4 hours

**Actions:**
1. Update `_pages/portfolio.html` to display portfolio collection
2. Add filter functionality (Automation vs. Design):
   - Use categories/tags in portfolio front matter
   - JavaScript for filtering (vanilla JS, no frameworks)
   - Filter buttons styled as pills
3. Display portfolio items in grid with project cards
4. Each card links to individual project page

**Files to Create/Modify:**
- `_pages/portfolio.html` (MODIFY - add filters and grid)
- `assets/css/_custom_vibe.scss` (MODIFY - add filter styles)
- Potentially create `assets/js/portfolio-filter.js` (NEW)

**Acceptance Criteria:**
- [ ] Portfolio items display in filterable grid
- [ ] Filters work (Automation/Design)
- [ ] Cards match design system
- [ ] Links navigate correctly

---

### Task 4.3: Individual Project Pages
**Priority:** P0  
**Estimated Time:** 2 hours

**Actions:**
1. Ensure portfolio items use proper layout
2. Style project detail pages:
   - Hero image
   - Project description
   - Tech stack display
   - Story/narrative section
   - Related projects section (optional)

**Files to Create/Modify:**
- `assets/css/_custom_vibe.scss` (MODIFY - add project page styles)
- Portfolio markdown files (MODIFY - ensure proper front matter)

**Acceptance Criteria:**
- [ ] Project pages display correctly
- [ ] All content is readable
- [ ] Design matches overall theme

---

## Phase 5: Digital CV Module (P1 - High)

### Task 5.1: CV Content Structure
**Priority:** P1  
**Estimated Time:** 2-3 hours

**Actions:**
1. Update `_pages/cv.md` with structured content:
   - **Experience:**
     - Graphic Designer @ SAM IT Solutions (4+ years)
     - Intern @ Varidx
   - **Education:**
     - M.Sc UX Design @ TH Ingolstadt
     - B.Sc CSIT @ Tribhuvan University
   - **Skills:**
     - Process Automation (Make.com)
     - AI Tools (Cursor AI, v0.dev)
     - Design (Figma)
2. Format using markdown and proper headings

**Files to Create/Modify:**
- `_pages/cv.md` (MODIFY - update content)

**Acceptance Criteria:**
- [ ] All CV sections are populated
- [ ] Content is properly formatted
- [ ] Information is accurate

---

### Task 5.2: CV Styling and PDF Download
**Priority:** P1  
**Estimated Time:** 2 hours

**Actions:**
1. Style CV page to match dark theme
2. Add "Print/Download PDF" button
3. Link button to PDF file: `resume_ux__Copy__ai_blessing.pdf`
   - Check if file exists in `files/` or `assets/files/`
   - If not, note that file needs to be added
4. Ensure PDF is accessible

**Files to Create/Modify:**
- `_pages/cv.md` (MODIFY - add download button)
- `assets/css/_custom_vibe.scss` (MODIFY - add CV page styles)
- Verify PDF file location (may need to add to `files/` directory)

**Acceptance Criteria:**
- [ ] CV page matches dark theme
- [ ] Download button is visible and styled
- [ ] PDF download works correctly
- [ ] CV is print-friendly

---

## Phase 6: Contact Page (P1 - High)

### Task 6.1: Create Contact Page
**Priority:** P1  
**Estimated Time:** 1-2 hours

**Actions:**
1. Create `_pages/contact.md`
2. Add contact information:
   - Email (mailto: link)
   - LinkedIn URL
   - Optional: Other social links
3. Style contact page to match theme

**Files to Create/Modify:**
- `_pages/contact.md` (CREATE)
- `assets/css/_custom_vibe.scss` (MODIFY - add contact styles)
- `_data/navigation.yml` (MODIFY - ensure Contact link exists)

**Acceptance Criteria:**
- [ ] Contact page exists at `/contact/`
- [ ] Email link works (mailto:)
- [ ] LinkedIn link works
- [ ] Page matches design system

---

## Phase 7: Site Configuration & Content (P0 - Critical)

### Task 7.1: Update Site Configuration
**Priority:** P0  
**Estimated Time:** 1 hour

**Actions:**
1. Update `_config.yml`:
   - Site title: "Rupak Thapa - Creative Technologist"
   - Author name: "Rupak Thapa"
   - Description: Update to match PRD
   - URL: Update with actual GitHub Pages URL
   - Author profile information
   - Social links (LinkedIn, etc.)
2. Ensure site_theme is set appropriately

**Files to Create/Modify:**
- `_config.yml` (MODIFY - update site settings)

**Acceptance Criteria:**
- [ ] Site title and metadata are correct
- [ ] Author information is populated
- [ ] Social links are configured

---

### Task 7.2: Update Navigation
**Priority:** P0  
**Estimated Time:** 30 minutes

**Actions:**
1. Update `_data/navigation.yml` to match sitemap:
   - Home (/)
   - Projects (/portfolio/)
   - Resume (/cv/)
   - Contact (/contact/)
2. Remove or hide unnecessary links (Publications, Talks, Teaching if not needed)

**Files to Create/Modify:**
- `_data/navigation.yml` (MODIFY - update menu)

**Acceptance Criteria:**
- [ ] Navigation matches PRD sitemap
- [ ] All links work correctly
- [ ] Menu is clean and focused

---

## Phase 8: Quality Assurance & Polish (P0 - Critical)

### Task 8.1: Visual QA
**Priority:** P0  
**Estimated Time:** 2-3 hours

**Actions:**
1. **Mobile Testing:**
   - Test on multiple screen sizes
   - Ensure floating pill nav doesn't obstruct content
   - Verify responsive grid layouts
   - Test touch interactions
2. **Grid Background:**
   - Verify CSS grid background opacity < 5%
   - Ensure it's subtle and not distracting
3. **Cross-browser Testing:**
   - Chrome/Edge
   - Firefox
   - Safari
4. **Dark Theme Consistency:**
   - Check all pages use dark background
   - Verify text contrast meets accessibility standards

**Files to Review:**
- All pages and components

**Acceptance Criteria:**
- [ ] Mobile: Floating nav doesn't obstruct content
- [ ] Grid background is subtle (opacity < 5%)
- [ ] Site works across major browsers
- [ ] Dark theme is consistent throughout

---

### Task 8.2: Functional QA
**Priority:** P0  
**Estimated Time:** 1-2 hours

**Actions:**
1. **Link Testing:**
   - Test all "View Project" links
   - Test external social links
   - Test navigation links
   - Test anchor scrolls (View Projects button)
2. **PDF Download:**
   - Verify resume download link works
   - Test PDF opens correctly
3. **Form/Button Testing:**
   - Test all CTA buttons
   - Verify hover effects work
   - Test mailto: links

**Files to Review:**
- All pages with links and buttons

**Acceptance Criteria:**
- [ ] All links work correctly
- [ ] PDF download works
- [ ] Buttons have proper hover effects
- [ ] No broken links or 404 errors

---

### Task 8.3: Performance Optimization
**Priority:** P1  
**Estimated Time:** 1-2 hours

**Actions:**
1. Optimize images (compress if needed)
2. Ensure CSS is minified (Jekyll should handle this)
3. Test page load times
4. Verify no unnecessary assets are loaded

**Files to Review:**
- Image assets
- CSS files
- JavaScript files

**Acceptance Criteria:**
- [ ] Images are optimized
- [ ] Page load times are acceptable
- [ ] No unnecessary assets

---

## Phase 9: Documentation & Launch Prep (P1)

### Task 9.1: Update README
**Priority:** P1  
**Estimated Time:** 1 hour

**Actions:**
1. Update README.md with:
   - Project description
   - Custom theme information
   - Setup instructions
   - Key features
2. Document any custom configurations

**Files to Create/Modify:**
- `README.md` (MODIFY)

**Acceptance Criteria:**
- [ ] README reflects the custom portfolio
- [ ] Setup instructions are clear

---

### Task 9.2: GitHub Pages Deployment Check
**Priority:** P0  
**Estimated Time:** 30 minutes

**Actions:**
1. Verify repository is set up for GitHub Pages
2. Test build locally: `bundle exec jekyll serve`
3. Check for build errors
4. Verify all assets are included
5. Prepare for deployment

**Files to Review:**
- `_config.yml`
- `Gemfile`
- All source files

**Acceptance Criteria:**
- [ ] Site builds without errors
- [ ] All assets are accessible
- [ ] Ready for GitHub Pages deployment

---

## Implementation Order & Dependencies

### Recommended Sequence:
1. **Phase 1** (Design System) → Foundation for everything
2. **Phase 2** (UI Components) → Needed for all pages
3. **Phase 7** (Configuration) → Should be done early
4. **Phase 3** (Homepage) → Core landing experience
5. **Phase 4** (Portfolio) → Main content showcase
6. **Phase 5** (CV) → Important but can follow portfolio
7. **Phase 6** (Contact) → Simple, can be done anytime
8. **Phase 8** (QA) → Final polish before launch
9. **Phase 9** (Documentation) → Final step

---

## Estimated Total Time
- **Phase 1:** 5-8 hours
- **Phase 2:** 4-6 hours
- **Phase 3:** 5-7 hours
- **Phase 4:** 7-9 hours
- **Phase 5:** 4-5 hours
- **Phase 6:** 1-2 hours
- **Phase 7:** 1.5 hours
- **Phase 8:** 4-7 hours
- **Phase 9:** 1.5 hours

**Total Estimated Time:** 33-52 hours

---

## Risk Mitigation

### Potential Issues:
1. **Theme Override Conflicts:** 
   - Solution: Use high specificity in CSS, import custom styles last
   
2. **Mobile Navigation:**
   - Solution: Test early and often, use media queries

3. **PDF File Location:**
   - Solution: Verify file exists, update path if needed

4. **GitHub Pages Build:**
   - Solution: Test locally first, check Jekyll version compatibility

---

## Success Metrics (From PRD)
- Interview Conversion: % of visitors who download CV or click "Contact" after viewing a Project Case Study
- Track via: Google Analytics (if configured) or manual tracking

---

## Notes
- All work must adhere to Jekyll static site constraints (no Node.js, no database)
- Use only HTML, Liquid, and SCSS (no React/Vue)
- Ensure GitHub Pages compatibility
- Maintain accessibility standards (WCAG AA minimum)

---

**Last Updated:** December 15, 2025  
**Status:** Ready for Implementation

