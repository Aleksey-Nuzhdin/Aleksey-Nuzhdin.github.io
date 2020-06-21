
//preloader

window.addEventListener("load", function(event) {
  
  let preloader = new Vue({
    el: '.vue__preloader',
    data: {
      message: 'fav!',
      fade: true
    },
    methods: {
      fadeOut(){
        this.fade= false;
      }
    },
    mounted() {
      this.fadeOut();
   }
  })

});

//parallax

let parallaxConteiner = document.getElementById('parallax');
    section = document.getElementById('section'),
    parallaxLevels = parallaxConteiner.childNodes;

function moveLayers(e){
  let moveX = (window.innerWidth / 2) - e.pageX,
      moveY = (window.innerHeight / 2)- e.pageY;
  
  if(window.innerHeight > e.pageY && window.innerWidth > 768){

    for(let i = 1; i < 4; i++){
      let coefficent,
          levelStyle;

      levelStyle = parallaxLevels[i].style;
      coefficent =  window.innerWidth/(25 * i);
      levelStyle.transform = 'translate3d(' + (moveX/coefficent) + 'px ,' + (moveY/coefficent)/2 + 'px , 0)';
    }
  }

};

section.addEventListener('mousemove', moveLayers);

//svg show-Scroll

let circle = document.querySelectorAll('.skilss__scale__donut-segment'),
    conteiner = document.querySelectorAll('.skills__items'),
    scrollToTheItem = [],
    strokeDasharrayDeffoult = [],
    opacityDeffoult = [],
    goAnimation = [],
    wHeight = document.documentElement.clientHeight;


const svgFadeOut = function(){
  for(let i = 0; i < conteiner.length; i++){
    conteiner[i].style.opacity = '1';         //0
    conteiner[i].style.transition = '1s';
    circle[i].style.strokeDashoffset = '200';
    goAnimation[i] = true;
  };
};

svgFadeOut();

const animate = function({duration, draw, timing}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction)

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
};

const svgFadeInSlroll = function(i){
  animate({
    duration: 1000,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      circle[i].style.strokeDashoffset = 200 - (progress * 100);
    }
  });

};

window.onscroll = function () { 
  
  for(let i = 0; i < conteiner.length; i++){  
    scrollToTheItem[i] = circle[i].getBoundingClientRect().top - wHeight; 
    
    if(scrollToTheItem[i] < -115 && goAnimation[i]){
      svgFadeInSlroll(i);
      goAnimation[i] = false;
    }
  };
  
};


// var svgScroll = (function () {
// 	var svg = document.getElementById('heisenberg'),
// 		svgPath = document.querySelectorAll('#heisenberg .group'),
// 		windowMargin = window.innerHeight / 3,
// 		svgRect = svg.getBoundingClientRect(),
// 		svgPos = svgRect.top;

// 	return {
// 		grow: function (wScroll) {
// 			var startAnimate = wScroll - svgPos + windowMargin,
// 				pixelsElapsed = svgPos - wScroll,
// 				percentsElapsed = 100 - Math.ceil(pixelsElapsed / windowMargin * 100),
// 				percentsDraw = 1200 / 100 * percentsElapsed;

// 			if (startAnimate >= 0) {
// 				var drawAmount = 1200 - percentsDraw;

// 				if (drawAmount > 0) {
// 					svgPath.forEach(function (item) {
// 						item.style.strokeDashoffset = drawAmount;
// 					});
// 				}
// 			}
// 		}
// 	}
// }());


// window.onscroll = function () {
// 	var wScroll = window.pageYOffset;

// 	parallax.init(wScroll);
// 	svgScroll.grow(wScroll);
// };
