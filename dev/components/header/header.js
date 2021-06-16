const $burger = document.querySelector('.js-burger');
let offset = 0;
const hideOverflow = () => {
  offset = window.scrollY;
  document.body.style.cssText = `position: fixed; margin-top: ${-offset}px`;
};
const showOverflow = () => {
  document.body.style.cssText = 'position: static; margin-top: 0';
  
  window.scrollTo(0, offset);
};

document.querySelector('.js-burger').addEventListener('click', () => {
  if (document.querySelector('.header__burger--active')) {
    showOverflow();
  } else {
    hideOverflow();
  }
  $burger.classList.toggle('header__burger--active');
  document.querySelector('.header__menu').classList.toggle('header__menu--active');
});