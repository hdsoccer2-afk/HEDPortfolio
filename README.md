# Hunter Davis — Portfolio (multi-file, hosting-ready)

Vanilla-JS single-page app. No build step. Static files only — deployable to any
static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Structure
    index.html          Shell: nav, router (navigate/render), and views —
                         Home, About, Resume, ThermoWave, Welded Stool, NDA tiles
    styles.css          All custom CSS (motion lives here: fade-up, hover, keyframes)
    ergodeck-view.js    ErgoDeck case study (large; kept separate). Loaded via <script src>
    deck-stage.js       Standalone poster/PDF web component — NOT loaded by index.html
    assets/             Image files

## Preview locally (important)
Do NOT open index.html with file:// — the browser blocks sibling JS/asset loads
(you'll get the exact "ErgoDeck not working" symptom). Run a local server instead:

    cd portfolio
    python3 -m http.server 8000
    # open http://localhost:8000

## Deploy
Any static host serves this folder as-is. Drag-and-drop the folder into
Netlify/Vercel/Cloudflare Pages, or push to a GitHub Pages repo. index.html is the entry.

## Images — what's included vs. what you must add
PROVIDED (12, ThermoWave, in assets/):
    thermo-hero.png  thermo-moodboard.png  thermo-sketch-a.png  thermo-sketch-b.png
    thermo-callouts.png  thermo-foam-34.png  thermo-foam-front.png
    thermo-invessel-stockpot.png  thermo-bezel-ui.png  thermo-cmf-silver.png
    thermo-cmf-maroon.png  thermo-countertop.png

YOU MUST ADD (drop into assets/ with these EXACT names — use your Figma-cropped exports):

  ErgoDeck:
    fig-ergodeck-hero.jpg  ergodeck-fig00.jpg  fig-research-01.png  fig-research-02.png
    fig-research-03.jpg  fig-insight-image.png  fig-sketches.jpg  fig-ai-ideation.jpg
    fig-v1-foam.jpg  fig-v2-carved.jpg  fig-v3-mdf.jpg  fig-tool-storage.jpg
    fig-cnc-process.jpg  fig-detail-top.png  fig-dimensions.png  fig-mfg-1.png
    fig-cad-v1.png  fig-cad-v3.png  fig-cmf-detail.png  fig-cmf-exploded.jpg
    fig-final-hero34.png  fig-final-detail-top.png  fig-final-incontext.png  fig-image240.png

  Welded Stool:
    welded-stool-cover.jpg  welded-stool-angle.png  welded-stool-side.png

  NDA tiles + logo:
    kohler-hero.jpg  skullcandy-cover.jpg  cad-renders-cover.jpg  hd-logo.png  thermowave-cover.jpg

## Known TODO (content)
- ThermoWave §03 positioning matrix: placeholder (decide: rebuild as HTML scatter vs. exported image)
- ThermoWave still-empty slots: §02 personas x2, §05 profile + in-vessel profile,
  §06 four signature-move diagrams, §07 Brass colorway, §08 3-color lineup + 3/4 hero + kitchen scene
- Leftover uploads not yet placed: Amazon-logo white unit; competitor-with-salmon shot

## Note on Tailwind
index.html pulls Tailwind from cdn.tailwindcss.com (in-browser JIT). Fine for now;
for a production build you may later swap to a compiled Tailwind CSS file.
