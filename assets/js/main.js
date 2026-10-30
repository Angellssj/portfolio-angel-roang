/* ==========================================================================
   main.js · Ángel González Portfolio
   Sin dependencias. Cambia los datos de contacto SOLO en CONFIG.
   ========================================================================== */
(() => {
  'use strict';

  const CONFIG = {
    whatsapp: '56920019066',          // formato internacional, sin + ni espacios
    greeting: 'Hola Ángel',
    reels: [
      { src: 'assets/video/reel-01.mp4', title: 'Reel 01 · Clínica · Gancho y subtítulos desde el primer segundo' },
      { src: 'assets/video/reel-02.mp4', title: 'Reel 02 · Clínica · Explicar un tema a cámara sin perder atención' },
      { src: 'assets/video/reel-03.mp4', title: 'Reel 03 · Clínica · Recorrido por el espacio con subtítulos' },
      { src: 'assets/video/reel-04.mp4', title: 'Reel 04 · Clínica · Contenido educativo con ritmo' },
      { src: 'assets/video/reel-05.mp4', title: 'Reel 05 · Clínica · Subtítulos que destacan lo importante' },
      { src: 'assets/video/reel-06.mp4', title: 'Reel 06 · Automotriz · Video para redes con cortes dinámicos' }
    ]
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const waUrl = text => 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(text);

  /* Medición: envía eventos a Google Analytics (gtag) si lo agregas al <head>. Sin él no hace nada. */
  const track = (name, params) => {
    try { if (typeof window.gtag === 'function') window.gtag('event', name, params || {}); } catch (e) { /* sin analítica */ }
  };
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-track]');
    if (el) track(el.dataset.track);
  });

  /* Año del pie */
  $$('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });

  /* Enlaces de WhatsApp: cada uno puede traer su propio mensaje en data-wa; si va vacío usa el general */
  $$('a[data-wa]').forEach(a => {
    a.href = waUrl(a.dataset.wa || CONFIG.greeting + ', vi tu portfolio y me gustaría conversar sobre un proyecto.');
  });

  /* "¿Eres reclutador?": abre el bloque de CV antes de llegar a él */
  const recruiter = $('#reclutadores');
  if (recruiter) {
    $$('a[href="#reclutadores"]').forEach(a => a.addEventListener('click', () => { recruiter.open = true; }));
    if (location.hash === '#reclutadores') recruiter.open = true;
  }

  /* Tema claro / oscuro */
  const root = document.documentElement;
  const themeBtn = $('#themeToggle');
  const syncThemeBtn = () => {
    const light = root.getAttribute('data-theme') === 'light';
    themeBtn.setAttribute('aria-pressed', String(light));
    themeBtn.setAttribute('aria-label', light ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
  };
  syncThemeBtn();
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('ag-theme', next); } catch (e) { /* almacenamiento no disponible */ }
    syncThemeBtn();
  });

  /* Menú móvil */
  const nav = $('#siteNav');
  const menuBtn = $('#menuToggle');
  const closeMenu = () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Abrir menú'); };
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* Enlace activo según la sección visible */
  const spyLinks = $$('[data-spy]');
  const sections = spyLinks.map(a => document.getElementById(a.dataset.spy)).filter(Boolean);
  const spy = () => {
    const y = window.scrollY + window.innerHeight * 0.3;
    let current = sections[0];
    sections.forEach(s => { if (s.offsetTop <= y) current = s; });
    spyLinks.forEach(a => a.classList.toggle('on', current && a.dataset.spy === current.id));
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  /* Reels: vista previa al pasar el cursor y visor al hacer clic */
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reelBtns = $$('.reel');

  if (canHover) {
    reelBtns.forEach(btn => {
      const v = $('video', btn);
      const start = () => {
        if (!v.src) v.src = v.dataset.src;
        v.play().then(() => btn.classList.add('is-previewing')).catch(() => {});
      };
      const stop = () => { v.pause(); btn.classList.remove('is-previewing'); try { v.currentTime = 0; } catch (e) {} };
      btn.addEventListener('pointerenter', start);
      btn.addEventListener('pointerleave', stop);
      btn.addEventListener('focus', start);
      btn.addEventListener('blur', stop);
    });
  }

  const dlg = $('#reelDialog');
  const dv = $('#rdVideo');
  const cap = $('#rdCap');
  let idx = 0;
  const load = i => {
    idx = (i + CONFIG.reels.length) % CONFIG.reels.length;
    const r = CONFIG.reels[idx];
    dv.src = r.src;
    cap.textContent = r.title + ' (' + (idx + 1) + ' de ' + CONFIG.reels.length + ')';
    dv.play().catch(() => {});
  };
  const openAt = i => {
    if (typeof dlg.showModal !== 'function') { window.open(CONFIG.reels[i].src, '_blank', 'noopener'); return; }
    dlg.showModal();
    load(i);
    track('reel_play', { reel: i + 1 });
  };
  reelBtns.forEach((btn, i) => btn.addEventListener('click', () => {
    reelBtns.forEach(b => { $('video', b).pause(); b.classList.remove('is-previewing'); });
    openAt(i);
  }));
  $('#rdPrev').addEventListener('click', () => load(idx - 1));
  $('#rdNext').addEventListener('click', () => load(idx + 1));
  $('#rdClose').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => { dv.pause(); dv.removeAttribute('src'); dv.load(); });
  dlg.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') load(idx - 1);
    if (e.key === 'ArrowRight') load(idx + 1);
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { dv.pause(); } });

  /* Formulario: arma el mensaje y abre WhatsApp. No guarda ni envía datos a ningún servidor. */
  const form = $('#quoteForm');
  const msg = $('#formMsg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(form);
    const required = ['nombre', 'contacto'];
    let ok = true;
    required.forEach(name => {
      const el = form.elements[name];
      const bad = !String(f.get(name) || '').trim();
      el.classList.toggle('invalid', bad);
      el.setAttribute('aria-invalid', String(bad));
      if (bad) ok = false;
    });
    msg.classList.toggle('err', !ok);
    if (!ok) { msg.textContent = 'Completa tu nombre y un medio de contacto para continuar.'; return; }
    const instagram = String(f.get('instagram') || '').trim();
    const idea = String(f.get('idea') || '').trim();
    const text = [
      CONFIG.greeting + ', quiero pedir mi reel de prueba.',
      'Nombre: ' + String(f.get('nombre')).trim(),
      'Contacto: ' + String(f.get('contacto')).trim(),
      'Necesito: ' + f.get('servicio'),
      instagram && 'Instagram: ' + instagram,
      idea && 'Detalle: ' + idea
    ].filter(Boolean).join('\n');
    track('form_submit', { servicio: f.get('servicio') });
    window.open(waUrl(text), '_blank', 'noopener');
    msg.textContent = 'Se abrió WhatsApp con tu mensaje. Revísalo y presiona enviar.';
  });
  form.addEventListener('input', e => { if (e.target.classList) e.target.classList.remove('invalid'); });
})();
