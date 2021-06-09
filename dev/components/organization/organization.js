const organizationAnimation = () => {
  const y = window.scrollY;

  if (y + window.innerHeight / 1.5 > document.querySelector('.organization__map').getBoundingClientRect().top + y) {
    document.querySelector('.organization__map').classList.add('organization__map--animated');
    window.removeEventListener('scroll', organizationAnimation)
  }
};

window.addEventListener('scroll', organizationAnimation);