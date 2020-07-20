"use strict";

//map 

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [53.356830, 83.770523],
          zoom: 16,
          controls: ['zoomControl']
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),


      myPlacemarkWithContent = new ymaps.Placemark([53.354767, 83.777018], {
          hintContent: 'Мой дом',
          balloonContent: 'Советская 4',
          
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
