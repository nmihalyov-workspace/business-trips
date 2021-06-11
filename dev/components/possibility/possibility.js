Array.from(document.querySelectorAll('.possibility__more')).map(el => {
  el.addEventListener('click', e => {
    const element = e.currentTarget;
    const showText = element.dataset.show;
    const hideText = element.dataset.hide;

    element.parentNode.querySelector('.possibility__highlight').classList.toggle('possibility__highlight--shown');
    element.innerText === showText ? element.innerText = hideText : element.innerText = showText;
  });
});