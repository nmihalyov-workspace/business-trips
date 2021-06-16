const $map = document.querySelector('.js-contacts-map');

if ($map) {
  const location = [55.805533, 37.521336];
  
  const initMap = () => {
    const map = new ymaps.Map($map, {
      center: location,
      zoom: 16
    });
  
    const pin = new ymaps.Placemark(location, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/pin.png',
      iconImageSize: [71, 86],
      iconImageOffset: [-35, -86]
    });
  
    map.geoObjects.add(pin)
  };
  
  ymaps.ready(initMap);
}