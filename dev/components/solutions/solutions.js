if (document.querySelectorAll('.solutions__tab').length) {
  Array.from(document.querySelectorAll('.solutions__tab')).map(el => {
    el.addEventListener('click', e => {
      const target = e.currentTarget.dataset.tab;

      document.querySelector('.solutions__tab--active').classList.remove('solutions__tab--active');
      e.currentTarget.classList.add('solutions__tab--active');
      
      document.querySelector('.solutions__content-info--active').classList.remove('solutions__content-info--active');
      document.querySelector(`.solutions__content-info[data-tab="${target}"]`).classList.add('solutions__content-info--active');
    });
  });

  Array.from(document.querySelectorAll('.solutions__select-item')).map(el => {
    el.addEventListener('click', e => {
      const element = e.currentTarget;
      const currentSelectItem = element.parentNode.previousElementSibling;
      const target = element.dataset.tab;
      const select = document.querySelector('.solutions__select');

      if (select.classList.contains('solutions__select--active') && currentSelectItem.classList.contains('solutions__select-item')) {
        element.parentNode.prepend(currentSelectItem);
        element.parentNode.parentNode.prepend(element);
      }

      select.classList.toggle('solutions__select--active');
      
      document.querySelector('.solutions__content-info--active').classList.remove('solutions__content-info--active');
      document.querySelector(`.solutions__content-info[data-tab="${target}"]`).classList.add('solutions__content-info--active');
    });
  });
}