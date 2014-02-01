var point = [55.76, 37.64];

ymaps.ready(init);

var myMap, myPlacemark;

function init() {
  myMap = new ymaps.Map ("map", {center: point, zoom: 17}); 
  myPlacemark = new ymaps.Placemark(point);
  myMap.geoObjects.add(myPlacemark);
}