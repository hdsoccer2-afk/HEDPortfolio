/* ============================================================
   WELDED STOOL CASE STUDY
   All content per Master Prompt V3 · Figma is canon
   Role framing: co-DESIGned · individual fabrication
   (capitalization verbatim from Figma, intentional)
   ============================================================ */

VIEWS.weldedstool = function () {

  const geoCallout = (label, val, prov) => `
    <div class="reveal" style="padding:24px; border-right:1px solid var(--border);">
      <div class="mono-tag">${label}</div>
      <div class="f-serif" style="font-size:28px; color:var(--t1); margin-top:10px;">${val}</div>
      <div class="provenance">${prov}</div>
    </div>`;

  const bomMetric = (label, val, prov) => `
    <div class="reveal" style="padding:24px; border-right:1px solid var(--border);">
      <div class="mono-tag">${label}</div>
      <div class="f-serif" style="font-size:36px; color:var(--t1); margin-top:8px;">${val}</div>
      <div class="provenance">${prov}</div>
    </div>`;

  const specPanel = (label, val, sub) => `
    <div class="panel reveal" style="padding:20px 24px;">
      <div class="mono-tag">${label}</div>
      <div class="f-serif" style="font-size:28px; color:var(--t1); margin-top:8px;">${val}</div>
      <div class="mono-tag" style="margin-top:8px;">${sub}</div>
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
          ${secLabel('00', 'FABRICATION · FURNITURE')}
          <h1 class="f-serif reveal" style="font-size:clamp(56px,7vw,96px); color:var(--t1); line-height:1; margin-top:16px;">Welded Stool.</h1>
          <p class="f-serif reveal" style="font-style:italic; font-size:28px; color:var(--t2); margin-top:20px;">Organic form. Bent tube. Shop craft.</p>
        </div>
        <div class="reveal">
          ${metaTable([
            ['ROLE', 'co-DESIGned · individual fabrication'],
            ['DURATION', '3 WEEKS · METAL SHOP'],
            ['PROCESS', 'MIG · TUBE BENDING · GRINDING'],
            ['CONTEXT', "SCAD / FABRICATION / '24"],
            ['STATUS', 'COMPLETED — SHOP-FINISHED'],
          ])}
        </div>
      </div>
    </section>

    <!-- HERO -->
    <section class="reveal" style="margin:0 -40px;">
      ${figCard({ src: 'welded-stool-cover.jpg', desc: 'WELDED STOOL HERO', aspect: '1920/867' })}
    </section>

    <!-- §01 · BRIEF -->
    <section class="section-block">
      ${secLabel('01', 'BRIEF')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px; max-width:840px;">Expressing the material properties of steel</h2>
      <p class="f-sans reveal" style="color:var(--t2); font-size:16px; line-height:1.75; margin-top:20px; max-width:640px;">
        A three week sprint to design and fabricate two identical steel stools
        using MIG welding with a partner, focused on expressing the raw
        material properties of steel through structural form.
      </p>
      <div class="mono-tag reveal" style="margin-top:14px;">METAL SHOP · MIG + TUBE BEND · SINGLE USER SEATING</div>

      <div class="panel grid-collapse reveal" style="display:grid; grid-template-columns:1fr 1fr; margin-top:36px;">
        <div style="padding:32px; border-right:1px solid var(--border);">
          <div class="f-serif" style="font-size:24px; color:var(--t1); margin-bottom:18px;">Constraints</div>
          <ul class="f-sans" style="font-size:16px; color:var(--t1); list-style:none; line-height:2.1;">
            <li>MIG welded joinery.</li>
            <li>Bench grade tooling access.</li>
            <li>Budget under $150.</li>
          </ul>
        </div>
        <div style="padding:32px;">
          <div class="f-serif" style="font-size:24px; color:var(--t1); margin-bottom:18px;">Intent</div>
          <ul class="f-sans" style="font-size:16px; color:var(--t1); list-style:none; line-height:2.1;">
            <li>Anatomical, organic silhouette.</li>
            <li>Triangulated load path.</li>
            <li>Heavy, grounded stance.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- §03 · GEOMETRY -->
    <section class="section-block">
      ${secLabel('03', 'GEOMETRY')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">CAD intent.</h2>
      <p class="f-sans reveal" style="color:var(--t2); margin-top:12px;">Form before fabrication. Lines before beads.</p>
      <div class="mono-tag reveal" style="margin-top:10px;">SOLIDWORKS · KEYSHOT · TRANSPARENT PLATE</div>

      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:36px;">
        <div class="reveal">${figCard({ src: 'welded-stool-side.png', desc: 'TRANSPARENT SIDE PROFILE', aspect: '4/3' })}</div>
        <div class="reveal">${figCard({ src: 'welded-stool-angle.png', desc: 'TRANSPARENT ANGLED VIEW', aspect: '4/3' })}</div>
      </div>

      <div class="panel grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(4,1fr); margin-top:32px;">
        ${geoCallout('SEAT Ø', '403.3 mm', '[15.9″ / HR PLATE]')}
        ${geoCallout('STANCE', 'Tripod', '[3-LEG TRIANGULATED]')}
        ${geoCallout('TUBE Ø', '1″ OD', '[14 + 12 BWG WALL]')}
        ${geoCallout('BEND COUNT', '11 bends', '[CL METHOD / BOM]')}
      </div>
    </section>

    <!-- REFERENCE IMAGE -->
    <section class="reveal" style="margin-top:24px;">
      ${figCard({ src: 'stool-assembly.png', desc: 'SOLIDWORKS ASSEMBLY SCREENSHOT', aspect: '1261/744' })}
    </section>

    <!-- §04 · BILL OF MATERIALS -->
    <section class="section-block">
      ${secLabel('04', 'BILL OF MATERIALS')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">17 parts. 20 feet. 29 pounds.</h2>
      <div class="mono-tag reveal" style="margin-top:10px;">MANUFACTURING BOM · REV 01 · A513 MILD STEEL</div>

      <div class="panel grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(4,1fr); margin-top:36px;">
        ${bomMetric('TOTAL PARTS', '17', '[N=17 / BOM REV 01]')}
        ${bomMetric('TUBE STOCK', '20 FT', '[22 FT ORDER / 10% OVER]')}
        ${bomMetric('TOTAL WEIGHT', '~29 LB', '[CALC / BOM LINE TOTALS]')}
        ${bomMetric('EST. COST', '~$120', '[2025–26 A513 RETAIL]')}
      </div>

      <!-- STOCK A -->
      <div class="panel reveal" style="margin-top:32px; overflow-x:auto;">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; padding:14px 16px; border-bottom:1px solid var(--border);">
          <span class="f-mono" style="font-size:11px; color:var(--accent); letter-spacing:1.5px;">STOCK A — 1″ OD × 14 BWG STEEL TUBE</span>
          <span class="mono-tag">WALL 1.98 MM · 0.67 LB/FT · STOCK 2715.5 MM</span>
        </div>
        <table class="data-table">
          <thead><tr><th>PART</th><th>STRAIGHT</th><th>QTY</th><th>BEND R INNER</th><th>BEND ANGLE</th></tr></thead>
          <tbody>
            <tr><td>Seat ring segment</td><td>275.6 mm</td><td>×6</td><td>R430.4</td><td>~35.7°</td></tr>
            <tr><td>Frame bend</td><td>243.2 mm</td><td>×3</td><td>R233.5</td><td>~56.6°</td></tr>
            <tr><td>Straight</td><td>332.5 mm</td><td>×1</td><td>—</td><td>—</td></tr>
          </tbody>
        </table>
        <div class="mono-tag" style="padding:12px 16px; border-top:1px solid var(--border);">SUBTOTAL · 10 PIECES · 6.0 LB · ~$18</div>
      </div>

      <!-- STOCK B -->
      <div class="panel reveal" style="margin-top:20px; overflow-x:auto;">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; padding:14px 16px; border-bottom:1px solid var(--border);">
          <span class="f-mono" style="font-size:11px; color:var(--accent); letter-spacing:1.5px;">STOCK B — 1″ OD × 12 BWG STEEL TUBE</span>
          <span class="mono-tag">WALL 2.77 MM · 0.87 LB/FT · STOCK 3303.8 MM</span>
        </div>
        <table class="data-table">
          <thead><tr><th>PART</th><th>STRAIGHT</th><th>QTY</th><th>BEND R INNER</th><th>BEND ANGLE</th></tr></thead>
          <tbody>
            <tr><td>Leg bend (large)</td><td>595.1 mm</td><td>×2</td><td>R186.1</td><td>~171.5°</td></tr>
            <tr><td>Leg bend (mid)</td><td>498.1 mm</td><td>×1</td><td>R185.8</td><td>~143.7°</td></tr>
            <tr><td>Frame bend</td><td>287.8 mm</td><td>×3</td><td>R233.5</td><td>~67.0°</td></tr>
            <tr><td>Support bend</td><td>266.3 mm</td><td>×1</td><td>R177.7</td><td>~80.1°</td></tr>
            <tr><td>Straight</td><td>196.3 mm</td><td>×1</td><td>—</td><td>—</td></tr>
          </tbody>
        </table>
        <div class="mono-tag" style="padding:12px 16px; border-top:1px solid var(--border);">SUBTOTAL · 8 PIECES · 9.4 LB · ~$30</div>
      </div>

      <!-- STOCK C -->
      <div class="panel reveal" style="margin-top:20px; overflow-x:auto;">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; padding:14px 16px; border-bottom:1px solid var(--border);">
          <span class="f-mono" style="font-size:11px; color:var(--accent); letter-spacing:1.5px;">STOCK C — 1/4″ HR STEEL PLATE</span>
          <span class="mono-tag">6.35 MM · CUT FROM 16″ × 16″ BLANK</span>
        </div>
        <table class="data-table">
          <thead><tr><th>PART</th><th>DIMENSION</th><th>QTY</th><th>WEIGHT</th><th>EST. COST</th></tr></thead>
          <tbody>
            <tr><td>Seat disc</td><td>Ø403.3 mm · 15.9″</td><td>×1</td><td>14.0 lb</td><td>~$22</td></tr>
          </tbody>
        </table>
      </div>

      <!-- STOCK D -->
      <div class="panel reveal" style="margin-top:20px; overflow-x:auto;">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; padding:14px 16px; border-bottom:1px solid var(--border);">
          <span class="f-mono" style="font-size:11px; color:var(--accent); letter-spacing:1.5px;">STOCK D — CONSUMABLES + FINISHING</span>
          <span class="mono-tag">LINE SUBTOTAL ~$47</span>
        </div>
        <table class="data-table">
          <thead><tr><th>ITEM</th><th>ORDER QTY</th><th>EST. UNIT</th><th>EST. LINE</th></tr></thead>
          <tbody>
            <tr><td>MIG wire · ER70S-6 · .030/.035</td><td>2 lb spool</td><td>—</td><td>~$12</td></tr>
            <tr><td>Shielding gas · 75/25 Ar/CO₂</td><td>shop supply</td><td>—</td><td>~$8</td></tr>
            <tr><td>Cut off + flap discs</td><td>3–4 discs</td><td>—</td><td>~$12</td></tr>
            <tr><td>Primer + topcoat spray cans</td><td>—</td><td>—</td><td>~$15</td></tr>
          </tbody>
        </table>
      </div>

      <div class="provenance reveal" style="margin-top:20px;">[SOURCE / WELDED STOOL BOM · FIG.29 · SECTION 08 · REV 01 · CENTERLINE BEND METHOD]</div>
    </section>

    <!-- PROCESS PHOTOS -->
    <section class="section-block">
      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px;">
        <div class="reveal">${figCard({ src: 'welded-stool-bend.png', desc: 'PROCESS', aspect: '4/5' })}</div>
        <div class="reveal">${figCard({ src: 'welded-stool-finished-2.jpg', desc: 'PROCESS', aspect: '4/5' })}</div>
        <div class="reveal">${figCard({ src: 'welded-stool-finished-3.jpg', desc: 'PROCESS', aspect: '4/5' })}</div>
        <div class="reveal">${figCard({ src: 'welded-stool-finished-4.jpg', desc: 'PROCESS', aspect: '4/5' })}</div>
      </div>
    </section>

    <!-- §06 · WELD DETAIL -->
    <section class="section-block">
      ${secLabel('06', 'WELD DETAIL')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Bead as ornament.</h2>

      <div class="grid-collapse" style="display:grid; grid-template-columns:1.8fr 1fr; gap:20px; margin-top:36px; align-items:start;">
        <div class="reveal">
          ${figCard({ src: 'welded-stool-weld-detail.png', fig: 'FIG.11', desc: 'BASE CONVERGENCE', ctx: 'SIX-WAY WELD CLUSTER', aspect: '3/4' })}
        </div>
        <div style="display:flex; flex-direction:column; gap:16px;">
          ${specPanel('WIRE', 'ER70S-6', '.030/.035 · 2 LB SPOOL')}
          ${specPanel('GAS', '75/25 Ar/CO₂', 'SHORT CIRCUIT TRANSFER')}
          ${specPanel('JOINT TYPES', 'Fillet · Butt · T', 'SIX WAY CONVERGENCE NODE')}
        </div>
      </div>
    </section>

    <!-- §08 · CLOSER -->
    <section class="section-block">
      ${secLabel('08', 'CLOSER')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Heavy. Grounded. Sat on.</h2>

      <div class="panel reveal" style="margin-top:36px; padding:32px;">
        <div class="mono-tag">§ · OUTCOME</div>
        <p class="f-sans" style="color:var(--t1); font-size:18px; margin-top:10px;">Shop finished. Structurally sound. Still in use.</p>
        <div class="grid-collapse" style="display:grid; grid-template-columns:repeat(3,1fr); gap:28px; margin-top:28px;">
          <div>
            <div class="mono-tag">LOAD TESTED</div>
            <div class="f-mono" style="font-size:13px; color:var(--t1); margin-top:8px; letter-spacing:1px;">300 LB · FLUID</div>
          </div>
          <div>
            <div class="mono-tag">FINISH</div>
            <div class="f-mono" style="font-size:13px; color:var(--t1); margin-top:8px; letter-spacing:1px;">BRUSHED · SEALED</div>
          </div>
          <div>
            <div class="mono-tag">STATUS</div>
            <div class="f-mono" style="font-size:13px; color:var(--t1); margin-top:8px; letter-spacing:1px;">IN DAILY USE</div>
          </div>
        </div>
      </div>
    </section>

  </main>
  ${PageNav('ERGODECK', '/ergodeck')}
  ${Footer()}`;
};
