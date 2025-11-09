// ---BURGER---

const burgerLinks = [...document.querySelectorAll('.burger__bar-item')];
const menuToggle = document.querySelector('#menu__toggle');
const overlay = document.querySelector('.burger__overlay');

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
    document.body.style.overflow = '';
  })
});

menuToggle.addEventListener('change', () => {
  menuToggle.checked ? 
  document.body.style.overflow = 'hidden':
  document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
  menuToggle.checked = false;
})

// ---RADIO-BTNS---

const categotyEl = [...document.querySelectorAll('.explore__category--btn')];

categotyEl.forEach(el => {
  el.addEventListener('click', ()  => {
    categotyEl.forEach(el => {
      el.classList.remove('btn--active')
      el.classList.add('btn--non-active')
    })
    el.classList.add('btn--active')
    el.classList.remove('btn--non-active')

    })
  })


  // ---FOOTER-ACCORDEON---

document.querySelectorAll('.footer__categories--link a').forEach(link => {
  link.addEventListener('click', () => {
    const wrap = link.closest('.footer__categories--wrap');
      if (!wrap) return;

    const checkbox = wrap.querySelector('input[type="checkbox"]');
    if (checkbox) checkbox.checked = false;
  });
});

