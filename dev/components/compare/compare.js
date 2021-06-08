window.onscroll = () => {
  const y = window.scrollY;
  if (y + window.innerHeight / 2 > document.querySelector('.compare__block').getBoundingClientRect().top + y) {
    document.querySelectorAll('.compare__block')[1].classList.add('compare__block--highlight');
    window.onscroll = null;
  }
};