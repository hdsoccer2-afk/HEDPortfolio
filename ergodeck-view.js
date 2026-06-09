// ErgoDeck — 1920×14000 absolute-positioned canvas matching Figma frame
// All coordinates are relative to the 1920-wide canvas (left:0).
// Most content lives in a 1400-wide column centered at left:260.

(function () {
  // ── Reusable caption strip (1px top border, accent label + neutral label) ──
  function cap(left, top, width, accent, gray) {
    return `
      <div class="fg-cap" style="left:${left}px;top:${top}px;width:${width}px;">
        <span class="fg-cap-a">${accent}</span>
        ${gray ? `<span class="fg-cap-g">${gray}</span>` : ''}
      </div>`;
  }

  // ── Section header (§ NN · LABEL + serif title + optional subtitle) ──
  function sectionHead(left, top, width, num, title, sub, tag) {
    return `
      <div class="fg-head" style="left:${left}px;top:${top}px;width:${width}px;">
        <div class="fg-head-num">${num}</div>
        <h2 class="fg-head-title">${title}</h2>
        ${sub ? `<div class="fg-head-sub">${sub}</div>` : ''}
        ${tag ? `<div class="fg-head-tag">${tag}</div>` : ''}
      </div>`;
  }

  // ── Image with caption border below ──
  function figImg(left, top, w, h, src, alt, capAccent, capGray, opts) {
    const bg = (opts && opts.bg) ? opts.bg : 'transparent';
    const fit = (opts && opts.fit) ? opts.fit : 'none';
    const transform = (opts && opts.transform) ? opts.transform : '';
    return `
      <div class="fg-img-wrap" style="left:${left}px;top:${top}px;width:${w}px;">
        <div class="fg-img" style="width:${w}px;height:${h}px;background:${bg};">
          <img src="${src}" alt="${alt}" style="object-fit:${fit};${transform ? `transform:${transform};` : ''}">
        </div>
        ${capAccent ? cap(0, h + 10, w, capAccent, capGray) : ''}
      </div>`;
  }

  // ── HEADER (top 216.5, height 249) ─────────────────────────────
  const HEADER = `
    <div class="fg-section" style="top:216px;height:249px;">
      <!-- Title block · left -->
      <div style="position:absolute;left:300px;top:29px;width:760px;">
        <div class="fg-num">§ 00 · CAPSTONE</div>
        <h1 class="fg-h1"><span class="ital">Ergo</span>Deck.</h1>
        <div class="fg-h1-sub">Ergonomic creeper. Built for home garage reality.</div>
      </div>
      <!-- Spec table · right -->
      <div style="position:absolute;left:1084px;top:0;width:536px;">
        ${[
          ['ROLE','Industrial Designer · Sole'],
          ['DURATION','20 WEEKS · SENIOR CAPSTONE'],
          ['TOOLS','SOLIDWORKS · RHINO 8 · KEYSHOT · CNC'],
          ["CONTEXT","SCAD / IND. DESIGN / '26"],
          ['STATUS','COMPLETED — PROTOTYPE VALIDATED', true],
        ].map(r => `
          <div class="fg-spec">
            <div class="fg-spec-k">${r[0]}</div>
            <div class="fg-spec-v ${r[2] ? 'accent' : ''}">${r[1]}</div>
          </div>
        `).join('')}
      </div>
    </div>`;

  // ── HERO IMAGE FIG.00 (top 513.5, full-width 1920, height 720) ──
  const HERO = `
    <div class="fg-section fg-bleed" style="top:513px;height:720px;">
      <div style="position:absolute;inset:0;background:#222524;border:1px solid #4A4D4B;overflow:hidden;">
        <img src="assets/fig-ergodeck-hero.jpg" alt="ErgoDeck hero · in-context render"
             style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 60%;">
      </div>
      <div class="fg-hero-cap">
        <span class="fg-cap-a">FIG.00 · HERO ELEVATION · IN-CONTEXT RENDER</span>
      </div>
    </div>`;

  // ── § 01 PROBLEM / SOLUTION (top 1234.5, height 822) ───────────
  const S01 = `
    <div class="fg-section" style="top:1234px;height:822px;">
      ${sectionHead(300, 79, 1320,
        '§ 01 · PROBLEM / SOLUTION',
        '<span class="ital">Chronic</span> Musculoskeletal Strain and Lost Time.',
        'The hidden cost of working under cars.',
        'AUTOMOTIVE ERGONOMICS · UNMET MIDDLE TIER')}

      <!-- Two cards · row -->
      <div class="fg-card" style="left:300px;top:244px;width:648px;height:231px;">
        <div class="fg-card-head">
          <span class="serif ital" style="font-size:24px;color:#FAFAFA;">Current state</span>
          <span class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;">✕</span>
        </div>
        <ul class="fg-list">
          <li>Little ergonomic support.</li>
          <li>Severe lower back pain.</li>
          <li>Time lost retrieving tools.</li>
          <li>Only cheap creepers or high-cost shop lifts.</li>
        </ul>
      </div>
      <div class="fg-card" style="left:972px;top:244px;width:648px;height:231px;">
        <div class="fg-card-head">
          <span class="serif ital" style="font-size:24px;color:#D4A24C;">What's needed</span>
          <span class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;">+</span>
        </div>
        <ul class="fg-list">
          <li>Body-mapped ergonomic contours.</li>
          <li>Integrated tool storage.</li>
          <li>Versatile positioning support.</li>
          <li>Adjustability.</li>
        </ul>
      </div>

      <!-- 4 benchmark images · 357×268 each, gap 4 -->
      ${[
        ['fig-image240.png',   'M-AUTO 42.5" CREEPER · benchmark'],
        ['fig-image247.png',   'MECHANIC PLASTIC CREEPER · benchmark'],
        ['fig-image82.png',    'THERMOGRAPHIC LOAD MAP · supine'],
        ['fig-image92.png',    'ERGONOMIC SKELETON DIAGRAM · supine'],
      ].map(([src, alt], i) => `
        <div class="fg-img" style="position:absolute;left:${300 + i * 361}px;top:520px;width:357px;height:268px;">
          <img src="assets/${src}" alt="${alt}" >
        </div>
      `).join('')}
    </div>`;

  // ── § 02 THE INSIGHT (top 2107.5, full-width 1920, height 572) ─
  const S02 = `
    <div class="fg-section fg-bleed fg-s02" style="top:2107px;height:572px;">
      <!-- Text col -->
      <div style="position:absolute;left:300px;top:97px;width:763px;">
        <div class="fg-num" style="margin-bottom:18px;">§ 02 · THE INSIGHT</div>
        <h2 class="serif ital" style="font-size:72px;line-height:1;color:#FAFAFA;letter-spacing:-0.01em;margin-bottom:18px;">
          Designed for minutes.<br>Used for hours.
        </h2>
        <div class="serif ital" style="font-size:24px;color:#A0A5A3;margin-bottom:22px;">
          The creeper was never built for the home mechanic's reality.
        </div>
        <p style="font-family:'DM Sans',sans-serif;font-size:16px;line-height:1.6;color:#FAFAFA;max-width:640px;">
          The Mechanic's creeper was originally only designed for short use.
          Mechanics were leaving constantly to retrieve and look for tools —
          losing at least 45 minutes a day, standing up and crouching back
          down for things that should have been within arm's reach.
        </p>
      </div>

      <!-- Stats col -->
      <div style="position:absolute;left:1111px;top:148px;width:343px;">
        <div class="fg-stat">
          <div class="fg-stat-num">86.6%</div>
          <div class="fg-stat-lbl" style="margin-top:4px;">CURRENTLY EXPERIENCE DISCOMFORT / PAIN</div>
          <div class="fg-stat-meta">[N=SURVEY · HOME MECHANICS]</div>
        </div>
        <div class="fg-stat" style="margin-top:32px;">
          <div class="fg-stat-num">45</div>
          <div class="fg-stat-unit">min/day</div>
          <div class="fg-stat-lbl">LOST TO TOOL RETRIEVAL</div>
          <div class="fg-stat-meta">[N=FIELD OBSERVATION · TIMED]</div>
        </div>
      </div>

      <!-- Square image · right edge -->
      <div class="fg-img" style="position:absolute;left:1494px;top:100px;width:368px;height:368px;background:#222524;">
        <img src="assets/fig-insight-image.png" alt="Mechanic working under car · insight">
      </div>
    </div>`;

  // ── § 03 RESEARCH (top 2679.5, height 852) ─────────────────────
  const S03_IMGS = [
    ['assets/fig-research-01.png','FIG.01 · USABILITY TESTING','EVALUATING THE EXISTING MARKET'],
    ['assets/fig-research-02.png','FIG.02 · OBSERVATION','SEEING HOW THE INDUSTRY USES IT'],
    ['assets/fig-research-03.jpg','FIG.03 · FEASIBILITY STUDY','V1 ERGONOMIC PROTOTYPE TESTING'],
  ];
  const S03 = `
    <div class="fg-section" style="top:2742px;height:852px;">
      ${sectionHead(300, 0, 1320,
        '§ 03 · RESEARCH',
        '<span class="ital">Consistent</span> Feedback across the boards',
        'What they said and what they actually did.')}

      <!-- 3 images row -->
      ${S03_IMGS.map((r, i) => `
        <div style="position:absolute;left:${300 + i * 445}px;top:204px;width:430px;">
          <div class="fg-img" style="width:430px;height:320px;">
            <img src="${r[0]}" alt="${r[1]}">
          </div>
          ${cap(0, 330, 430, r[1], r[2])}
        </div>
      `).join('')}

      <!-- Competitive price ladder -->
      <div style="position:absolute;left:300px;top:632px;width:1320px;height:156px;border:1px solid #4A4D4B;padding:32px 24px 24px 24px;">
        <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:16px;">
          COMPETITIVE PRICE LADDER · 73% PURCHASE INTENT
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;">
          ${[
            ['LOW','35%','$50–200 · Commodity creepers','#7F807D','#A0A5A3'],
            ['MID · ERGODECK','70%','$500–700 · Premium position','#D4A24C','#FAFAFA','accent'],
            ['HIGH','100%','$2000+ · Professional lifts','#7F807D','#A0A5A3'],
          ].map(r => `
            <div>
              <div class="mono" style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:${r[5] === 'accent' ? '#D4A24C' : '#6B6660'};margin-bottom:6px;">${r[0]}</div>
              <div style="height:24px;background:#353837;border:1px solid ${r[5] === 'accent' ? '#D4A24C' : '#4A4D4B'};position:relative;">
                <div style="position:absolute;inset:0;width:${r[1]};background:${r[3]};"></div>
              </div>
              <div style="font-family:'DM Sans',sans-serif;font-size:12px;color:${r[4]};margin-top:8px;">${r[2]}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;

  // ── § 04 IDEATION (top 3519.94, height 2212) ───────────────────
  const S04 = `
    <div class="fg-section" style="top:3594px;height:2212px;">
      ${sectionHead(300, 63, 1320,
        '§ 04 · IDEATION',
        '<span class="ital">Expanding</span> the sketch phase',
        'Hand and machine — two modes of divergence.')}

      <!-- Big sketch image -->
      <div class="fg-img" style="position:absolute;left:312px;top:204px;width:1296px;height:822px;">
        <img src="assets/fig-sketches.jpg" alt="Sketch compilation">
      </div>

      <!-- AI MidJourney panel -->
      <div style="position:absolute;left:300px;top:1058px;width:1320px;height:1090px;padding:48px 32px 32px 32px;">
        <div class="fg-row-border" style="padding-bottom:16px;">
          <span class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;">AI · SKETCH PHASE ONLY</span>
          <span class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.15em;">NOT USED FOR: ERGONOMICS · CMF · MECHANISM</span>
        </div>
        <div style="padding:17px 0;">
          <h3 class="serif ital" style="font-size:30px;color:#FAFAFA;">AI MidJourney Exploration</h3>
        </div>

        <!-- AI matrix -->
        <div style="position:absolute;left:32px;top:163px;width:1256px;display:flex;justify-content:center;">
          <div style="position:relative;width:800px;">
            <div class="fg-img" style="width:800px;height:720px;border:1px solid #4A4D4B;">
              <img src="assets/fig-ai-ideation.jpg" alt="AI ideation matrix · 90 thumbnails" >
            </div>
            ${cap(0, 730, 800, 'FIG.08B · AI IDEATION MATRIX', 'N=90 · MIDJOURNEY + CLAUDE')}
          </div>
        </div>

        <!-- Bottom border row (3 cols) -->
        <div style="position:absolute;left:32px;top:929px;width:1256px;height:51px;border-top:1px solid #4A4D4B;border-bottom:1px solid #4A4D4B;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;padding:0 0;">
          <div style="padding:0 24px 0 0;">
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:4px;">USED WHERE</div>
            <div class="mono" style="font-size:11px;color:#FAFAFA;letter-spacing:0.15em;">FORM EXPLORATION</div>
          </div>
          <div style="padding:0 24px;border-left:1px solid #4A4D4B;">
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:4px;">NOT USED FOR</div>
            <div class="mono" style="font-size:11px;color:#FAFAFA;letter-spacing:0.15em;">Ergonomics. CMF. Mechanism.</div>
          </div>
          <div style="padding:0 0 0 24px;border-left:1px solid #4A4D4B;">
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:4px;">RESULT</div>
            <div class="mono" style="font-size:11px;color:#D4A24C;letter-spacing:0.15em;">Continued with the ergonomic sports car seat form</div>
          </div>
        </div>

        <!-- Pull quote -->
        <div style="position:absolute;left:32px;top:1000px;width:1256px;">
          <div class="serif ital" style="font-size:14px;color:#A0A5A3;line-height:1.4;">
            "AI extended my sketch phase — not my decision-making."
          </div>
          <div class="mono" style="font-size:9px;color:#6B6660;letter-spacing:0.15em;margin-top:8px;">
            [N=90 GENERATED · N=90 REJECTED · N=0 SHIPPED]
          </div>
        </div>
      </div>
    </div>`;

  // ── § 05 ITERATION (Section2 · top 5806, height 2373.25) ───────
  const ITER_ROWS = [
    ['V1','CNC Pink Foam','Overall dimensions. Ergonomic contours confirmed.','Fluid form aesthetic rejected — too soft, consumer wellness.'],
    ['V2','Hand Carved Foam','Form language locked. Tool storage placement visualized.','Faceted edges added. Material contrast introduced.'],
    ['V3','CNC MDF','Final visual and ergonomic validation.','Manufacturing refinement. CNC paths optimized. Foam contouring adjusted.'],
  ];

  const S05 = `
    <div class="fg-section" style="top:5806px;height:2373px;">
      ${sectionHead(300, 63, 1320,
        '§ 05 · ITERATION',
        '<span class="ital">Three</span> prototypes',
        "Each build answered what the last one couldn't.")}
      <div style="position:absolute;left:300px;top:195px;width:1320px;font-family:'DM Sans',sans-serif;font-size:16px;color:#FAFAFA;line-height:1.5;">
        CNC foam. Hand carved foam. CNC MDF. The making method changed with the question being asked.
      </div>

      <!-- Iteration log table -->
      <div style="position:absolute;left:300px;top:268px;width:1320px;border:1px solid #4A4D4B;">
        <div class="fg-iter-row" style="background:#222524;border-bottom:1px solid #4A4D4B;">
          <div class="fg-iter-c1 mono accent">ITERATION LOG</div>
          <div class="fg-iter-c2 mono">MAKING METHOD</div>
          <div class="fg-iter-c3 mono">WHAT IT ANSWERED</div>
          <div class="fg-iter-c4 mono">WHAT CHANGED</div>
        </div>
        ${ITER_ROWS.map((r, i) => `
          <div class="fg-iter-row" style="${i < 2 ? 'border-bottom:1px solid #4A4D4B;' : ''}">
            <div class="fg-iter-c1 serif ital" style="font-size:20px;color:#D4A24C;">${r[0]}</div>
            <div class="fg-iter-c2 mono" style="color:#FAFAFA;">${r[1]}</div>
            <div class="fg-iter-c3" style="font-family:'DM Sans',sans-serif;font-size:14px;color:#FAFAFA;">${r[2]}</div>
            <div class="fg-iter-c4" style="font-family:'DM Sans',sans-serif;font-size:14px;color:#A0A5A3;">${r[3]}</div>
          </div>
        `).join('')}
      </div>

      <!-- THE BUILDS subhead -->
      <div style="position:absolute;left:300px;top:624px;width:1320px;">
        <div class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;margin-bottom:8px;">THE BUILDS</div>
        <h3 class="serif ital" style="font-size:36px;color:#FAFAFA;">What each version looked like.</h3>
      </div>

      <!-- PART A · 3 cards at 426.67×416 -->
      ${[
        ['assets/fig-v1-foam.jpg','V1 · CNC PINK FOAM','PROPORTION + ERGONOMIC CONTOUR VALIDATION','','[WEEK 03 · SENIOR STUDIO I]'],
        ['assets/fig-v2-carved.jpg','V2 · HAND CARVED FOAM','FORM LOCK · TOOL STORAGE VISUALIZATION','CAD printout used to map tool placement before committing to form.','[WEEK 06 · SENIOR STUDIO I]'],
        ['assets/fig-v3-mdf.jpg','V3 · CNC MDF','FINAL VISUAL + ERGONOMIC PROTOTYPE','Production intent: ABS blow mold shell + TIG welded aluminum frame.','[WEEK 09 · SENIOR STUDIO II]'],
      ].map((b, i) => `
        <div style="position:absolute;left:${300 + i * 446.67}px;top:780px;width:426.67px;">
          <div class="fg-img" style="width:426.67px;height:320px;border:${i === 2 ? '1px solid #4A4D4B' : 'none'};">
            <img src="${b[0]}" alt="${b[1]}">
          </div>
          <div class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;margin-top:14px;">${b[1]}</div>
          <div class="mono" style="font-size:10px;color:#FAFAFA;letter-spacing:0.15em;margin-top:6px;">${b[2]}</div>
          ${b[3] ? `<div class="serif ital" style="font-size:14px;color:#A0A5A3;margin-top:8px;line-height:1.4;">${b[3]}</div>` : ''}
          <div class="mono" style="font-size:10px;color:#6B6660;letter-spacing:0.15em;margin-top:8px;">${b[4]}</div>
        </div>
      `).join('')}

      <!-- PART B · DETAIL GRID (tall left + 2 stacked right) -->
      <!-- LEFT TALL FIG.13 -->
      <div style="position:absolute;left:300px;top:1244px;width:656px;">
        <div class="fg-img" style="width:656px;height:1029px;">
          <img src="assets/fig-cnc-process.jpg" alt="CNC in progress · MDF shell">
        </div>
        ${cap(0, 1039, 656, 'FIG.13 · PROCESS · CNC IN PROGRESS', 'MDF SHELL')}
      </div>
      <!-- RIGHT TOP FIG.14 -->
      <div style="position:absolute;left:970px;top:1244px;width:650px;">
        <div class="fg-img" style="width:650px;height:487px;">
          <img src="assets/fig-tool-storage.jpg" alt="Tool storage test · V2 phase">
        </div>
        ${cap(0, 497, 650, 'FIG.14 · TOOL STORAGE TEST · V2 PHASE', 'CAD PRINTOUT ON TABLE')}
      </div>
      <!-- RIGHT BOTTOM FIG.12 -->
      <div style="position:absolute;left:970px;top:1785px;width:650px;">
        <div class="fg-img" style="width:650px;height:488px;">
          <img src="assets/fig-detail-top.png" alt="Detail · top surface">
        </div>
        ${cap(0, 498, 650, 'FIG.12 · DETAIL · TOP SURFACE', 'TOOL STORAGE ZONE')}
      </div>

      <!-- Bottom rule -->
      <div style="position:absolute;left:300px;top:2310px;width:1320px;border-top:1px solid #4A4D4B;padding-top:16px;">
        <span class="mono" style="font-size:9px;color:#6B6660;letter-spacing:0.15em;">
          VISUAL PROTOTYPE · CNC MDF · FORM AND ERGONOMIC VALIDATION ONLY · PRODUCTION MATERIALS DIFFER
        </span>
      </div>
    </div>`;

  // ── § 06 ENGINEERING (top ~8225, height 1663) ──────────────────
  const STEPS = [
    ['STEP 01','Frame Fabrication','6061-T6 aluminum tube cutting & CNC bending'],
    ['STEP 02','Frame Welding','TIG weld joints · deburr all seams'],
    ['STEP 03','Frame Finishing','Type II anodize per MIL-A-8625 · matte clear'],
    ['STEP 04','Shell Molding','ABS blow mold · TPE bumper overmold. Wall: 2.5–3mm · Draft: 1.5° min'],
    ['STEP 05','Foam Contouring','CNC mill HD polyurethane · body-mapped profile'],
    ['STEP 06','Padding Assembly','Neoprene laminate · magnet press-fit'],
  ];
  const SPEC_ROWS = [
    ['MATERIAL','ABS Shell'],
    ['PROCESS','Blow Molded'],
    ['DRAFT ANGLE','1.5° Minimum'],
    ['WALL THK','2.5 – 3 mm'],
    ['TOLERANCE','±0.3 mm'],
  ];
  const KEY_SPECS = [
    ['07','MAIN ASSEMBLIES','[BOM / V3]'],
    ['8–10 WK','TOOLING LEAD','[BLOW MOLD / EST.]'],
    ['Modular','ASSEMBLY TYPE','NO PERMANENT BONDS'],
    ['$180–250','EST. MFG COST','[AT SCALE]'],
  ];

  const S06 = `
    <div class="fg-section" style="top:8225px;height:1663px;">
      ${sectionHead(300, 63, 1320,
        '§ 06 · ENGINEERING',
        '<span class="ital">Designed</span> to be made.',
        'Production spec. Blow mold primary process.')}

      <!-- Two col: dimensions / tech spec -->
      <div style="position:absolute;left:300px;top:204px;width:648px;">
        <div class="fg-img" style="width:648px;height:486px;border:1px solid #4A4D4B;display:flex;align-items:center;justify-content:center;">
          <img src="assets/fig-dimensions.png" alt="Dimensioned drawing">
        </div>
        ${cap(0, 496, 648, 'FIG.10 · DIMENSIONED DRAWING', 'SOLIDWORKS')}
      </div>

      <div style="position:absolute;left:972px;top:204px;width:648px;">
        <div style="border:1px solid #4A4D4B;padding:25px;">
          <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;padding-bottom:12px;border-bottom:1px solid #4A4D4B;">
            TECH SPEC — V3
          </div>
          ${SPEC_ROWS.map((r, i) => `
            <div style="display:grid;grid-template-columns:1fr 2fr;padding:14px 0;${i < SPEC_ROWS.length - 1 ? 'border-bottom:1px solid #4A4D4B;' : ''}">
              <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.15em;">${r[0]}</div>
              <div style="font-family:'DM Sans',sans-serif;font-size:14px;color:#FAFAFA;">${r[1]}</div>
            </div>
          `).join('')}
        </div>
        <div style="border-left:2px solid #D4A24C;padding:12px 16px;margin-top:16px;">
          <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:4px;">DESIGN INTENT</div>
          <div class="serif ital" style="font-size:20px;color:#FAFAFA;line-height:1.3;">
            Integral structural support without excess weight.
          </div>
        </div>
        <div class="mono" style="font-size:10px;color:#6B6660;letter-spacing:0.15em;margin-top:14px;">
          VALIDATED VIA MECHANICAL FASTENER ATTACHMENT
        </div>
      </div>

      <!-- Manufacturing sequence subhead -->
      <div style="position:absolute;left:300px;top:780px;width:1320px;">
        <div class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;margin-bottom:8px;">PRODUCTION INTENT · MANUFACTURING SEQUENCE</div>
        <h3 class="serif ital" style="font-size:36px;color:#FAFAFA;line-height:1;">How it gets made at scale.</h3>
        <div class="mono" style="font-size:9px;color:#6B6660;letter-spacing:0.15em;margin-top:10px;">
          VISUAL PROTOTYPE: CNC MDF · PRODUCTION INTENT: ABS BLOW MOLD + ALUMINUM FRAME
        </div>
      </div>

      <!-- 6-step row at top 920, h 145 -->
      <div style="position:absolute;left:300px;top:928px;width:1320px;display:grid;grid-template-columns:repeat(6, 1fr);gap:8px;">
        ${STEPS.map(s => `
          <div style="background:#1A1C1B;border:1px solid #4A4D4B;padding:17px;min-height:130px;">
            <div class="mono" style="font-size:9px;color:#D4A24C;letter-spacing:0.2em;margin-bottom:8px;">${s[0]}</div>
            <div class="serif ital" style="font-size:18px;color:#FAFAFA;line-height:1.1;margin-bottom:10px;">${s[1]}</div>
            <div class="mono" style="font-size:9px;color:#A0A5A3;letter-spacing:0.1em;line-height:1.4;">${s[2]}</div>
          </div>
        `).join('')}
      </div>

      <!-- Manufacturing reference image (full-width, matching Figma) -->
      <div class="fg-img" style="position:absolute;left:300px;top:1100px;width:1320px;height:477px;">
        <img src="assets/fig-mfg-1.png" alt="Manufacturing reference · exploded view" >
      </div>

      <!-- KEY SPECS STRIP -->
      <div style="position:absolute;left:300px;top:1620px;width:1320px;height:121px;border:1px solid #4A4D4B;display:grid;grid-template-columns:repeat(4, 1fr);">
        ${KEY_SPECS.map((s, i) => `
          <div style="padding:20px;${i < 3 ? 'border-right:1px solid #4A4D4B;' : ''}">
            <div class="serif" style="font-size:36px;color:#FAFAFA;line-height:1;margin-bottom:10px;">${s[0]}</div>
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:4px;">${s[1]}</div>
            <div class="mono" style="font-size:9px;color:#6B6660;letter-spacing:0.15em;">${s[2]}</div>
          </div>
        `).join('')}
      </div>
    </div>`;

  // ── CAD COMPARISON · folded into §06 tail (no header, matches Figma) ──
  const S07 = `
    <div class="fg-section" style="top:9950px;height:450px;">
      <!-- V1 CAD → V3 CAD · continuation of §06 ENGINEERING, no section number -->
      <div style="position:absolute;left:300px;top:40px;width:1320px;height:340px;display:grid;grid-template-columns:1fr 80px 1fr;gap:24px;align-items:center;">
        <div>
          <div class="fg-img" style="width:100%;height:300px;border:1px solid #4A4D4B;">
            <img src="assets/fig-cad-v1.png" alt="V1 CAD">
          </div>
          <div class="fg-cap-inline"><span class="fg-cap-a">V1 CAD</span><span class="fg-cap-g">RHINO / SOLIDWORKS</span></div>
        </div>
        <div class="mono" style="font-size:36px;color:#D4A24C;text-align:center;">→</div>
        <div>
          <div class="fg-img" style="width:100%;height:300px;border:1px solid #4A4D4B;">
            <img src="assets/fig-cad-v3.png" alt="V3 CAD">
          </div>
          <div class="fg-cap-inline"><span class="fg-cap-a">V3 CAD</span><span class="fg-cap-g">FINAL GEOMETRY</span></div>
        </div>
      </div>
    </div>`;

  // ── § 08 CMF (top ~11220) ──────────────────────────────────────
  const SWATCHES = [
    ['#7F807D','PRIMARY · NEUTRAL GRAY','#7F807D · ABS STRUCTURAL SHELL', false],
    ['#24050B','SECONDARY · DARK MAROON','#24050B · NEOPRENE PADDING', false],
    ['#2E3532','TERTIARY · DARK TEAL','#2E3532 · TPE BUMPER · HARDWARE', false],
  ];
  const S08 = `
    <div class="fg-section" style="top:10460px;height:1400px;">
      ${sectionHead(300, 63, 1320,
        '§ 08 · CMF',
        '<span class="ital">Color</span>, material, finish.')}

      <!-- Exploded image -->
      <div style="position:absolute;left:300px;top:223px;width:1006px;">
        <div class="fg-img">
          <img src="assets/fig-cmf-exploded.jpg" alt="Annotated exploded CAD">
        </div>
        ${cap(0, 576, 1006, 'FIG.20 · ANNOTATED EXPLODED', 'CAD LAYER BREAKDOWN')}
      </div>

      <!-- 3 swatches column -->
      <div style="position:absolute;left:1346px;top:223px;width:274px;">
        ${SWATCHES.map((s, i) => `
          <div style="margin-bottom:${i < 2 ? '24px' : '0'};">
            <div style="width:100%;aspect-ratio:2/1;background:${s[0]};border:1px solid #4A4D4B;"></div>
            <div class="mono" style="font-size:10px;letter-spacing:0.15em;color:#FAFAFA;margin-top:10px;">${s[1]}</div>
            <div class="mono" style="font-size:10px;letter-spacing:0.15em;color:#6B6660;margin-top:4px;">${s[2]}</div>
          </div>
        `).join('')}
      </div>

      <!-- 6 CMF detail thumbs -->
      <div style="position:absolute;left:300px;top:830px;width:1320px;display:grid;grid-template-columns:repeat(3, 1fr);gap:8px;">
        ${[
          ['fig-cmf-detail-v1.png','CMF · Orange / Black'],
          ['fig-cmf-detail-v2.png','CMF · Brown / Tan'],
          ['fig-cmf-detail-v3.png','CMF · Dark Green'],
          ['fig-cmf-detail-v4.png','CMF · Mystic Dark Forest'],
          ['fig-cmf-detail-v5.png','CMF · Mystic Dark Forest v2'],
          ['fig-cmf-detail-v6.png','CMF · Rustic Cabin'],
        ].map(([src, alt]) => `
          <div class="fg-img">
            <img src="assets/${src}" alt="${alt}">
          </div>
        `).join('')}
      </div>
    </div>`;

  // ── § 09 OUTCOME (top 12564, height 1657.5) ────────────────────
  const S09 = `
    <div class="fg-section" style="top:11500px;height:2240px;">
      ${sectionHead(300, 63, 1320,
        '§ 09 · OUTCOME',
        '<span class="ital">Prototype</span> validated. Partners wanted to explore commercial fabrication')}

      <!-- Final in-context render -->
      <div style="position:absolute;left:300px;top:223px;width:1280px;">
        <div class="fg-img" style="width:1280px;height:730px;">
          <img src="assets/fig-final-incontext.png" alt="Final in-context · garage / user scale">
        </div>
        ${cap(0, 740, 1320, 'FIG.21 · FINAL IN-CONTEXT RENDER', 'GARAGE / USER SCALE')}
      </div>

      <!-- Physical prototype hero shots · relocated from former §07 detail grid -->
      <div style="position:absolute;left:300px;top:1043px;width:650px;">
        <div class="fg-img" style="width:650px;height:502px;">
          <img src="assets/fig-final-hero34.png" alt="Hero 3/4 angle · CNC MDF">
        </div>
        ${cap(0, 512, 650, 'FIG.22 · HERO · 3/4 ANGLE', 'CNC MDF')}
      </div>
      <div style="position:absolute;left:970px;top:1043px;width:650px;">
        <div class="fg-img" style="width:650px;height:489px;">
          <img src="assets/fig-final-detail-top.png" alt="Detail top surface · tool storage zone">
        </div>
        ${cap(0, 499, 650, 'FIG.23 · DETAIL · TOP SURFACE', 'TOOL STORAGE ZONE')}
      </div>

      <!-- Status block -->
      <div style="position:absolute;left:300px;top:1620px;width:1320px;border:1px solid #4A4D4B;padding:32px;">
        <div class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;margin-bottom:16px;">STATUS</div>
        <div class="serif ital" style="font-size:30px;color:#FAFAFA;margin-bottom:24px;line-height:1.2;">
          Validated. Manufacturing-ready. Seeking partner.
        </div>
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;padding-top:24px;border-top:1px solid #4A4D4B;">
          <div>
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:8px;">VALIDATION</div>
            <div class="mono" style="font-size:11px;color:#FAFAFA;letter-spacing:0.15em;">VISUAL MODEL COMPLETED · ENGINEERS DESIRED FOR MANUFACTURING</div>
          </div>
          <div>
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:8px;">MANUFACTURING</div>
            <div class="mono" style="font-size:11px;color:#FAFAFA;letter-spacing:0.15em;">ABS BLOW MOLD · DFM REVIEWED · 8–10 WK TOOLING</div>
          </div>
          <div>
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:8px;">STATUS</div>
            <div class="mono" style="font-size:11px;color:#D4A24C;letter-spacing:0.15em;">CAPSTONE COMPLETE</div>
          </div>
        </div>
      </div>

      <!-- Next steps -->
      <div style="position:absolute;left:300px;top:1910px;width:1320px;border-left:2px solid #D4A24C;background:#222524;padding:24px;">
        <div class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;margin-bottom:8px;">NEXT STEPS</div>
        <div class="serif ital" style="font-size:24px;color:#FAFAFA;line-height:1.3;margin-bottom:24px;">
          Patent filing in progress. Seeking manufacturing partner.
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;padding-top:24px;border-top:1px solid #4A4D4B;">
          <div>
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:8px;">PATENT</div>
            <div style="font-family:'DM Sans',sans-serif;font-size:14px;color:#FAFAFA;line-height:1.5;margin-bottom:12px;">Professor-recommended filing. Unique mechanism and integrated storage system.</div>
            <div class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;">● IN PROGRESS</div>
          </div>
          <div>
            <div class="mono" style="font-size:10px;color:#A0A5A3;letter-spacing:0.2em;margin-bottom:8px;">MANUFACTURING PARTNER</div>
            <div style="font-family:'DM Sans',sans-serif;font-size:14px;color:#FAFAFA;line-height:1.5;margin-bottom:12px;">Open to licensing or co-development. DFM documentation available.</div>
            <div class="mono" style="font-size:10px;color:#D4A24C;letter-spacing:0.2em;">● SEEKING</div>
          </div>
        </div>
      </div>

      <!-- Footer links -->
      <div style="position:absolute;left:300px;top:2170px;width:1320px;display:flex;justify-content:space-between;border-top:1px solid #4A4D4B;padding-top:24px;">
        <a class="mono" style="font-size:11px;color:#A0A5A3;letter-spacing:0.2em;cursor:pointer;" onclick="navigate('home')">← INDEX</a>
        <a class="mono" style="font-size:11px;color:#D4A24C;letter-spacing:0.2em;cursor:pointer;" onclick="navigate('thermowave')">NEXT · THERMOWAVE ↗</a>
      </div>
    </div>`;

  // ── Assembled page ─────────────────────────────────────────────
  window.ErgoDeckView = function () {
    return `
      ${TopNav()}
      <div class="fg-stage">
        <div class="fg-canvas">
          ${HEADER}
          ${HERO}
          ${S01}
          ${S02}
          ${S03}
          ${S04}
          ${S05}
          ${S06}
          ${S07}
          ${S08}
          ${S09}
        </div>
      </div>
      ${Footer()}
    `;
  };

  // ── Scaling: zoom canvas to fit viewport ───────────────────────
  function fitFigCanvas() {
    const stage = document.querySelector('.fg-stage');
    if (!stage) return;
    const w = stage.clientWidth || document.documentElement.clientWidth || window.innerWidth;
    const scale = Math.min(1, w / 1920);
    stage.style.setProperty('--fg-scale', scale);
  }
  window.fitFigCanvas = fitFigCanvas;
  window.addEventListener('resize', fitFigCanvas);
  window.addEventListener('load', fitFigCanvas);
})();
