"use strict";

//map 

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.057394, 82.904170],
          zoom: 16,
          controls: ['zoomControl']
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),


      myPlacemarkWithContent = new ymaps.Placemark([55.055764, 82.904242], {
          hintContent: 'Мой дом',
          balloonContent: 'Дуси ковальчук 250',
          
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'assets/images/map_marker.png',
          // Размеры метки.
          iconImageSize: [38, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-19, -48],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);

  myMap.behaviors.disable('scrollZoom');
});
