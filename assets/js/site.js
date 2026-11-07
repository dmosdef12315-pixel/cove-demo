/* Progressive enhancement: all content and links work without JavaScript. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-navigation');
  const closeNav = (restoreFocus = false) => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    if (restoreFocus) toggle.focus();
  };
  if (toggle && nav) {
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) closeNav(true);
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeNav();
    });
    const desktop = window.matchMedia('(min-width: 801px)');
    desktop.addEventListener('change', () => closeNav());
  }
  const search = document.querySelector('#menu-search');
  if (search) {
    const panel = document.querySelector('#menu-search-panel');
    const clear = document.querySelector('#clear-search');
    const items = [...document.querySelectorAll('.menu-item')];
    const sections = [...document.querySelectorAll('.menu-category')];
    const status = document.querySelector('#search-status');
    const empty = document.querySelector('#no-results');
    panel.hidden = false;
    const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const filter = () => {
      const query = normalize(search.value.trim());
      let shown = 0;
      items.forEach(item => {
        const match = !query || normalize(item.closest('.menu-category').querySelector('h2').textContent + ' ' + item.textContent).includes(query);
        item.hidden = !match;
        if (match) shown++;
      });
      sections.forEach(section => { section.hidden = ![...section.querySelectorAll('.menu-item')].some(item => !item.hidden); });
      status.textContent = query ? `${shown} ${shown === 1 ? 'item' : 'items'} found for “${search.value.trim()}”.` : `${items.length} menu items. Browse by category or search by name or ingredient.`;
      empty.hidden = shown !== 0;
      clear.disabled = query.length === 0;
    };
    let timer;
    search.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(filter, 180); });
    clear.addEventListener('click', () => { clearTimeout(timer); search.value = ''; filter(); search.focus(); });
    document.querySelectorAll('.category-links a').forEach(link => {
      link.addEventListener('click', () => { clearTimeout(timer); search.value = ''; filter(); });
    });
    filter();
  }
  document.querySelectorAll('[data-print]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => window.print());
  });
})();
