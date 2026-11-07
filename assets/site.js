(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.hidden = false;
    const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); }
    });
    const media = window.matchMedia('(min-width: 851px)');
    media.addEventListener('change', () => close());
  }
  const search = document.querySelector('#menu-search');
  if (search) {
    document.querySelector('#search-tools').hidden = false;
    const clear = document.querySelector('#clear-search');
    const dishes = [...document.querySelectorAll('.dish')];
    const sections = [...document.querySelectorAll('.menu-section')];
    const status = document.querySelector('#menu-status');
    const noResults = document.querySelector('#no-results');
    const normalize = value => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
    function filter() {
      const term = normalize(search.value.trim());
      let count = 0;
      dishes.forEach(dish => {
        const section = dish.closest('.menu-section');
        const context = section.querySelector('h2').textContent + ' ' + (section.querySelector('.category-note')?.textContent || '');
        const match = normalize(dish.textContent + ' ' + context).includes(term);
        dish.hidden = !match;
        if (match) count++;
      });
      sections.forEach(section => { section.hidden = ![...section.querySelectorAll('.dish')].some(dish => !dish.hidden); });
      status.textContent = term ? `${count} menu ${count === 1 ? 'item' : 'items'} found.` : `Showing all ${dishes.length} menu items.`;
      noResults.hidden = count > 0;
      clear.disabled = !term;
    }
    let timer;
    search.addEventListener('input', () => { window.clearTimeout(timer); timer = window.setTimeout(filter, 150); });
    clear.addEventListener('click', () => { search.value = ''; filter(); search.focus(); });
    document.querySelectorAll('.category-nav a').forEach(link => link.addEventListener('click', () => {
      if (search.value) { search.value = ''; filter(); }
    }));
    filter();
  }
  const printButton = document.querySelector('#print-menu');
  if (printButton) { printButton.hidden = false; printButton.addEventListener('click', () => window.print()); }
})();
