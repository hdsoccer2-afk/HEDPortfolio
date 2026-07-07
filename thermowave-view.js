/* ============================================================
   THERMOWAVE CASE STUDY — §00 through §09
   All content per Master Prompt V3 · Figma is canon
   Colorway retail mapping per Figma: Silver→Target,
   Brass→Williams Sonoma, Maroon→Wolf
   ============================================================ */

VIEWS.thermowave = function () {

  /* ---------- §03 positioning matrix as inline SVG ---------- */
  const matrixSVG = `
  <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; background:var(--deep); border:1px solid var(--border);" font-family="'Azeret Mono', monospace" role="img" aria-label="Two axis competitive positioning map. 14 products plotted.">
    <!-- axes -->
    <line x1="120" y1="60" x2="120" y2="540" stroke="#4A4D4B" stroke-width="1"/>
    <line x1="120" y1="540" x2="940" y2="540" stroke="#4A4D4B" stroke-width="1"/>
    <!-- axis labels -->
    <text x="120" y="42" fill="#A0A5A3" font-size="11" letter-spacing="2">▲ PREMIUM / $$$</text>
    <text x="120" y="566" fill="#6B6660" font-size="11" letter-spacing="2">UTILITARIAN / $ ▼</text>
    <text x="140" y="590" fill="#6B6660" font-size="11" letter-spacing="2">◀ STABLE FORM</text>
    <text x="770" y="590" fill="#A0A5A3" font-size="11" letter-spacing="2">DYNAMIC FORM ▶</text>
    <!-- price gridlines -->
    <text x="60" y="120" fill="#6B6660" font-size="10">$500+</text>
    <text x="66" y="250" fill="#6B6660" font-size="10">$250</text>
    <text x="66" y="380" fill="#6B6660" font-size="10">$100</text>
    <text x="72" y="500" fill="#6B6660" font-size="10">$50</text>
    <line x1="120" y1="112" x2="940" y2="112" stroke="#353837" stroke-width="1" stroke-dasharray="2 4"/>
    <line x1="120" y1="242" x2="940" y2="242" stroke="#353837" stroke-width="1" stroke-dasharray="2 4"/>
    <line x1="120" y1="372" x2="940" y2="372" stroke="#353837" stroke-width="1" stroke-dasharray="2 4"/>
    <line x1="120" y1="492" x2="940" y2="492" stroke="#353837" stroke-width="1" stroke-dasharray="2 4"/>

    <!-- CLUSTER A — generic sticks, bottom-left -->
    <g fill="#A0A5A3" font-size="9">
      <circle cx="190" cy="505" r="4" fill="#7F807D"/><text x="200" y="500">FITYOU $45 / 1100W</text>
      <circle cx="175" cy="482" r="4" fill="#7F807D"/><text x="185" y="478">WANCLE $46 / 850W</text>
      <circle cx="215" cy="462" r="4" fill="#7F807D"/><text x="225" y="458">MEGACHEF $64</text>
      <circle cx="195" cy="440" r="4" fill="#7F807D"/><text x="205" y="436">INSTANT POT $69</text>
      <circle cx="240" cy="424" r="4" fill="#7F807D"/><text x="250" y="420">MOPHOM $79</text>
      <circle cx="220" cy="398" r="4" fill="#7F807D"/><text x="230" y="394">INKBIRD WIFI $91</text>
    </g>
    <text x="150" y="535" fill="#6B6660" font-size="9" letter-spacing="1">[ CLUSTER A / GENERIC STICKS — 5 UNITS / $45–79 ]</text>

    <!-- CLUSTER B — premium boxes, upper-left -->
    <g fill="#A0A5A3" font-size="9">
      <rect x="196" y="176" width="8" height="8" fill="#7F807D"/><text x="212" y="184">SV SUPREME $400</text>
      <rect x="176" y="146" width="8" height="8" fill="#7F807D"/><text x="192" y="154">BREVILLE HYDROPRO $500</text>
      <rect x="226" y="118" width="8" height="8" fill="#7F807D"/><text x="242" y="126">TYPHUR STATION $599</text>
      <rect x="196" y="88" width="8" height="8" fill="#7F807D"/><text x="212" y="96">WOLF GOURMET $700</text>
    </g>
    <text x="150" y="212" fill="#6B6660" font-size="9" letter-spacing="1">[ CLUSTER B / PREMIUM BOXES — 4 UNITS / $400–700 ]</text>

    <!-- form gap arrow -->
    <line x1="440" y1="140" x2="640" y2="140" stroke="#D4A24C" stroke-width="1"/>
    <polygon points="640,140 630,135 630,145" fill="#D4A24C"/>
    <text x="470" y="130" fill="#D4A24C" font-size="10" letter-spacing="2">FORM GAP →</text>

    <!-- target blue ocean zone -->
    <rect x="660" y="70" width="250" height="160" fill="none" stroke="#D4A24C" stroke-width="1" stroke-dasharray="5 5"/>
    <text x="678" y="196" fill="#D4A24C" font-size="9" letter-spacing="1.5">[ TARGET BLUE OCEAN ]</text>
    <text x="678" y="210" fill="#A0A5A3" font-size="9" letter-spacing="1.5">PREMIUM × SCULPTED FORM</text>
    <text x="678" y="224" fill="#A0A5A3" font-size="9" letter-spacing="1.5">ZERO INCUMBENTS</text>

    <!-- ThermoWave crosshair -->
    <g stroke="#D4A24C" stroke-width="1.5">
      <circle cx="785" cy="130" r="14" fill="none"/>
      <line x1="785" y1="108" x2="785" y2="152"/>
      <line x1="763" y1="130" x2="807" y2="130"/>
    </g>
    <text x="740" y="94" fill="#D4A24C" font-size="11" letter-spacing="2">THERMOWAVE</text>
    <text x="726" y="168" fill="#6B6660" font-size="9" letter-spacing="1.5">[ TARGET / $400–600 ]</text>
  </svg>`;

  const failCard = (n, title) => `
    <div class="panel reveal" style="padding:24px;">
      <div class="f-mono" style="font-size:14px; color:var(--accent); letter-spacing:2px;">✕ ${n}</div>
      <div class="f-serif" style="font-size:24px; color:var(--t1); margin-top:14px;">${title}</div>
    </div>`;

  const readout = (tag, line1, line2) => `
    <div class="reveal" style="padding:20px 24px; border-right:1px solid var(--border);">
      <div class="f-mono" style="font-size:10px; color:var(--accent); letter-spacing:1.5px;">${tag}</div>
      <div class="f-sans" style="font-size:14px; color:var(--t1); margin-top:8px;">${line1}</div>
      <div class="f-mono" style="font-size:10px; color:var(--t3); margin-top:6px; letter-spacing:1px;">${line2}</div>
    </div>`;

  const sigCard = (n, name, tag, img) => `
    <div class="panel reveal" style="padding:24px;">
      <div class="mono-tag">${n}</div>
      <div class="f-serif" style="font-size:24px; color:var(--t1); margin-top:8px;">${name}</div>
      <div class="mono-tag" style="margin-top:6px;">${tag}</div>
      <div style="margin-top:16px;">${figCard({ src: img, desc: name.toUpperCase(), aspect: '1/1' })}</div>
    </div>`;

  return `
  ${TopNav('home')}
  <div class="scroll-progress"><div class="bar"></div></div>
  ${CaseStudyBack()}
  <main class="page">

    <!-- §00 · COVER -->
    <section class="section-block" style="border-top:none;">
      <div class="grid-collapse" style="display:grid; grid-template-columns:1fr 536px; gap:48px; align-items:start;">
        <div>
          ${secLabel('00', 'CULINARY · APPLIANCE')}
          <h1 class="f-serif reveal" style="font-size:clamp(56px,7vw,96px); color:var(--t1); line-height:1; margin-top:16px;">ThermoWave.</h1>
          <p class="f-serif reveal" style="font-style:italic; font-size:28px; color:var(--t2); margin-top:20px;">Premium sous vide circulator for sophisticated culinary enthusiasts.</p>
        </div>
        <div class="reveal">
          ${metaTable([
            ['ROLE', 'INDUSTRIAL DESIGNER (GROUP RESEARCH, SOLO DESIGN)'],
            ['DURATION', '10 WEEKS'],
            ['TOOLS', 'SOLIDWORKS · KEYSHOT · PROTOTYPING'],
            ['CONTEXT', 'IDUS-321 · SCAD'],
            ['STATUS', 'COMPLETED CONCEPT & APPEARANCE MODEL'],
          ])}
        </div>
      </div>
    </section>

    <!-- HERO -->
    <section class="reveal" style="margin:0 -40px;">
      ${figCard({ src: 'thermo-hero.png', fig: 'FIG.00', desc: 'HERO', ctx: 'KEYSHOT RENDER', aspect: '1920/820', overlayCaption: true })}
    </section>

    <!-- §01 · PROBLEM -->
    <section class="section-block">
      ${secLabel('01', 'PROBLEM')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Four failures. One category.</h2>
      <div class="mono-tag reveal" style="margin-top:10px;">SOUS VIDE · COMMODITY MARKET</div>
      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:36px;">
        ${failCard('01', 'Temperature setting friction.')}
        ${failCard('02', 'Inconsistent heat distribution.')}
        ${failCard('03', 'Noisy water pump.')}
        ${failCard('04', 'Generic shelf aesthetic.')}
      </div>
    </section>

    <!-- §02 · TARGET (accent band) -->
    <section class="accent-band" style="margin:0 -40px; padding:72px 40px;">
      <div style="max-width:1320px; margin:0 auto;">
        ${secLabel('02', 'TARGET')}
        <h2 class="f-serif reveal" style="font-size:clamp(40px,5vw,56px); color:var(--t1); margin-top:14px;">One user. Designed for her.</h2>
        <p class="f-sans reveal" style="color:var(--t2); margin-top:12px;">Sophisticated cook. Luxury kitchen. Time to spend.</p>
        <div class="provenance reveal">[N=6 PERSONAS · 1 SELECTED]</div>

        <div class="grid-collapse" style="display:grid; grid-template-columns:1.4fr 1fr; gap:56px; margin-top:44px; align-items:start;">
          <blockquote class="f-serif reveal" style="font-style:italic; font-size:clamp(26px,3vw,36px); line-height:1.35; color:var(--t1);">
            "With abundant free time, I immerse myself in cooking, delighting both myself and friends"
          </blockquote>
          <div>
            <div class="reveal" style="padding-bottom:24px; border-bottom:1px solid var(--border);">
              <div class="f-serif" style="font-size:72px; line-height:1; color:var(--t1);">1/6</div>
              <div class="mono-tag" style="margin-top:8px;">PERSONA SELECTED</div>
              <div class="provenance">[N=SEGMENTATION]</div>
            </div>
            <div class="reveal" style="padding:24px 0;">
              <div class="f-serif" style="font-size:72px; line-height:1; color:var(--t1);">$$$</div>
              <div class="mono-tag" style="margin-top:8px;">PRICE TIER</div>
              <div class="provenance">[N=COMPETITIVE MAP]</div>
            </div>
            <div class="reveal" style="max-width:326px;">
              ${figCard({ src: 'thermo-persona.jpg', desc: 'TARGET USER ARCHETYPE', aspect: '326/190' })}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- §03 · LANDSCAPE -->
    <section class="section-block">
      ${secLabel('03', 'LANDSCAPE')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Stable vs dynamic. Utilitarian vs premium.</h2>

      <figure class="fig-card reveal" style="margin-top:36px;">
        ${matrixSVG}
        <figcaption class="fig-caption">
          <span>FIG.01\u2009·\u2009COMPETITIVE MAP · 2-AXIS</span>
          <span class="ctx">14 PRODUCTS PLOTTED</span>
        </figcaption>
      </figure>
      <div class="provenance reveal">[N=14 / RETAIL Q4 / AMAZON · WILLIAMS SONOMA · MFR]</div>

      <div class="panel grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(4,1fr); margin-top:32px;">
        ${readout('[ 01 / DENSITY ]', 'Cheap generic sticks', '5 OF 14 UNITS · $45–79')}
        ${readout('[ 02 / PREMIUM ]', 'Premium but rectilinear', '4 UNITS · $400–700 · BOXES')}
        ${readout('[ 03 / GAP ]', 'Sculpted form unsold', 'NO INCUMBENT AT PREMIUM TIER')}
        ${readout('[ 04 / TARGET ]', 'ThermoWave wedge', '$400–600 · SCULPTED PREMIUM')}
      </div>
    </section>

    <!-- §04 · MOOD BOARD -->
    <section class="section-block">
      ${secLabel('04', 'MOOD BOARD')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Form explored.</h2>
      <p class="f-serif reveal" style="font-style:italic; font-size:clamp(18px,2.4vw,28px); color:var(--t2); margin-top:20px;">
        precision · sophisticated · refined · tailored · alluring · accomodating
      </p>
      <div class="reveal" style="margin-top:28px;">
        ${figCard({ src: 'thermo-moodboard.png', desc: 'MOOD BOARD', aspect: '1400/502' })}
      </div>
    </section>

    <!-- §04 · IDEATION -->
    <section class="section-block">
      ${secLabel('04', 'IDEATION')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Form explored.</h2>
      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(2,1fr); gap:20px; margin-top:36px;">
        <div class="reveal">${figCard({ src: 'thermo-sketch-a.png', fig: 'FIG.05', desc: 'SHEET A', ctx: 'SKETCH', aspect: '4/5' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-sketch-b.png', fig: 'FIG.06', desc: 'SHEET B', ctx: 'SKETCH', aspect: '4/5' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-sketch-profile.png', fig: 'FIG.07', desc: 'PROFILE STUDY', ctx: 'SKETCH', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-callouts.png', fig: 'FIG.08', desc: 'CALLOUTS', ctx: 'RENDER', aspect: '4/3' })}</div>
      </div>
    </section>

    <!-- §05 · FORM STUDY -->
    <section class="section-block">
      ${secLabel('05', 'FORM STUDY')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Foam. In the vessel.</h2>
      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(5,1fr); gap:14px; margin-top:36px;">
        <div class="reveal">${figCard({ src: 'thermo-foam-34.png', fig: 'FIG.09', desc: '3/4 VIEW', ctx: 'FOAM', aspect: '251/335' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-foam-profile.png', fig: 'FIG.10', desc: 'PROFILE', ctx: 'FOAM', aspect: '251/335' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-foam-front.png', fig: 'FIG.11', desc: 'FRONT', ctx: 'FOAM', aspect: '251/335' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-invessel-stockpot.png', fig: 'FIG.12', desc: 'IN-VESSEL', ctx: 'STOCKPOT', aspect: '251/335' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-invessel-profile.png', fig: 'FIG.13', desc: 'IN-VESSEL', ctx: 'PROFILE', aspect: '251/335' })}</div>
      </div>
    </section>

    <!-- §06 · SIGNATURE + UI -->
    <section class="section-block">
      ${secLabel('06', 'SIGNATURE + UI')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Four moves. One gesture.</h2>
      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:36px;">
        ${sigCard('01', 'Split Chassis', 'PROPORTION · WEIGHT', 'thermo-sig-split-chassis.png')}
        ${sigCard('02', 'TempArc', 'ROTATIONAL · BEZEL', 'thermo-sig-temparc.png')}
        ${sigCard('03', 'Prism Frame', 'ANGULAR · SILHOUETTE', 'thermo-sig-prism-frame.png')}
        ${sigCard('04', 'WaveMatrix', 'PASSIVE · QUIET FLOW', 'thermo-sig-wavematrix.png')}
      </div>

      <div class="grid-collapse" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:48px; align-items:start;">
        <div class="reveal">
          ${figCard({ src: 'thermo-bezel-ui.png', fig: 'FIG.14', desc: 'TEMP MODE', ctx: 'BEZEL UI', aspect: '4/3' })}
          <div style="display:flex; justify-content:space-between; margin-top:12px;">
            <span class="mono-tag" style="color:var(--t2);">ROTATE · TEMP</span>
            <span class="mono-tag" style="color:var(--t2);">SWIPE · MODE</span>
          </div>
        </div>
        <div class="reveal">
          ${figCard({ src: 'TW_logo.png', fig: 'FIG.15', desc: 'LOGO', ctx: 'BRAND', aspect: '4/3' })}
        </div>
      </div>
    </section>

    <!-- §07 · CMF -->
    <section class="section-block">
      ${secLabel('07', 'CMF')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Three finishes. Three shelves.</h2>
      <p class="f-sans reveal" style="color:var(--t2); margin-top:12px;">Each colorway tuned to a retailer fit.</p>

      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:36px;">
        <div class="reveal">
          ${figCard({ src: 'thermo-cmf-silver.png', fig: 'FIG.16', desc: 'SILVER', ctx: 'NATURAL · STAINLESS', aspect: '424/520' })}
          <div class="mono-tag" style="margin-top:10px;">RETAIL FIT · TARGET</div>
        </div>
        <div class="reveal">
          ${figCard({ src: 'thermo-cmf-brass.png', fig: 'FIG.17', desc: 'BRASS', ctx: 'WARM · ACCENT', aspect: '424/520' })}
          <div class="mono-tag" style="margin-top:10px;">RETAIL FIT · WILLIAMS SONOMA</div>
        </div>
        <div class="reveal">
          ${figCard({ src: 'thermo-cmf-maroon.png', fig: 'FIG.18', desc: 'MAROON', ctx: 'DARK · ANODIZED', aspect: '424/520' })}
          <div class="mono-tag" style="margin-top:10px;">RETAIL FIT · WOLF</div>
        </div>
      </div>
      <div class="mono-tag reveal" style="margin-top:24px; border-top:1px solid var(--border); padding-top:14px;">STAINLESS BODY · TITANIUM ELEMENT · BRASS BEZEL</div>
    </section>

    <!-- §08 · RENDERS -->
    <section class="section-block">
      ${secLabel('08', 'RENDERS')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Final.</h2>

      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:1fr 1.5fr 1fr; gap:20px; margin-top:36px; align-items:center;">
        <div class="reveal">${figCard({ src: 'thermo-render-front.png', desc: 'FRONT', aspect: '2/3' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-render-34hero.png', desc: '3/4 HERO', aspect: '1/1' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-render-top.png', desc: 'TOP', aspect: '315/598' })}</div>
      </div>

      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(2,1fr); gap:20px; margin-top:24px;">
        <div class="reveal">${figCard({ src: 'thermo-lineup.png', fig: 'FIG.19', desc: '3-COLOR LINEUP', ctx: 'RENDER', aspect: '16/9' })}</div>
        <div class="reveal">${figCard({ src: 'v4SousVide.bip.167.png', fig: 'FIG.20', desc: '3/4 HERO', ctx: 'RENDER', aspect: '16/9' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-countertop.png', fig: 'FIG.21', desc: 'COUNTERTOP', ctx: 'IN-CONTEXT', aspect: '16/9' })}</div>
        <div class="reveal">${figCard({ src: 'thermo-render-kitchen.png', fig: 'FIG.22', desc: 'KITCHEN SCENE', ctx: 'IN-CONTEXT', aspect: '16/9' })}</div>
      </div>
    </section>

    <!-- §09 · OUTCOME -->
    <section class="section-block">
      ${secLabel('09', 'OUTCOME')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Master temperature. Experience luxury.</h2>
      <div class="mono-tag reveal" style="margin-top:12px;">THERMOWAVE · SOUS VIDE · 2026</div>
    </section>

  </main>
  ${PageNav('WELDED STOOL', '/welded-stool')}
  ${Footer()}`;
};
