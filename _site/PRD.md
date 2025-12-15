Product Requirements Document (PRD)
Project: Rupak Thapa – Creative Technologist Portfolio Platform: Jekyll (Theme: academicpages Fork) Version: 1.0 (Implementation Ready) Date: December 15, 2025 Author: Rupak Thapa

1. Executive Summary
This project aims to transform a standard academic Jekyll theme into a "Dark-First," high-fidelity portfolio that bridges the gap between UX Design and AI Process Automation. The goal is to showcase Rupak Thapa’s dual expertise in "Vibe Coding" and System Automation to recruiters and hiring managers in the DACH region and remotely.

 
2. Core Context
2.1 Problem Statement
Standard academic portfolios are text-heavy and visually dry. They fail to communicate the modern, technical aesthetic required for roles in Generative AI and UI/UX Design. Rupak needs a platform that visually demonstrates his design skills while technically validating his automation expertise.

2.2 Solution
A customized fork of the academicpages Jekyll theme that retains the static site benefits (speed, GitHub Pages hosting) but overrides the visual layer with a "Creative Technologist" design system.

2.3 Target Audience
Primary: Lead Product Designers & Hiring Managers (looking for "Unicorn" designers who can code/automate).
 

Secondary: Academic Supervisors (Master's program at TH Ingolstadt).

 
2.4 North Star Metric
Interview Conversion: % of visitors who download the CV or click "Contact" after viewing a Project Case Study.

3. Design System & UX Foundations
Theme Name: "Dark Editorial" Philosophy: Elegant, technical, high-contrast, motion-driven but lightweight.

3.1 Color Palette (Sass Variables)
 

$primary-color: #f37f1b (Safety Orange) – Action color

 
$background-dark: #1a1a1a (Deep Grey) – Global background
$surface-card: #2d2d2d – Project cards
$text-heading: #ffffff – All H1-H3 headers
$text-body: #9ca3af (Grey-400) – Readable body text
$border-accent: 4px solid #f37f1b – Card top borders
3.2 Typography (_sass/custom/type.scss)
Font Family: Inter, sans-serif (Google Fonts).
H1 (Hero): Uppercase, Weight 900, Tracking -0.03em.
H2-H3: Weight 800/700.
Body: Weight 400, Line-height 1.7.
3.3 UI Components
Navigation: Floating "Pill" container with backdrop blur (blur: 10px) and semi-transparent background.
Buttons: Full radius (Pill shape), Primary Orange background, Hover scale 1.05.
Imagery: Grayscale by default; Full Color on Hover.

4. Technical Constraints & Architecture
Strict adherence to Jekyll Static Site constraints:

No Node.js backend or Database.
No React/Vue frameworks (Standard HTML/Liquid/SCSS only).
Hosting: GitHub Pages (Automatic build).
4.1 Implementation Strategy
CSS Overrides: Create assets/css/_custom_vibe.scss and import it at the end of main.scss to overwrite theme defaults without breaking the gem.
Data-Driven Content: Use _data/navigation.yml for menu links and _portfolio collection for case studies.
 

Asset Management: Images stored in assets/images/, PDF Resume in assets/files/.

 

5. Feature Modules (Scope)
Module 1: The "Vibe" Homepage
Priority: P0 (Critical)

Hero Section: "Creative Technologist & UX Designer." Sub-text: "Bridging Human-Computer Interaction with Generative AI Workflows".

 
CTA: "View Projects" (Anchor scroll) and "Download CV".
Visuals: Dark grid background pattern (CSS linear-gradient).
Module 2: Portfolio Collection
Priority: P0 (Critical) Content Sources:

Social Media Automation Manager:

 

Tech: Make.com, OpenAI API, Full-stack Content App.

 
Story: Automating caption generation and workflow integration.
Morrisville Smart City Dashboard:

 

Tech: IoT Data Viz, Dashboard Design.

 
Story: Visualizing live data for occupancy and flood warnings.
Restaurant Digital Display Manager:

 

Tech: Google Anti-Gravity, API Integration.

 
Module 3: Digital CV
Priority: P1 (High) Content Sources:

 

Experience: "Graphic Designer @ SAM IT Solutions" (4+ years), "Intern @ Varidx".

 
 

Education: "M.Sc UX Design @ TH Ingolstadt", "B.Sc CSIT @ Tribhuvan University".

 
 

Skills: "Process Automation" (Make.com), "AI Tools" (Cursor AI, v0.dev), "Design" (Figma).

 
Feature: "Print/Download PDF" button pointing to the file resume_ux__Copy__ai_blessing.pdf.

6. Information Architecture (Sitemap)
Home (/): Hero + Featured Projects Grid.
Projects (/portfolio/): Filterable list (Automation vs. Design).
Resume (/cv/): Markdown-rendered CV with download button.
Contact (/contact/): Simple page with mailto: link and LinkedIn URL.

7. Quality Assurance & Launch Checklist
7.1 Visual QA

[ ] Mobile: Ensure "Floating Pill" nav does not obstruct content on mobile.
[ ] Grid: Verify CSS Grid background is subtle (opacity < 5%).
7.2 Functional QA
[ ] Links: Test all "View Project" and external Social links.
[ ] PDF: Verify Resume download link works.

 
 

