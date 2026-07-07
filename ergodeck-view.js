/* ============================================================
   ERGODECK CASE STUDY — §00 through §09
   All content per Master Prompt V3 · Figma is canon
   ============================================================ */

VIEWS.ergodeck = function () {

  const statCallout = (num, unit, label, prov) => `
    <div style="padding:24px 0; border-bottom:1px solid var(--border);">
      <div class="stat-num">${num}${unit ? `<span class="unit">${unit}</span>` : ''}</div>
      <div class="stat-label">${label}</div>
      <div class="provenance">${prov}</div>
    </div>`;

  const mfgStep = (n, title, desc, last) => `
    <div class="panel reveal" style="padding:20px; position:relative;">
      <div class="f-mono" style="font-size:10px; color:var(--accent); letter-spacing:2px;">STEP ${n}${last ? '' : ' →'}</div>
      <div class="f-serif" style="font-size:20px; color:var(--t1); margin-top:10px;">${title}</div>
      <div class="f-sans" style="font-size:13px; color:var(--t2); margin-top:8px; line-height:1.5;">${desc}</div>
    </div>`;

  const keySpec = (val, label, prov) => `
    <div class="reveal" style="padding:28px 24px; border-right:1px solid var(--border);">
      <div class="f-serif" style="font-size:40px; color:var(--t1);">${val}</div>
      <div class="mono-tag" style="margin-top:8px;">${label}</div>
      <div class="provenance">${prov}</div>
    </div>`;

  const swatch = (bg, tier, name, hex, mat) => `
    <div style="display:flex; gap:16px; align-items:flex-start;">
      <div style="width:100px; height:100px; flex-shrink:0; background:${bg}; border:1px solid var(--border);"></div>
      <div>
        <div class="mono-tag">${tier} · ${name}</div>
        <div class="f-mono" style="font-size:11px; color:var(--t2); margin-top:6px; letter-spacing:1px;">${hex} · ${mat}</div>
      </div>
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
          ${secLabel('00', 'CAPSTONE')}
          <h1 class="f-serif reveal" style="font-size:clamp(56px,7vw,96px); color:var(--t1); line-height:1; margin-top:16px;">ErgoDeck.</h1>
          <p class="f-serif reveal" style="font-style:italic; font-size:28px; color:var(--t2); margin-top:20px;">Ergonomic creeper. Built for home garage reality.</p>
        </div>
        <div class="reveal">
          ${metaTable([
            ['ROLE', 'Industrial Designer · Sole'],
            ['DURATION', '20 WEEKS · SENIOR CAPSTONE'],
            ['TOOLS', 'SOLIDWORKS · RHINO 8 · KEYSHOT · CNC'],
            ['CONTEXT', "SCAD / IND. DESIGN / '26"],
            ['STATUS', 'COMPLETED — PROTOTYPE VALIDATED'],
          ])}
        </div>
      </div>
    </section>

    <!-- HERO IMAGE -->
    <section class="reveal" style="margin:0 -40px;">
      ${figCard({ src: 'fig-ergodeck-hero.jpg', fig: 'FIG.00', desc: 'HERO ELEVATION', ctx: 'IN-CONTEXT RENDER', aspect: '1920/720', overlayCaption: true })}
    </section>

    <!-- §01 · PROBLEM / SOLUTION -->
    <section class="section-block">
      ${secLabel('01', 'PROBLEM / SOLUTION')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px; max-width:900px;">Chronic Musculoskeletal Strain and Lost Time.</h2>
      <p class="f-sans reveal" style="color:var(--t2); margin-top:12px;">The hidden cost of working under cars.</p>
      <div class="mono-tag reveal" style="margin-top:10px;">AUTOMOTIVE ERGONOMICS · UNMET MIDDLE TIER</div>

      <div class="panel grid-collapse reveal" style="display:grid; grid-template-columns:1fr 1fr; margin-top:40px;">
        <div style="padding:32px; border-right:1px solid var(--border);">
          <div class="f-serif" style="font-size:24px; color:var(--t1); margin-bottom:18px;">Current state</div>
          <ul class="f-sans" style="font-size:16px; color:var(--t1); list-style:none; line-height:2.1;">
            <li>Little ergonomic support.</li>
            <li>Severe lower back pain.</li>
            <li>Time lost retrieving tools.</li>
            <li>Only cheap creepers or high cost shop lifts.</li>
          </ul>
        </div>
        <div style="padding:32px;">
          <div class="f-serif" style="font-size:24px; color:var(--t1); margin-bottom:18px;">What's needed</div>
          <ul class="f-sans" style="font-size:16px; color:var(--t1); list-style:none; line-height:2.1;">
            <li>Body mapped ergonomic contours.</li>
            <li>Integrated tool storage.</li>
            <li>Versatile positioning support.</li>
            <li>Adjustability.</li>
          </ul>
        </div>
      </div>

      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:24px;">
        <div class="reveal">${figCard({ src: 'fig-image82.png', desc: 'MECHANIC POSITION', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-image92.png', desc: 'COMPETITIVE STUDY', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-image247.png', desc: 'CONTEXT REFERENCE', aspect: '3/4' })}</div>
        <div class="reveal">${figCard({ src: 'fig-image240.png', desc: 'FIELD REFERENCE', aspect: '4/3' })}</div>
      </div>
    </section>

    <!-- §02 · THE INSIGHT -->
    <section class="section-block">
      ${secLabel('02', 'THE INSIGHT')}
      <div class="grid-collapse" style="display:grid; grid-template-columns:1.4fr 1fr; gap:56px; margin-top:24px; align-items:start;">
        <div>
          <h2 class="f-serif reveal" style="font-size:clamp(44px,5vw,72px); line-height:1.05; color:var(--t1);">Designed for minutes. Used for hours.</h2>
          <p class="f-sans reveal" style="color:var(--t2); margin-top:20px;">The creeper was never built for the home mechanic's reality.</p>
          <p class="f-sans reveal" style="color:var(--t2); font-size:16px; line-height:1.75; margin-top:20px; max-width:560px;">
            The Mechanics creeper was originally only designed for short use.
            Mechanics were leaving constantly to retrieve and look for tools,
            losing at least 45 minutes a day, standing up and crouching back
            down for things that should have been within arm's reach.
          </p>
          <div class="reveal" style="margin-top:32px; max-width:368px;">
            ${figCard({ src: 'fig-insight-image.png', desc: 'CONTEXT', aspect: '1/1' })}
          </div>
        </div>
        <div class="reveal">
          ${statCallout('86.6%', '', 'CURRENTLY EXPERIENCE DISCOMFORT / PAIN', '[N=SURVEY · HOME MECHANICS]')}
          ${statCallout('45', 'MIN/DAY', 'LOST TO TOOL RETRIEVAL', '[N=FIELD OBSERVATION]')}
        </div>
      </div>
    </section>

    <!-- §03 · RESEARCH -->
    <section class="section-block">
      ${secLabel('03', 'RESEARCH')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Consistent testing across the boards</h2>

      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:36px;">
        <div class="reveal">${figCard({ src: 'fig-research-01.png', fig: 'FIG.01', desc: 'USABILITY TESTING', ctx: 'EVALUATING THE EXISTING MARKET', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-research-02.png', fig: 'FIG.02', desc: 'OBSERVATION', ctx: 'SEEING HOW THE INDUSTRY USES IT', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-research-03.jpg', fig: 'FIG.03', desc: 'FEASIBILITY STUDY', ctx: 'V1 ERGONOMIC PROTOTYPE TESTING', aspect: '4/3' })}</div>
      </div>

      <!-- PRICE LADDER -->
      <div class="panel reveal" style="margin-top:40px; padding:32px;">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
          <div class="mono-tag">COMPETITIVE PRICE LADDER · 73% PURCHASE INTENT</div>
          <div class="provenance" style="margin-top:0;">[N=15 / USER INTERVIEWS]</div>
        </div>
        <div class="grid-collapse" style="display:grid; grid-template-columns:repeat(3,1fr); gap:32px; margin-top:28px;">
          <div>
            <div class="ladder-bar" style="width:35%;"></div>
            <div class="f-mono" style="font-size:11px; color:var(--t3); letter-spacing:1.5px;">LOW</div>
            <div class="f-mono" style="font-size:13px; color:var(--t1); margin-top:6px;">$50–200 · Commodity creepers</div>
          </div>
          <div>
            <div class="ladder-bar" style="width:70%;"></div>
            <div class="f-mono" style="font-size:11px; color:var(--accent); letter-spacing:1.5px;">MID · ERGODECK</div>
            <div class="f-mono" style="font-size:13px; color:var(--t1); margin-top:6px;">$500–700 · Premium position</div>
          </div>
          <div>
            <div class="ladder-bar" style="width:100%;"></div>
            <div class="f-mono" style="font-size:11px; color:var(--t3); letter-spacing:1.5px;">HIGH</div>
            <div class="f-mono" style="font-size:13px; color:var(--t1); margin-top:6px;">$2000+ · Professional lifts</div>
          </div>
        </div>
      </div>
    </section>

    <!-- §04 · IDEATION -->
    <section class="section-block">
      ${secLabel('04', 'IDEATION')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Expanding the sketch phase</h2>
      <p class="f-sans reveal" style="color:var(--t2); margin-top:12px;">Hand and machine. Two modes of divergence.</p>

      <div class="reveal" style="margin-top:36px;">
        ${figCard({ src: 'fig-sketches.jpg', desc: 'SKETCH PROCESS SPREAD', aspect: '1400/822' })}
      </div>

      <!-- AI EXPLORATION INSET PANEL -->
      <div class="panel-deep reveal" style="margin-top:40px;">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; padding:14px 24px; border-bottom:1px solid var(--border);">
          <span class="f-mono" style="font-size:10px; color:var(--accent); letter-spacing:2px; text-transform:uppercase;">AI · SKETCH PHASE ONLY</span>
          <span class="mono-tag">NOT USED FOR: ERGONOMICS · CMF · MECHANISM</span>
        </div>
        <div style="padding:32px 24px;">
          <h3 class="f-serif" style="font-size:32px; color:var(--t1);">AI MidJourney Exploration</h3>
          <div style="max-width:800px; margin:28px auto 0;">
            ${figCard({ src: 'fig-ai-ideation.jpg', fig: 'FIG.08B', desc: 'AI IDEATION MATRIX', ctx: 'N=90 · MIDJOURNEY + CLAUDE', aspect: '800/720' })}
          </div>
          <div class="grid-collapse" style="display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:28px; border-top:1px solid var(--border); padding-top:24px;">
            <div>
              <div class="mono-tag">USED WHERE</div>
              <div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:8px; letter-spacing:1px;">FORM EXPLORATION</div>
            </div>
            <div>
              <div class="mono-tag">NOT USED FOR</div>
              <div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:8px; letter-spacing:1px;">Ergonomics. CMF. Mechanism.</div>
            </div>
            <div>
              <div class="mono-tag">RESULT</div>
              <div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:8px; letter-spacing:1px;">Continued with the ergonomic sports car seat form</div>
            </div>
          </div>
          <div style="margin-top:32px;">
            <p class="f-serif" style="font-style:italic; font-size:24px; color:var(--t1);">"AI extended my sketch phase, not my decision making."</p>
            <div class="provenance">[N=90 GENERATED · N=90 REJECTED · N=0 SHIPPED]</div>
          </div>
        </div>
      </div>
    </section>

    <!-- §05 · ITERATION -->
    <section class="section-block">
      ${secLabel('05', 'ITERATION')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Three prototypes</h2>
      <p class="f-sans reveal" style="color:var(--t2); margin-top:12px;">Each build answered what the last one couldn't.</p>
      <p class="f-sans reveal" style="color:var(--t2); margin-top:8px; max-width:640px;">CNC foam. Hand carved foam. CNC MDF. The making method changed with the question being asked.</p>

      <!-- ITERATION LOG TABLE -->
      <div class="panel reveal" style="margin-top:36px; overflow-x:auto;">
        <table class="data-table">
          <thead><tr>
            <th>ITERATION LOG</th><th>MAKING METHOD</th><th>WHAT IT ANSWERED</th><th>WHAT CHANGED</th>
          </tr></thead>
          <tbody>
            <tr>
              <td class="f-serif" style="font-size:28px; color:var(--accent);">V1</td>
              <td>CNC Pink Foam</td>
              <td>Overall dimensions. Ergonomic contours confirmed.</td>
              <td>Fluid form aesthetic rejected. Too soft, consumer wellness.</td>
            </tr>
            <tr>
              <td class="f-serif" style="font-size:28px; color:var(--accent);">V2</td>
              <td>Hand Carved Foam</td>
              <td>Form language locked. Tool storage placement visualized.</td>
              <td>Faceted edges added. Material contrast introduced.</td>
            </tr>
            <tr>
              <td class="f-serif" style="font-size:28px; color:var(--accent);">V3</td>
              <td>CNC MDF</td>
              <td>Final visual and ergonomic validation.</td>
              <td>Manufacturing refinement. CNC paths optimized. Foam contouring adjusted.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- THE BUILDS -->
      <div style="margin-top:56px;">
        <div class="mono-tag reveal">THE BUILDS</div>
        <h3 class="f-serif reveal" style="font-size:32px; color:var(--t1); margin-top:10px;">What each version looked like.</h3>
      </div>

      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:32px;">
        <div class="reveal">
          ${figCard({ src: 'fig-v1-foam.jpg', desc: 'V1 CNC PINK FOAM', aspect: '4/3' })}
          <div class="f-mono" style="font-size:12px; color:var(--t1); letter-spacing:1.5px; margin-top:14px;">V1 · CNC PINK FOAM</div>
          <div class="mono-tag" style="margin-top:6px;">PROPORTION + ERGONOMIC CONTOUR VALIDATION</div>
          <div class="mono-tag" style="margin-top:10px;">[WEEK 03 · SENIOR STUDIO I]</div>
        </div>
        <div class="reveal">
          ${figCard({ src: 'fig-v2-carved.jpg', desc: 'V2 HAND CARVED FOAM', aspect: '4/3' })}
          <div class="f-mono" style="font-size:12px; color:var(--t1); letter-spacing:1.5px; margin-top:14px;">V2 · HAND CARVED FOAM</div>
          <div class="mono-tag" style="margin-top:6px;">FORM LOCK · TOOL STORAGE VISUALIZATION</div>
          <p class="f-sans" style="font-size:14px; color:var(--t2); margin-top:10px;">CAD printout used to map tool placement before committing to form.</p>
          <div class="mono-tag" style="margin-top:10px;">[WEEK 06 · SENIOR STUDIO I]</div>
        </div>
        <div class="reveal">
          ${figCard({ src: 'fig-v3-mdf.jpg', desc: 'V3 CNC MDF', aspect: '4/3' })}
          <div class="f-mono" style="font-size:12px; color:var(--t1); letter-spacing:1.5px; margin-top:14px;">V3 · CNC MDF</div>
          <div class="mono-tag" style="margin-top:6px;">FINAL VISUAL + ERGONOMIC PROTOTYPE</div>
          <p class="f-sans" style="font-size:14px; color:var(--t2); margin-top:10px;">Production intent: ABS blow mold shell + TIG welded aluminum frame.</p>
          <div class="mono-tag" style="margin-top:10px; color:var(--t3);">VISUAL PROTOTYPE ONLY · PRODUCTION MATERIALS DIFFER</div>
          <div class="mono-tag" style="margin-top:10px;">[WEEK 09 · SENIOR STUDIO II]</div>
        </div>
      </div>

      <!-- DETAIL GRID PART B -->
      <div class="grid-collapse" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:48px;">
        <div class="reveal">
          ${figCard({ src: 'fig-cnc-process.jpg', fig: 'FIG.13', desc: 'PROCESS · CNC IN PROGRESS', ctx: 'MDF SHELL', aspect: '3/4' })}
        </div>
        <div style="display:flex; flex-direction:column; gap:20px;">
          <div class="reveal">${figCard({ src: 'fig-detail-top.png', fig: 'FIG.12', desc: 'DETAIL · TOP SURFACE', ctx: 'TOOL STORAGE ZONE', aspect: '16/10' })}</div>
          <div class="reveal">${figCard({ src: 'fig-tool-storage.jpg', fig: 'FIG.14', desc: 'TOOL STORAGE TEST · V2 PHASE', ctx: 'CAD PRINTOUT ON TABLE', aspect: '16/10' })}</div>
        </div>
      </div>

      <div class="reveal" style="border-top:1px solid var(--border); margin-top:40px; padding-top:16px;">
        <div class="mono-tag">VISUAL PROTOTYPE · CNC MDF · FORM AND ERGONOMIC VALIDATION ONLY · PRODUCTION MATERIALS DIFFER</div>
      </div>
    </section>

    <!-- §06 · ENGINEERING -->
    <section class="section-block">
      ${secLabel('06', 'ENGINEERING')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Designed to be made.</h2>
      <p class="f-sans reveal" style="color:var(--t2); margin-top:12px;">Production spec. Blow mold primary process.</p>

      <div class="grid-collapse" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:36px; align-items:start;">
        <div class="reveal">
          ${figCard({ src: 'fig-dimensions.png', fig: 'FIG.10', desc: 'DIMENSIONED DRAWING', ctx: 'SOLIDWORKS', aspect: '4/3' })}
        </div>
        <div style="display:flex; flex-direction:column; gap:20px;">
          <div class="panel-deep reveal">
            <div class="mono-tag" style="padding:14px 16px; border-bottom:1px solid var(--border);">TECH SPEC — V3</div>
            <div class="spec-row"><span class="k">MATERIAL</span><span class="v">ABS Shell</span></div>
            <div class="spec-row"><span class="k">PROCESS</span><span class="v">Blow Molded</span></div>
            <div class="spec-row"><span class="k">DRAFT ANGLE</span><span class="v">1.5° Minimum</span></div>
            <div class="spec-row"><span class="k">WALL THK</span><span class="v">2.5 – 3 mm</span></div>
            <div class="spec-row"><span class="k">TOLERANCE</span><span class="v">±0.3 mm</span></div>
          </div>
          <div class="reveal" style="border-left:2px solid var(--accent); padding:16px 20px;">
            <div class="mono-tag">DESIGN INTENT</div>
            <p class="f-sans" style="color:var(--t1); margin-top:8px;">Integral structural support without excess weight.</p>
            <div class="mono-tag" style="margin-top:8px;">VALIDATED VIA MECHANICAL FASTENER ATTACHMENT</div>
          </div>
        </div>
      </div>

      <!-- KEY SPECS STRIP -->
      <div class="panel grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(4,1fr); margin-top:36px;">
        ${keySpec('07', 'MAIN ASSEMBLIES', '[BOM / V3]')}
        ${keySpec('8–10 WK', 'TOOLING LEAD', '[BLOW MOLD / EST.]')}
        ${keySpec('Modular', 'ASSEMBLY TYPE', 'NO PERMANENT BONDS')}
        ${keySpec('$180–250', 'EST. MFG COST', '[AT SCALE]')}
      </div>

      <!-- 6-STEP MANUFACTURING SEQUENCE -->
      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(6,1fr); gap:12px; margin-top:36px;">
        ${mfgStep('01', 'Frame Fabrication', '6061-T6 aluminum tube cutting & CNC bending')}
        ${mfgStep('02', 'Frame Welding', 'TIG weld joints · deburr all seams')}
        ${mfgStep('03', 'Frame Finishing', 'Type II anodize per MIL-A-8625 · matte clear')}
        ${mfgStep('04', 'Shell Molding', 'ABS blow mold · TPE bumper overmold. Wall: 2.5–3mm · Draft: 1.5° min')}
        ${mfgStep('05', 'Foam Contouring', 'CNC mill HD polyurethane · body mapped profile')}
        ${mfgStep('06', 'Padding Assembly', 'Neoprene laminate · magnet press fit', true)}
      </div>
      <div class="mono-tag reveal" style="margin-top:14px;">PRODUCTION DESIGN INTENT · NOT DESIGNER FABRICATION PROCESS</div>

      <!-- CAD COMPARISON -->
      <div class="grid-collapse" style="display:grid; grid-template-columns:1fr auto 1fr; gap:24px; align-items:center; margin-top:48px;">
        <div class="reveal">
          ${figCard({ src: 'fig-cad-v1.png', desc: 'V1 CAD', aspect: '4/3' })}
          <div class="mono-tag" style="margin-top:10px; text-align:center;">V1 CAD</div>
        </div>
        <div class="f-serif" style="font-size:40px; color:var(--accent);">→</div>
        <div class="reveal">
          ${figCard({ src: 'fig-cad-v3.png', desc: 'V3 CAD', aspect: '4/3' })}
          <div class="mono-tag" style="margin-top:10px; text-align:center;">V3 CAD</div>
        </div>
      </div>
    </section>

    <!-- §08 · CMF -->
    <section class="section-block">
      ${secLabel('08', 'CMF')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Color, material, finish.</h2>

      <div class="grid-collapse" style="display:grid; grid-template-columns:2.5fr 1fr; gap:40px; margin-top:36px; align-items:start;">
        <div class="reveal">
          ${figCard({ src: 'fig-cmf-exploded.jpg', fig: 'FIG.20', desc: 'ANNOTATED EXPLODED', ctx: 'CAD LAYER BREAKDOWN', aspect: '4/3' })}
        </div>
        <div class="reveal" style="display:flex; flex-direction:column; gap:28px;">
          ${swatch('linear-gradient(135deg,#B9BAB7,#7F807D)', 'PRIMARY', 'NEUTRAL GRAY', '#7F807D', 'ABS STRUCTURAL SHELL')}
          ${swatch('#24050B', 'SECONDARY', 'DARK MAROON', '#24050B', 'NEOPRENE PADDING')}
          ${swatch('#2E3532', 'TERTIARY', 'DARK TEAL', '#2E3532', 'TPE BUMPER · HARDWARE')}
        </div>
      </div>

      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:40px;">
        <div class="reveal">${figCard({ src: 'fig-cmf-detail-v1.png', fig: 'FIG.21', desc: 'RENDER', ctx: 'KEYSHOT', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-cmf-detail-v2.png', fig: 'FIG.22', desc: 'RENDER', ctx: 'KEYSHOT', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-cmf-detail-v3.png', fig: 'FIG.23', desc: 'RENDER', ctx: 'KEYSHOT', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-cmf-detail-v4.png', fig: 'FIG.24', desc: 'RENDER', ctx: 'KEYSHOT', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-cmf-detail-v5.png', fig: 'FIG.25', desc: 'RENDER', ctx: 'KEYSHOT', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'fig-cmf-detail-v6.png', fig: 'FIG.26', desc: 'RENDER', ctx: 'KEYSHOT', aspect: '4/3' })}</div>
      </div>
    </section>

    <!-- §09 · OUTCOME -->
    <section class="section-block">
      ${secLabel('09', 'OUTCOME')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px; max-width:1000px;">Prototype validated. Partners wanted to explore commercial fabrication</h2>

      <div class="reveal" style="margin-top:36px;">
        ${figCard({ src: 'fig-final-incontext.png', fig: 'FIG.27', desc: 'FINAL IN-CONTEXT RENDER', ctx: 'GARAGE / USER SCALE', aspect: '1400/730' })}
      </div>

      <div class="panel reveal" style="margin-top:40px; padding:32px;">
        <div class="mono-tag">STATUS</div>
        <div class="f-serif" style="font-size:36px; color:var(--t1); margin-top:10px;">Validated. Seeking partner.</div>
        <div class="grid-collapse" style="display:grid; grid-template-columns:repeat(3,1fr); gap:28px; margin-top:28px;">
          <div>
            <div class="mono-tag">VALIDATION</div>
            <p class="f-sans" style="font-size:14px; color:var(--t2); margin-top:8px;">Visual Model completed. Engineers desired for manufacturing mechanics</p>
          </div>
          <div>
            <div class="mono-tag">MANUFACTURING</div>
            <p class="f-mono" style="font-size:12px; color:var(--t2); margin-top:8px; letter-spacing:1px;">ABS BLOW MOLD · DFM REVIEWED · 8–10 WK TOOLING</p>
          </div>
          <div>
            <div class="mono-tag">STATUS</div>
            <p class="f-mono" style="font-size:12px; color:var(--t2); margin-top:8px; letter-spacing:1px;">CAPSTONE COMPLETE</p>
          </div>
        </div>
      </div>

      <div class="panel reveal" style="margin-top:24px; padding:32px;">
        <div class="mono-tag">NEXT STEPS</div>
        <p class="f-sans" style="color:var(--t1); font-size:18px; margin-top:10px;">Patent filing in progress. Seeking manufacturing partner.</p>
        <div class="grid-collapse" style="display:grid; grid-template-columns:1fr 1fr; gap:28px; margin-top:28px;">
          <div>
            <div class="mono-tag">PATENT</div>
            <p class="f-sans" style="font-size:14px; color:var(--t2); margin-top:8px;">Professor recommended filing. Unique mechanism and integrated storage system.</p>
            <div class="f-mono" style="font-size:11px; color:var(--accent); letter-spacing:1.5px; margin-top:12px;">● IN PROGRESS</div>
          </div>
          <div>
            <div class="mono-tag">MANUFACTURING PARTNER</div>
            <p class="f-sans" style="font-size:14px; color:var(--t2); margin-top:8px;">Open to licensing or co development. DFM documentation available.</p>
            <div class="f-mono" style="font-size:11px; color:var(--accent); letter-spacing:1.5px; margin-top:12px;">● SEEKING</div>
          </div>
        </div>
      </div>
    </section>

  </main>
  ${PageNav('THERMOWAVE', '/thermowave')}
  ${Footer()}`;
};
