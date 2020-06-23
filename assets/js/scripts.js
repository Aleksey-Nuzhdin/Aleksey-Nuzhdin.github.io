
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
    strokeDashoffsetDeffoult = [],
    coftStrokeDashoffset =[],
    goAnimation = [],
    str = [],
    wHeight = document.documentElement.clientHeight;


const svgFadeOut = function(){
  for(let i = 0; i < conteiner.length; i++){
    conteiner[i].style.opacity = '0';         //0
    conteiner[i].style.transition = '1s';
    str[i] = circle[i].style.strokeDashoffset;
    strokeDashoffsetDeffoult[i] = Number(str[i][0] + str[i][1] + str[i][2]);
    coftStrokeDashoffset[i] = (200 - strokeDashoffsetDeffoult[i])/100;
    goAnimation[i] = true;
    circle[i].style.strokeDashoffset = '200';
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
      circle[i].style.strokeDashoffset = 200 - (progress * 100)*coftStrokeDashoffset[i];
      conteiner[i].style.opacity = progress*4;
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


