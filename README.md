# Hunter Davis ID — Portfolio (static site)

Hosting-ready static site. No build step, no framework, no CDN runtime.
Open `index.html` locally or push the whole folder to any static host
(GitHub Pages, Netlify, etc.). All paths are relative.

## Files
- `index.html` — landing / work grid / about / contact
- `ergodeck.html` — ErgoDeck case study (§00–§09)
- `thermowave.html` — ThermoWave case study (§00–§10)
- `weldedstool.html` — Welded Stool case study (§00–§06)
- `styles.css` — shared stylesheet (all motion, matrix, UI panel, moves)
- `assets/` — 64 images, relative-referenced

## Standardized nav (all pages)
`← INDEX` (left) · `WORK / ABOUT / RESUME` (right). "Shop" removed.

## What was fixed in this build (vs. Figma source)
- **Section numbers renumbered sequentially top-to-bottom.** ThermoWave's
  §07/§08 inversion and Welded Stool's gaps are gone. Figure numbers (FIG.NN)
  were also made sequential and unique to remove source duplicates
  (Figma had FIG.04 ×2, FIG.06 ×2).
- **ThermoWave §09 CMF reordered:** Silver/Target (L) → Maroon/Williams Sonoma
  (M) → Brass/Wolf (R). Each on-body brand logo now matches its retail-fit
  caption; Wolf is far right.
- **Typos corrected:** "Luxury" (was "Luxary"), "accommodating" (was
  "accomodating").
- **ErgoDeck left exactly as-is** per prior instruction (its six flagged
  caption/figure items are unchanged).

## §03 ThermoWave positioning matrix
Built as a **live inline SVG** in `thermowave.html` (inside the
`tw_matrix()`-generated block), not an image. 14 products plotted, cluster
ellipses, blue-ocean target zone. To swap for an exported image later,
replace the `<svg class="matrix-svg">…</svg>` block with an `<img>`.

## PDF-extracted images — swap-in slots for your cleaner exports
These slots currently use images extracted from the layout PDF (lower res).
Drop your cleaner Figma exports into `assets/` using these EXACT filenames to
replace them — no code change needed:

ThermoWave §06 Form Study (foam):
- `tw-foam-34.jpg`        — 3/4 view, foam
- `tw-foam-profile.jpg`   — profile, foam
- `tw-foam-front.jpg`     — front, foam
- `tw-foam-pot.jpg`       — in-vessel, stockpot
- `tw-foam-vprofile.jpg`  — in-vessel, profile

ErgoDeck §06 renders:
- `ed-fig11.jpg`          — hero render, 3/4 angle
- `ed-fig12.jpg`          — top-surface tool-storage detail render

## Known open items (not bugs)
- **ThermoWave §08:** the layout shows a third "Final CAD" render that is not
  among the exports. The page shows the two that exist (3/4 hero + top-down)
  plus the two in-context shots. Add a third by dropping `tw-final-X.jpg` into
  `assets/` and adding one `fig()` call in the §08 block.
- **§06 move-card icons** (Split Chassis / TempArc / Prism Frame / WaveMatrix)
  are inline SVG, not images (source crops were unusable).
- **§07 logo** is an Instrument Serif "ThermoWave" wordmark + an inline brass
  flame SVG — not a supplied logo asset.
- **NDA tiles** (Kohler, Skullcandy, CAD & Renders) are locked WIP placeholder
  tiles on the index — no cover images.
