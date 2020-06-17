
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

let parallxConteiner = document.getElementById('parallax');
    section = document.getElementById('section'),
    parallaxLevels = parallxConteiner.childNodes;

function moveLayers(e){
  let moveX = (window.innerWidth / 2) - e.pageX,
      moveY = (window.innerHeight / 2)- e.pageY
      ;
  
  if(window.innerHeight > e.pageY){

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




