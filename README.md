# Hunter Davis ID — Portfolio

Vanilla JS single page app. No build step. Static files only, deployable to any
static host. Live on GitHub Pages at https://hdsoccer2-afk.github.io/HEDPortfolio/

Rebuilt July 2026 from the canonical Figma design file (Master Prompt V3 spec).

## Structure

    index.html            Shell: router, shared components (TopNav, Footer,
                          CaseStudyBack, PageNav, figCard, metaTable), Home view
    styles.css            All custom CSS: tokens, header, footer, cards, tables,
                          reveal motion, responsive breakpoints
    ergodeck-view.js      ErgoDeck case study (sections 00 through 09)
    thermowave-view.js    ThermoWave case study, includes inline SVG positioning matrix
    weldedstool-view.js   Welded Stool case study, includes full BOM tables
    pages-view.js         About, Resume, Kohler NDA stub, Skullcandy NDA stub,
                          CAD and Renders stub
    404.html              GitHub Pages SPA deep link redirect (passes route via ?r=)
    assets/               Image files

## Routes

    /                Home (hero + project grid)
    /ergodeck        ErgoDeck capstone case study
    /thermowave      ThermoWave case study
    /welded-stool    Welded Stool case study
    /about           About
    /resume          Resume
    /kohler          NDA stub
    /skullcandy      NDA stub
    /cad-renders     Under construction stub

## Preview locally

Do NOT open index.html with file:// since the browser blocks sibling JS and
asset loads. Run a local server instead:

    python3 -m http.server 8000
    # open http://localhost:8000

## Missing assets

These render as [AWAITING ASSET] placeholders until exported from Figma and
dropped into assets/ with these exact names:

    kohler-hero.jpg          Kohler NDA tile
    skullcandy-cover.jpg     Skullcandy NDA tile
    about-portrait.jpg       About page portrait
    resume-portrait.jpg      Resume page portrait
    thermo-persona.jpg       ThermoWave section 02 persona photo
    thermo-lineup.png        ThermoWave 3 color lineup render
    stool-assembly.png       SolidWorks stool assembly screenshot

## Note on Tailwind

index.html pulls Tailwind from cdn.tailwindcss.com (in browser JIT). Fine for
now; a compiled Tailwind file can replace it later for production.
