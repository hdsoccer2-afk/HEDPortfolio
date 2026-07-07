/* ============================================================
   PAGES — ABOUT · RESUME · NDA STUBS · CAD & RENDERS
   All content per Master Prompt V3 · Figma is canon
   ============================================================ */

/* ---------- ABOUT ---------- */
VIEWS.about = function () {
  const stackPanel = (num, cat, items) => `
    <div class="panel reveal" style="padding:28px;">
      <div style="display:flex; justify-content:space-between; align-items:baseline;">
        <span class="f-serif" style="font-size:32px; color:var(--t1);">${num}</span>
        <span class="mono-tag">${cat}</span>
      </div>
      <ul class="f-sans" style="font-size:15px; color:var(--t1); list-style:none; line-height:2.1; margin-top:18px;">
        ${items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>`;

  return `
  ${TopNav('about')}
  <main class="page">

    <section class="section-block" style="border-top:none;">
      ${secLabel('02', 'ABOUT')}
      <h1 class="f-serif reveal" style="font-size:clamp(48px,6vw,72px); color:var(--t1); margin-top:16px;">Designer, maker, fabricator.</h1>
    </section>

    <!-- BIO + PORTRAIT -->
    <section class="section-block" style="border-top:none; padding-top:0;">
      <div class="grid-collapse" style="display:grid; grid-template-columns:535px 1fr; gap:56px; align-items:start;">
        <div class="reveal">
          ${figCard({ src: 'about-portrait.jpg', fig: 'FIG.00', desc: 'PORTRAIT', ctx: 'SAVANNAH, GA', aspect: '535/669' })}
        </div>
        <div>
          <div class="f-mono reveal" style="font-size:11px; color:var(--accent); letter-spacing:2px;">BIO / 01</div>
          <p class="f-serif reveal" style="font-size:clamp(22px,2.6vw,30px); line-height:1.5; color:var(--t1); margin-top:20px;">
            Industrial designer graduating from SCAD in 2026. I come to design
            from a fabrication background: mechatronics, MIG welding, coral
            aquaculture tanks. I trust the shop floor more than the render.
            My work sits where ergonomics, material behavior, and manufacturing
            reality meet.
          </p>
          <div class="grid-collapse reveal" style="display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:40px; border-top:1px solid var(--border); padding-top:24px;">
            <div>
              <div class="mono-tag">EDU</div>
              <div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:8px; letter-spacing:1px;">SCAD / BFA '26</div>
            </div>
            <div>
              <div class="mono-tag">FOCUS</div>
              <div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:8px; letter-spacing:1px;">ERG · CMF · DFM</div>
            </div>
            <div>
              <div class="mono-tag">STATUS</div>
              <div class="f-mono" style="font-size:12px; color:var(--accent); margin-top:8px; letter-spacing:1px;">SEEKING FT 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- §03 · STACK -->
    <section class="section-block">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:12px;">
        <div>
          ${secLabel('03', 'STACK')}
          <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Tools & disciplines</h2>
        </div>
        <div class="f-mono" style="font-size:11px; color:var(--t2); letter-spacing:2px;">03 CATEGORIES</div>
      </div>
      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:36px;">
        ${stackPanel('01', 'FABRICATION', [
          'Rapid prototyping',
          '3D printing (FDM / SLA)',
          'Foam modeling',
          'Wood shop, all equipment',
          'Metal shop: MIG, mill, plasma',
        ])}
        ${stackPanel('02', 'CAD / RENDER', [
          'Rhino 3D',
          'SolidWorks',
          'KeyShot',
          'Engineering drawings',
          'Surface + solid modeling',
        ])}
        ${stackPanel('03', 'DESIGN SOFTWARE', [
          'Adobe Creative Suite <span class="f-mono" style="font-size:9px; color:var(--accent); letter-spacing:1.5px;">CERT.</span>',
          'Figma',
          'Midjourney',
          'Claude AI',
          'VisCom · Office',
        ])}
      </div>
    </section>

    <!-- CERTS + AWARDS + INVOLVEMENT -->
    <section class="section-block">
      <div class="grid-collapse" data-stagger style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px;">
        <div class="reveal">
          <div class="mono-tag" style="margin-bottom:16px;">CERTIFICATIONS</div>
          <ul class="f-sans" style="font-size:15px; color:var(--t1); list-style:none; line-height:2.1;">
            <li>FAA Part 107 Commercial Drone License</li>
            <li>SCAD Wood & Metal Shop</li>
            <li>Adobe Photoshop / Lightroom</li>
          </ul>
        </div>
        <div class="reveal">
          <div class="mono-tag" style="margin-bottom:16px;">AWARDS</div>
          <ul class="f-sans" style="font-size:15px; color:var(--t1); list-style:none; line-height:2.1;">
            <li>Finalist, 2024 SCAD Cotton Inc.</li>
            <li>SCAD Achievement Honors Scholarship</li>
          </ul>
        </div>
        <div class="reveal">
          <div class="mono-tag" style="margin-bottom:16px;">INVOLVEMENT</div>
          <ul class="f-sans" style="font-size:15px; color:var(--t1); list-style:none; line-height:2.1;">
            <li>Sec., SCAD Production Design Club</li>
            <li>IDSA Member</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- §04 · SIDE -->
    <section class="section-block">
      ${secLabel('04', 'SIDE')}
      <h2 class="f-serif reveal" style="font-size:48px; color:var(--t1); margin-top:14px;">Also running</h2>
      <a href="https://www.annapolisascent.com" target="_blank" rel="noopener" class="panel reveal" style="display:flex; justify-content:space-between; align-items:center; gap:20px; padding:28px 32px; margin-top:32px; flex-wrap:wrap;">
        <div>
          <div class="mono-tag">CO FOUNDER · SIDE BUSINESS</div>
          <div class="f-serif" style="font-size:32px; color:var(--t1); margin-top:8px;">Annapolis Ascent</div>
          <div class="mono-tag" style="margin-top:6px;">FIELD OPERATIONS</div>
        </div>
        <span class="f-mono" style="font-size:12px; color:var(--accent); letter-spacing:2px;">VISIT ↗</span>
      </a>
    </section>

  </main>
  ${Footer()}`;
};

/* ---------- RESUME ---------- */
VIEWS.resume = function () {
  const expEntry = (title, dates, org, bullets) => `
    <div class="reveal" style="padding:28px 0; border-bottom:1px solid var(--border);">
      <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:8px;">
        <span class="f-serif" style="font-size:24px; color:var(--t1);">${title}</span>
        <span class="f-mono" style="font-size:11px; color:var(--t2); letter-spacing:1.5px;">${dates}</span>
      </div>
      <div class="mono-tag" style="margin-top:6px;">${org}</div>
      ${bullets.length ? `<ul class="f-sans" style="font-size:15px; color:var(--t2); list-style:none; line-height:1.9; margin-top:14px;">
        ${bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>` : ''}
    </div>`;

  const sideBlock = (label, lines) => `
    <div style="margin-top:32px;">
      <div class="mono-tag" style="margin-bottom:12px;">${label}</div>
      <div class="f-sans" style="font-size:14px; color:var(--t1); line-height:1.9;">${lines}</div>
    </div>`;

  return `
  ${TopNav('resume')}
  <main class="page">

    <section class="section-block" style="border-top:none;">
      ${secLabel('05', 'RESUME')}
      <h1 class="f-serif reveal" style="font-size:clamp(48px,6vw,72px); color:var(--t1); margin-top:16px;">Curriculum vitae.</h1>
      <div class="grid-collapse reveal" style="display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin-top:36px; border-top:1px solid var(--border); padding-top:24px;">
        <div><div class="mono-tag">NAME</div><div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:6px;">HUNTER DAVIS</div></div>
        <div><div class="mono-tag">EMAIL</div><div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:6px;">hunterdavis.uas@gmail.com</div></div>
        <div><div class="mono-tag">PHONE</div><div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:6px;">301.852.3843</div></div>
        <div><div class="mono-tag">FILE</div><div class="f-mono" style="font-size:12px; color:var(--t1); margin-top:6px;">V7 · 2026</div></div>
      </div>
    </section>

    <section class="section-block" style="border-top:none; padding-top:0;">
      <div class="grid-collapse" style="display:grid; grid-template-columns:424px 1fr; gap:56px; align-items:start;">

        <!-- SIDEBAR -->
        <aside>
          <div class="reveal" style="max-width:374px;">
            ${figCard({ src: 'resume-portrait.jpg', desc: 'PORTRAIT', aspect: '1/1' })}
          </div>
          ${sideBlock('CONTACT', `301.852.3843<br>hunterdavis.uas@gmail.com<br><a href="https://linkedin.com/in/hunter-davis-30b15793" target="_blank" rel="noopener" style="color:var(--accent);">linkedin.com/in/hunter-davis-30b15793</a>`)}
          ${sideBlock('ACADEMIC', `BFA, Industrial Design<br>Savannah College of Art and Design<br><span class="f-mono" style="font-size:11px; color:var(--t3);">2022 to 2026</span><br><br>AAS, Mechatronics Eng. Tech.<br>Anne Arundel Community College<br><span class="f-mono" style="font-size:11px; color:var(--t3);">2017 to 2020</span>`)}
          ${sideBlock('SKILLS', `
            <span class="mono-tag">FABRICATION</span><br>
            Rapid prototyping, 3D printing, foam modeling, wood shop (all equipment), metal shop (MIG, mill, plasma cutting).<br><br>
            <span class="mono-tag">3D / RENDER</span><br>
            Rhino 3D, SolidWorks, KeyShot.<br><br>
            <span class="mono-tag">DESIGN SOFTWARE</span><br>
            Adobe Creative Suite (Certified Professional: Photoshop, Lightroom), Figma, Office Suite, VisCom.<br><br>
            <span class="mono-tag">AI SYSTEMS & TOOLS</span><br>
            Claude Projects architecture, multi agent workflow governance, prompt & instruction design, model routing, document taxonomy & file governance, Midjourney, Claude.`)}
          ${sideBlock('RECOGNITION', `FAA Part 107 Commercial Drone License<br>SCAD Wood & Metal Shop Cert.<br>Finalist, 2024 SCAD Cotton Inc.<br>SCAD Achievement Honors Scholarship`)}
        </aside>

        <!-- MAIN -->
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:12px;">
            <div>
              <div class="mono-tag">SUMMARY</div>
              <h2 class="f-serif reveal" style="font-size:36px; color:var(--t1); margin-top:8px;">Work history</h2>
            </div>
            <div class="mono-tag">05 ROLES</div>
          </div>
          <div class="mono-tag reveal" style="margin-top:28px;">PROFESSIONAL EXPERIENCE</div>
          ${expEntry('Project Manager', 'MAR 2025 — JUN 2025', 'KOHLER SCADPRO · SAVANNAH, GA', [
            'Led cross functional team through 10 week sprint.',
            'Co managed design strategy & stakeholder presentations.',
            'Oversaw prototype fabrication.',
          ])}
          ${expEntry('Industrial Designer', 'JAN 2025 — MAR 2025', 'SKULLCANDY SCADPRO · SAVANNAH, GA', [
            'Industrial design contributor on a sponsored consumer electronics studio under NDA.',
          ])}
          ${expEntry('Project Associate / AI Strategist', '2024 — PRESENT', 'HD SQUARED ARCHITECTS', [
            'AI systems strategy and workflow design supporting a small architecture practice.',
          ])}
          ${expEntry('Aquarium Designer & Installer', 'JUN 2019 — JUL 2022', 'FANTASEA AQUARIUMS · LOTHIAN, MD', [
            'Multi component structural assembly, lighting integration, wiring, aquascaping, and site installation.',
          ])}
          ${expEntry('Lab Technician', '2018 — 2021', 'LAND AIR SEA ROBOTICS LAB · AACC', [
            'Supported robotics lab operations and fabrication.',
          ])}
        </div>

      </div>
    </section>

  </main>
  ${Footer()}`;
};

/* ---------- NDA STUB FACTORY ---------- */
function ndaStub({ view, category, name, role, roleLine, client, roleDesc }) {
  VIEWS[view] = function () {
    return `
    ${TopNav('home')}
    ${CaseStudyBack()}
    <main class="page">
      <section class="section-block" style="border-top:none;">
        <div class="grid-collapse" style="display:grid; grid-template-columns:1fr 536px; gap:48px; align-items:start;">
          <div>
            ${secLabel('00', category)}
            <h1 class="f-serif reveal" style="font-size:clamp(56px,7vw,96px); color:var(--t1); line-height:1; margin-top:16px;">${name}.</h1>
            <p class="f-serif reveal" style="font-style:italic; font-size:28px; color:var(--t2); margin-top:20px;">${roleLine}. SCADpro sponsored studio.</p>
          </div>
          <div class="reveal">
            ${metaTable([
              ['ROLE', role],
              ['DURATION', '10 WEEKS'],
              ['CLIENT', `${client} / SCADpro`],
              ['CONTEXT', 'SCADpro Sponsored Studio'],
              ['STATUS', '● UNDER NDA / BRIEF AVAILABLE'],
            ])}
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="panel-deep reveal" style="padding:40px; text-align:center;">
          <div class="f-mono" style="font-size:14px; color:var(--accent); letter-spacing:2.5px; text-transform:uppercase;">THIS PROJECT IS UNDER NDA.</div>
          <p class="f-sans" style="color:var(--t2); margin-top:14px;">Brief and process overview available on request.</p>
          <p class="f-sans" style="color:var(--t2); margin-top:4px;">Role and contributions documented below.</p>
        </div>
        <div class="reveal" style="margin-top:36px; max-width:760px;">
          <div class="mono-tag">ROLE</div>
          <p class="f-serif" style="font-size:clamp(20px,2.4vw,26px); line-height:1.55; color:var(--t1); margin-top:14px;">${roleDesc}</p>
        </div>
      </section>
    </main>
    ${Footer()}`;
  };
}

ndaStub({
  view: 'kohler',
  category: 'SCADPRO · KITCHEN & BATH',
  name: 'Kohler',
  role: 'Project Manager',
  roleLine: 'Project Manager',
  client: 'Kohler',
  roleDesc: 'Led a cross functional student team through a 10 week sponsored sprint. Co managed design strategy, stakeholder presentations, and prototype fabrication oversight.',
});

ndaStub({
  view: 'skullcandy',
  category: 'SCADPRO · CONSUMER ELEC.',
  name: 'Skullcandy',
  role: 'Industrial Designer',
  roleLine: 'Industrial Designer',
  client: 'Skullcandy',
  roleDesc: 'Industrial design contributor on a sponsored consumer electronics studio. Concept development and design execution under NDA.',
});

/* ---------- CAD & RENDERS STUB ---------- */
VIEWS.cadrenders = function () {
  return `
  ${TopNav('home')}
  ${CaseStudyBack()}
  <main class="page">
    <section class="section-block" style="border-top:none;">
      ${secLabel('00', 'GALLERY · VISUALIZATION')}
      <h1 class="f-serif reveal" style="font-size:clamp(56px,7vw,96px); color:var(--t1); line-height:1; margin-top:16px;">CAD & Renders.</h1>
      <p class="f-serif reveal" style="font-style:italic; font-size:28px; color:var(--t2); margin-top:20px;">SolidWorks / Rhino / KeyShot.</p>
    </section>
    <section class="section-block">
      <div class="panel-deep reveal" style="padding:40px; text-align:center;">
        <div class="f-mono" style="font-size:14px; color:var(--accent); letter-spacing:2.5px; text-transform:uppercase;">UNder Constructions</div>
        <p class="f-sans" style="color:var(--t2); margin-top:14px;">Gallery in progress. Check back soon.</p>
      </div>
    </section>
  </main>
  ${Footer()}`;
};
