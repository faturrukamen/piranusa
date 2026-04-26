(function () {
  // ── Data ──────────────────────────────────────────────────────────────
  const SOLID_THEMES = [
    { name: '🟠 Piranusa Orange', hex: '#f7941d', dark: '#df8115', desc: 'Original Brand' },
    { name: '🔵 Tech Blue',        hex: '#2563eb', dark: '#1d4ed8', desc: 'Profesional & Stabil' },
    { name: '🟢 Modern Teal',      hex: '#14b8a6', dark: '#0d9488', desc: 'Inovasi & Segar' },
    { name: '🟣 Creative Violet',  hex: '#8b5cf6', dark: '#7c3aed', desc: 'Premium & Kreatif' },
    { name: '🔴 Ruby Red',         hex: '#e11d48', dark: '#be123c', desc: 'Energi & Tegas' },
    { name: '🩵 Cyber Cyan',       hex: '#06b6d4', dark: '#0891b2', desc: 'Futuristik' },
    { name: '🟡 Electric Lime',    hex: '#84cc16', dark: '#65a30d', desc: 'Modern & Cerah' },
  ];

  const GRADIENT_THEMES = [
    { name: '🔥 Sunset Fire',    from: '#f7941d', to: '#e11d48', desc: 'Energi & Passion' },
    { name: '🌊 Ocean Depth',    from: '#2563eb', to: '#14b8a6', desc: 'Tenang & Profesional' },
    { name: '🌌 Galaxy Purple',  from: '#8b5cf6', to: '#2563eb', desc: 'Premium & Futuristik' },
    { name: '🌿 Aurora Green',   from: '#10b981', to: '#06b6d4', desc: 'Segar & Modern' },
    { name: '💎 Rose Gold',      from: '#f7941d', to: '#8b5cf6', desc: 'Mewah & Unik' },
    { name: '⚡ Electric Storm', from: '#06b6d4', to: '#8b5cf6', desc: 'Teknologi Terkini' },
    { name: '🌹 Cherry Blossom', from: '#e11d48', to: '#8b5cf6', desc: 'Elegan & Bold' },
  ];

  // ── Helpers ────────────────────────────────────────────────────────────
  function hexToRgb(hex) {
    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
    };
  }
  function lighten(hex, a) {
    const { r, g, b } = hexToRgb(hex);
    return '#' + [Math.min(255, r + a), Math.min(255, g + a), Math.min(255, b + a)].map(v => v.toString(16).padStart(2, '0')).join('');
  }
  function darken(hex, a) {
    const { r, g, b } = hexToRgb(hex);
    return '#' + [Math.max(0, r - a), Math.max(0, g - a), Math.max(0, b - a)].map(v => v.toString(16).padStart(2, '0')).join('');
  }
  function injectStyle(id, css) {
    let el = document.getElementById(id);
    if (!el) { el = document.createElement('style'); el.id = id; document.head.appendChild(el); }
    el.textContent = css;
  }

  // ── Core Apply Functions ───────────────────────────────────────────────
  let activePrimary = '#f7941d';
  let activeMode = 'solid'; // 'solid' | 'gradient'
  let activeGradient = { from: '#f7941d', to: '#e11d48' };

  function applySolid(hex, darkHex, label) {
    activePrimary = hex;
    activeMode = 'solid';
    const { r, g, b } = hexToRgb(hex);
    const root = document.documentElement;
    root.style.setProperty('--color-primary', hex);
    root.style.setProperty('--color-primary-dark', darkHex || darken(hex, 30));
    root.style.setProperty('--color-primary-glow', `rgba(${r},${g},${b},0.25)`);

    injectStyle('tp-dyn', buildDynCSS(hex, r, g, b,
      `linear-gradient(135deg, ${hex} 0%, ${lighten(hex, 40)} 100%)`
    ));
    updatePanelUI(hex, null, label || hex);
    highlightSolidBtns(hex);
  }

  function applyGradient(from, to, label) {
    activeMode = 'gradient';
    activeGradient = { from, to };
    const { r, g, b } = hexToRgb(from);
    const grad = `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', from);
    root.style.setProperty('--color-primary-dark', darken(from, 30));
    root.style.setProperty('--color-primary-glow', `rgba(${r},${g},${b},0.25)`);

    injectStyle('tp-dyn', buildDynCSS(from, r, g, b, grad));
    updatePanelUI(null, grad, label || `${from} → ${to}`);
    highlightGradBtns(from, to);
  }

  function buildDynCSS(primary, r, g, b, grad) {
    return `
      .hero-bg { background-image: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(${r},${g},${b},0.12) 0%, transparent 65%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0L0 0 0 60' fill='none' stroke='rgba(51,65,85,0.35)' stroke-width='0.5'/%3E%3C/svg%3E"); }
      .hero-glow-orb { background: radial-gradient(circle, rgba(${r},${g},${b},0.07) 0%, transparent 70%); }
      .text-gradient { background: ${grad}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
      .stat-number   { background: ${grad}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
      @keyframes pulse-glow { 0%,100%{box-shadow:0 0 0 0 rgba(${r},${g},${b},.35)} 50%{box-shadow:0 0 0 14px rgba(${r},${g},${b},0)} }
      .btn-primary:hover { box-shadow: 0 8px 25px -5px rgba(${r},${g},${b},.5) !important; }
      .industry-card:hover { box-shadow: 0 28px 60px -12px rgba(0,0,0,.6), 0 0 0 1px rgba(${r},${g},${b},.18); }
      .industry-card::before { background: linear-gradient(135deg, rgba(${r},${g},${b},0) 0%, rgba(${r},${g},${b},.28) 50%, rgba(${r},${g},${b},0) 100%); }
      .product-logo-pill:hover { background:rgba(${r},${g},${b},.1); border-color:rgba(${r},${g},${b},.3); color:${primary}; }
      .principal-logo-card:hover { background:rgba(${r},${g},${b},.07); border-color:rgba(${r},${g},${b},.2); }
      .service-card:hover { border-color:rgba(${r},${g},${b},.28); }
      .service-icon-wrap { background:rgba(${r},${g},${b},.1); }
      .service-card:hover .service-icon-wrap { background:rgba(${r},${g},${b},.18); }
      .event-card:hover { border-color:rgba(${r},${g},${b},.22); }
      .video-card:hover .video-play-btn { background:rgba(${r},${g},${b},.45); border-color:${primary}; }
      .social-link:hover { background:rgba(${r},${g},${b},.15); border-color:rgba(${r},${g},${b},.4); }
      .certificate-card { border-color:rgba(${r},${g},${b},.2); }
      .certificate-card:hover { border-color:rgba(${r},${g},${b},.5); }
      .input:focus,.select:focus,.textarea:focus { border-color:${primary}!important; box-shadow:0 0 0 3px rgba(${r},${g},${b},.15)!important; }
      ::-webkit-scrollbar-thumb:hover { background:${primary}; }
      .bg-light-section .service-icon-wrap { background:rgba(${r},${g},${b},.1); color:${primary}; }
    `;
  }

  // ── Panel UI Updater ───────────────────────────────────────────────────
  function updatePanelUI(hex, grad, label) {
    const swatch = document.getElementById('tp-swatch');
    const lbl    = document.getElementById('tp-label');
    const toggle = document.getElementById('tp-toggle');
    const hexEl  = document.getElementById('tp-hex-val');
    if (swatch) swatch.style.background = grad || hex;
    if (lbl)    lbl.textContent = label;
    if (toggle) toggle.style.background = grad || hex;
    if (hexEl)  { hexEl.textContent = grad ? `${activeGradient.from} → ${activeGradient.to}` : hex; hexEl.style.color = hex || '#f7941d'; }
    const copyBtn = document.getElementById('tp-copy');
    if (copyBtn) copyBtn.dataset.val = grad ? `${activeGradient.from} → ${activeGradient.to}` : hex;
  }

  function highlightSolidBtns(hex) {
    document.querySelectorAll('.tp-solid-btn').forEach(b => {
      const active = b.dataset.hex === hex;
      b.style.borderColor = active ? hex : 'rgba(255,255,255,0.08)';
      b.style.background  = active ? `rgba(${Object.values(hexToRgb(hex)).join(',')},0.15)` : 'rgba(255,255,255,0.04)';
    });
    document.querySelectorAll('.tp-grad-btn').forEach(b => { b.style.borderColor = 'rgba(255,255,255,0.08)'; b.style.background = 'rgba(255,255,255,0.04)'; });
  }

  function highlightGradBtns(from, to) {
    document.querySelectorAll('.tp-grad-btn').forEach(b => {
      const active = b.dataset.from === from && b.dataset.to === to;
      b.style.borderColor = active ? from : 'rgba(255,255,255,0.08)';
      b.style.background  = active ? `rgba(${Object.values(hexToRgb(from)).join(',')},0.15)` : 'rgba(255,255,255,0.04)';
    });
    document.querySelectorAll('.tp-solid-btn').forEach(b => { b.style.borderColor = 'rgba(255,255,255,0.08)'; b.style.background = 'rgba(255,255,255,0.04)'; });
  }

  // ── Build HTML ─────────────────────────────────────────────────────────
  function buildPanel() {
    const S = (styles) => styles;
    const wrap = document.createElement('div');
    wrap.id = 'tp-wrapper';
    wrap.innerHTML = `
<style>
#tp-wrapper { position:fixed; bottom:24px; right:24px; z-index:9999; font-family:'Plus Jakarta Sans',system-ui,sans-serif; }
#tp-toggle { width:52px; height:52px; border-radius:50%; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; margin-left:auto; background:var(--color-primary); box-shadow:0 8px 32px -4px rgba(0,0,0,.5),0 0 0 3px rgba(255,255,255,.1); transition:transform .3s cubic-bezier(.34,1.56,.64,1); }
#tp-toggle:hover { transform: scale(1.08); }
#tp-box { display:none; position:absolute; bottom:64px; right:0; width:320px; background:#0d1117; border:1px solid rgba(255,255,255,.09); border-radius:18px; box-shadow:0 32px 80px -12px rgba(0,0,0,.9); overflow:hidden; }
.tp-tabs { display:flex; border-bottom:1px solid rgba(255,255,255,.07); }
.tp-tab { flex:1; padding:11px 0; text-align:center; font-size:12px; font-weight:700; color:#475569; cursor:pointer; transition:all .2s; border:none; background:none; letter-spacing:.04em; }
.tp-tab.active { color:#f8fafc; background:rgba(255,255,255,.05); border-bottom:2px solid var(--color-primary); }
.tp-pane { display:none; }
.tp-pane.active { display:block; }
.tp-list { padding:12px 16px; display:flex; flex-direction:column; gap:5px; max-height:280px; overflow-y:auto; }
.tp-list::-webkit-scrollbar { width:4px; } .tp-list::-webkit-scrollbar-thumb { background:#334155; border-radius:2px; }
.tp-solid-btn,.tp-grad-btn { display:flex; align-items:center; gap:10px; width:100%; padding:9px 11px; border-radius:10px; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.04); cursor:pointer; transition:all .2s; text-align:left; }
.tp-solid-btn:hover,.tp-grad-btn:hover { background:rgba(255,255,255,.08); }
.tp-swatch-sm { width:28px; height:28px; border-radius:7px; flex-shrink:0; box-shadow:0 2px 8px rgba(0,0,0,.35); }
.tp-btn-name { display:block; font-size:12.5px; font-weight:700; color:#f1f5f9; }
.tp-btn-desc { display:block; font-size:10px; color:#64748b; margin-top:1px; }
.tp-btn-hex  { font-family:monospace; font-size:10px; color:#475569; }
.tp-custom { padding:12px 16px 14px; border-top:1px solid rgba(255,255,255,.06); }
.tp-custom-label { font-size:10px; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:.1em; margin-bottom:9px; }
.tp-custom-row { display:flex; gap:8px; align-items:center; }
.tp-color-pick { width:42px; height:38px; border:2px solid rgba(255,255,255,.15); border-radius:8px; background:transparent; cursor:pointer; padding:2px; }
.tp-hex-inp { flex:1; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1); border-radius:8px; padding:7px 10px; font-size:12px; font-weight:700; color:#f8fafc; font-family:monospace; outline:none; }
.tp-apply { padding:7px 12px; border-radius:8px; border:none; color:#fff; font-size:11px; font-weight:700; cursor:pointer; white-space:nowrap; background:var(--color-primary); transition:opacity .2s; }
.tp-apply:hover { opacity:.85; }
.tp-footer { padding:9px 16px 12px; background:rgba(0,0,0,.25); display:flex; align-items:center; justify-content:space-between; }
.tp-copy-btn { background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1); border-radius:6px; padding:5px 11px; font-size:11px; font-weight:700; color:#94a3b8; cursor:pointer; transition:all .2s; }
.tp-copy-btn:hover { background:rgba(255,255,255,.1); color:#f1f5f9; }
.tp-header { padding:14px 16px 11px; border-bottom:1px solid rgba(255,255,255,.07); display:flex; align-items:center; justify-content:space-between; }
</style>

<button id="tp-toggle" aria-label="Color Tester" title="Theme Tester">
  <svg id="tp-ico-pal" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><circle cx="13.5" cy="6.5" r=".5" fill="white"/><circle cx="17.5" cy="10.5" r=".5" fill="white"/><circle cx="8.5" cy="7.5" r=".5" fill="white"/><circle cx="6.5" cy="12.5" r=".5" fill="white"/><path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
  <svg id="tp-ico-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" style="display:none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
</button>

<div id="tp-box">
  <div class="tp-header">
    <div>
      <div style="font-size:10px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:.1em;">🎨 Color Theme Tester</div>
      <div id="tp-label" style="font-size:13px;font-weight:800;color:#f8fafc;margin-top:3px;">🟠 Piranusa Orange</div>
    </div>
    <div id="tp-swatch" style="width:38px;height:38px;border-radius:10px;background:var(--color-primary);box-shadow:0 4px 14px rgba(0,0,0,.4);transition:background .35s ease;flex-shrink:0;"></div>
  </div>

  <div class="tp-tabs">
    <button class="tp-tab active" data-tab="solid">🎯 Solid</button>
    <button class="tp-tab" data-tab="gradient">🌈 Gradient</button>
  </div>

  <!-- SOLID PANE -->
  <div class="tp-pane active" id="tp-pane-solid">
    <div class="tp-list" id="tp-solid-list"></div>
    <div class="tp-custom">
      <div class="tp-custom-label">Custom Solid</div>
      <div class="tp-custom-row">
        <input type="color" class="tp-color-pick" id="tp-s-pick" value="#f7941d">
        <input type="text"  class="tp-hex-inp" id="tp-s-hex" value="#f7941d" maxlength="7" placeholder="#f7941d" spellcheck="false">
        <button class="tp-apply" id="tp-s-apply">Terapkan</button>
      </div>
    </div>
  </div>

  <!-- GRADIENT PANE -->
  <div class="tp-pane" id="tp-pane-gradient">
    <div class="tp-list" id="tp-grad-list"></div>
    <div class="tp-custom">
      <div class="tp-custom-label">Custom Gradient</div>
      <div class="tp-custom-row" style="gap:6px;">
        <input type="color" class="tp-color-pick" id="tp-g-from" value="#f7941d" title="Warna Awal">
        <input type="color" class="tp-color-pick" id="tp-g-to"   value="#e11d48" title="Warna Akhir">
        <div style="flex:1;font-size:10px;color:#64748b;font-weight:700;text-align:center;">FROM → TO</div>
        <button class="tp-apply" id="tp-g-apply">Terapkan</button>
      </div>
      <div style="margin-top:8px;height:28px;border-radius:7px;transition:background .3s;" id="tp-grad-preview"></div>
    </div>
  </div>

  <div class="tp-footer">
    <div style="font-size:11px;font-weight:700;color:#475569;font-family:monospace;">HEX: <span id="tp-hex-val" style="color:var(--color-primary);">#f7941d</span></div>
    <button class="tp-copy-btn" id="tp-copy" data-val="#f7941d">Salin</button>
  </div>
</div>
`;
    document.body.appendChild(wrap);

    // ── Build solid buttons ──────────────────────────────────────────────
    const solidList = document.getElementById('tp-solid-list');
    SOLID_THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'tp-solid-btn';
      btn.dataset.hex = t.hex;
      btn.innerHTML = `
        <span class="tp-swatch-sm" style="background:${t.hex};"></span>
        <span><span class="tp-btn-name">${t.name}</span><span class="tp-btn-desc">${t.desc} <span class="tp-btn-hex">${t.hex}</span></span></span>`;
      btn.addEventListener('click', () => applySolid(t.hex, t.dark, t.name));
      solidList.appendChild(btn);
    });

    // ── Build gradient buttons ───────────────────────────────────────────
    const gradList = document.getElementById('tp-grad-list');
    GRADIENT_THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'tp-grad-btn';
      btn.dataset.from = t.from;
      btn.dataset.to   = t.to;
      btn.innerHTML = `
        <span class="tp-swatch-sm" style="background:linear-gradient(135deg,${t.from},${t.to});"></span>
        <span><span class="tp-btn-name">${t.name}</span><span class="tp-btn-desc">${t.desc} <span class="tp-btn-hex">${t.from}→${t.to}</span></span></span>`;
      btn.addEventListener('click', () => applyGradient(t.from, t.to, t.name));
      gradList.appendChild(btn);
    });

    // ── Tab switch ──────────────────────────────────────────────────────
    document.querySelectorAll('.tp-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tp-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tp-pane').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tp-pane-' + tab.dataset.tab).classList.add('active');
      });
    });

    // ── Toggle panel ────────────────────────────────────────────────────
    document.getElementById('tp-toggle').addEventListener('click', () => {
      const box  = document.getElementById('tp-box');
      const ipal = document.getElementById('tp-ico-pal');
      const icls = document.getElementById('tp-ico-close');
      const tog  = document.getElementById('tp-toggle');
      const open = box.style.display !== 'none';
      box.style.display     = open ? 'none' : 'block';
      ipal.style.display    = open ? 'block' : 'none';
      icls.style.display    = open ? 'none'  : 'block';
      tog.style.transform   = open ? 'scale(1)' : 'rotate(10deg) scale(1.05)';
    });

    // ── Solid custom ────────────────────────────────────────────────────
    const sPick = document.getElementById('tp-s-pick');
    const sHex  = document.getElementById('tp-s-hex');
    sPick.addEventListener('input', () => { sHex.value = sPick.value; });
    sHex.addEventListener('input', () => { if (/^#[0-9a-fA-F]{6}$/.test(sHex.value)) sPick.value = sHex.value; });
    document.getElementById('tp-s-apply').addEventListener('click', () => {
      const v = sHex.value;
      if (/^#[0-9a-fA-F]{6}$/.test(v)) applySolid(v, darken(v, 30), '✏️ Custom: ' + v);
      else { sHex.style.borderColor = '#e11d48'; setTimeout(() => { sHex.style.borderColor = 'rgba(255,255,255,.1)'; }, 1200); }
    });

    // ── Gradient custom ─────────────────────────────────────────────────
    const gFrom    = document.getElementById('tp-g-from');
    const gTo      = document.getElementById('tp-g-to');
    const gPreview = document.getElementById('tp-grad-preview');
    function updateGradPreview() {
      gPreview.style.background = `linear-gradient(135deg, ${gFrom.value}, ${gTo.value})`;
    }
    gFrom.addEventListener('input', updateGradPreview);
    gTo.addEventListener('input', updateGradPreview);
    updateGradPreview();
    document.getElementById('tp-g-apply').addEventListener('click', () => {
      applyGradient(gFrom.value, gTo.value, `✏️ Custom Grad`);
    });

    // ── Copy ────────────────────────────────────────────────────────────
    document.getElementById('tp-copy').addEventListener('click', function () {
      navigator.clipboard.writeText(this.dataset.val).then(() => {
        this.textContent = '✓ Tersalin!';
        this.style.color = '#34d399';
        setTimeout(() => { this.textContent = 'Salin'; this.style.color = '#94a3b8'; }, 1800);
      });
    });

    // ── Init ────────────────────────────────────────────────────────────
    applySolid('#f7941d', '#df8115', '🟠 Piranusa Orange');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPanel);
  } else {
    buildPanel();
  }
})();
