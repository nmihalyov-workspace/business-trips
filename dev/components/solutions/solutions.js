Array.from(document.querySelectorAll('.solutions__tab')).map(el => {
  el.addEventListener('click', e => {
    const target = e.currentTarget.dataset.tab;

    document.querySelector('.solutions__tab--active').classList.remove('solutions__tab--active');
    e.currentTarget.classList.add('solutions__tab--active');
    
    document.querySelector('.solutions__content--active').classList.remove('solutions__content--active');
    document.querySelector(`.solutions__content[data-tab="${target}"]`).classList.add('solutions__content--active');
  });
});