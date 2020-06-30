"use strict";

//preloader

let bodyBlock = document.getElementsByTagName('body')[0];

bodyBlock.style.overflow = 'hidden';

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

  bodyBlock.style.overflow = 'auto';

});

//parallax

let parallaxConteiner = document.getElementById('parallax'),
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
    };
  };

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
    userClientHeight =  document.documentElement.clientHeight;

const svgFadeOut = function(){
  for(let i = 0; i < conteiner.length; i++){
    conteiner[i].style.opacity = '0';         //0
    conteiner[i].style.transition = '1s';
    str[i] = circle[i].style.strokeDashoffset;
    strokeDashoffsetDeffoult[i] = Number(str[i][0] + str[i][1] + str[i][2]);
    coftStrokeDashoffset[i] = (strokeDashoffsetDeffoult[i] - 100)/100;
    goAnimation[i] = true;
    circle[i].style.strokeDashoffset = '200';
  };
};

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
    duration: 750,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      circle[i].style.strokeDashoffset = 200 - (progress * 100)*coftStrokeDashoffset[i];
      conteiner[i].style.opacity = progress*4;
    }
  });

};

// btn scroll

const winSkroll = function(top = 0, left = 0, behavior = 'smooth'){
  window.scroll({
    behavior: behavior,
    top: top,
    left: left,
  });
};

let btnDown = document.querySelectorAll('.but-down'),
    btnUp = document.querySelectorAll('.but-up');
    
const btnSkrollDown = () => {

  winSkroll(userClientHeight, 0);
};

const btnSkrollUp = () =>{
  winSkroll(0, 0);
};

const addEventBtnSkroll = () => {
  if(btnDown.length != 0){
    btnDown[0].addEventListener('click', btnSkrollDown);
  };

  if(btnUp.length != 0){
    btnUp[0].addEventListener('click', btnSkrollUp);
  };
};

//skrollBlogArticles

const getCoords = function(elem) { 
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}  


let titleArticlesBlog = document.querySelectorAll('.sidebar__article__item'),
    articlesBlog = document.querySelectorAll('.article__content__item'),
    sldebarArticleMark = document.querySelectorAll('.sldebar__article_mark')[0],
    articlesPosBottom = [],
    posActivArticleTop = [],
    posActivArticlebottom = [],
    articlesPosTop = [],
    chekStartAnimation = true, 
    checkNewArticles = 0;

for(let i = 0; i<articlesBlog.length; i++ ){
  articlesPosTop[i] = getCoords(articlesBlog[i]).top;
  articlesPosBottom[i] = articlesPosTop[i] + articlesBlog[i].offsetHeight;
};

const returTrue = () => {
  chekStartAnimation = true;
}

const goToThisArticle = function(){

  for(let i = 0; i < titleArticlesBlog.length; i++){
    titleArticlesBlog[i].classList.remove('sidebar__article__item_activ');
  };

  this.classList.add('sidebar__article__item_activ');

  let arrayArticles = [...titleArticlesBlog],
      indexEl = arrayArticles.indexOf(this),
      posElY = getCoords(articlesBlog[indexEl]).top;

  winSkroll(posElY-40, 0);

};

const addEventgoToThisArticle = function(){
  for(let i = 0; i<titleArticlesBlog.length; i++){
    titleArticlesBlog[i].addEventListener('click', goToThisArticle);
  };
};

//window onscroll showSVG

const winSkrollShowSvg = function(){
  for(let i = 0; i < conteiner.length; i++){  
    scrollToTheItem[i] = circle[i].getBoundingClientRect().top - userClientHeight; 
    
    if(scrollToTheItem[i] < -70 && goAnimation[i]){
      svgFadeInSlroll(i);
      goAnimation[i] = false;
    }
  };
};

//window onscroll skrollBlogArticles

const winSkrollBlogArticles = function(sliderArticleList, skrollHeight){
  if(userClientHeight <= skrollHeight && sliderArticleList != undefined){
    sliderArticleList.style.top = (skrollHeight - userClientHeight) + 'px';

    let activPageYOffset = pageYOffset + (userClientHeight/2);
      
    for(let i = 0; i<articlesBlog.length; i++ ){

      if( activPageYOffset < (articlesPosBottom[i]-10) && activPageYOffset > (articlesPosTop[i]+50) ){   

        if(checkNewArticles != i){

          for(let i = 0; i < titleArticlesBlog.length; i++){
            titleArticlesBlog[i].classList.remove('sidebar__article__item_activ');
          };

          titleArticlesBlog[i].classList.add('sidebar__article__item_activ');
          sldebarArticleMark.style.top = titleArticlesBlog[i].offsetTop + 'px';
          sldebarArticleMark.style.height = titleArticlesBlog[i].offsetHeight + 'px';
          checkNewArticles = i;
        }
      };
    };
  };
}

//moveSidebarArticleList

let sidebarBlogMark = document.querySelector('.sldebar__article_mark_circle'),
    sidebarMoveConteiner = document.querySelector('.blog'),
    eLClientX,
    positionMouseX,
    offsetLeftEl,
    bgSidebarMoveConteiner = document.querySelector('.bg__show-svipearticle-bar'),
    sidebarBlogConteiner = document.querySelector('.sidebar__blog');

  
const eventMouseMove = function(){ 
  let eLClientX = window.event.clientX;
  MoveSidebarBlog(eLClientX);     
};

const eventToucheMove = function(e){ 
  let eLClientX = e.changedTouches[0].clientX; 
  MoveSidebarBlog(eLClientX);
};

const deltEventMoveTransition = function(){
  sidebarBlogConteiner.style.transition = '0s'
};

const deltEventMoveLeft = function(){
  bgSidebarMoveConteiner.style.left = '-100%';
};

const finishMoveSideBar = function(){
  let offsetLeft = sidebarBlogConteiner.offsetLeft;
  if(offsetLeft < -175){
    sidebarBlogConteiner.style.transition = '.5s';
    bgSidebarMoveConteiner.style.opacity = '0';
    sidebarBlogConteiner.style.left = -350 + 'px';
    sidebarMoveConteiner.removeEventListener('mousemove',  eventMouseMove);
    sidebarMoveConteiner.removeEventListener('touchmove', eventToucheMove);
    setTimeout(deltEventMoveTransition, 500);
    setTimeout(deltEventMoveLeft, 500);
  }else{
    bgSidebarMoveConteiner.style.left = '0';
    bgSidebarMoveConteiner.style.opacity = '1';
    sidebarBlogConteiner.style.transition = '.5s';
    sidebarBlogConteiner.style.left = -70 + 'px';
    sidebarMoveConteiner.removeEventListener('mousemove',  eventMouseMove);
    sidebarMoveConteiner.removeEventListener('touchmove', eventToucheMove);
    setTimeout(deltEventMoveTransition, 500);
  };

};

const MoveSidebarBlog = function(eLClientX){
  let fixMoveX = eLClientX - positionMouseX,
      moveX = fixMoveX+offsetLeftEl+350;

  if(0 <= moveX && moveX <= 280){
    sidebarBlogConteiner.style.left = (fixMoveX+offsetLeftEl) + 'px';

    if(fixMoveX > 150){
      bgSidebarMoveConteiner.style.left = '0';
      bgSidebarMoveConteiner.style.opacity = '1';
      sidebarBlogConteiner.style.transition = '.5s';
      sidebarBlogConteiner.style.left = -70 + 'px';
      sidebarMoveConteiner.removeEventListener('mousemove',  eventMouseMove);
      sidebarMoveConteiner.removeEventListener('touchmove', eventToucheMove);
      setTimeout(deltEventMoveTransition, 500);
    }else if(fixMoveX <-100){
      sidebarBlogConteiner.style.transition = '.5s';
      bgSidebarMoveConteiner.style.opacity = '0';
      sidebarBlogConteiner.style.left = -350 + 'px';
      sidebarMoveConteiner.removeEventListener('mousemove',  eventMouseMove);
      sidebarMoveConteiner.removeEventListener('touchmove', eventToucheMove);
      setTimeout(deltEventMoveTransition, 500);
      setTimeout(deltEventMoveLeft, 500);
    };

  };
};

const addEventmoveSidebarBlog = function(){

  sidebarBlogConteiner.addEventListener('mousedown',
    ()=> {    
      positionMouseX = window.event.clientX;
      offsetLeftEl = sidebarBlogConteiner.offsetLeft;
      sidebarMoveConteiner.addEventListener('mousemove', eventMouseMove   
  ) } );

  sidebarMoveConteiner.addEventListener('mouseup',
    ()=>sidebarMoveConteiner.removeEventListener('mousemove',  eventMouseMove) );

    sidebarBlogConteiner.addEventListener('touchstart',
    (e)=>{
      positionMouseX = e.changedTouches[0].clientX;
      offsetLeftEl = sidebarBlogConteiner.offsetLeft;
      sidebarMoveConteiner.addEventListener('touchmove', eventToucheMove   
  )} );

  sidebarMoveConteiner.addEventListener('touchend',
    ()=>sidebarMoveConteiner.removeEventListener('touchmove', eventToucheMove) );

  sidebarMoveConteiner.addEventListener('touchend', finishMoveSideBar);
  sidebarMoveConteiner.addEventListener('mouseup', finishMoveSideBar);

}

//window onscroll 

window.onscroll = function() { 
  let sliderArticleList = document.querySelector('.sidebar__article__list'),
      skrollHeight = window.scrollY;

  winSkrollShowSvg(); 
  winSkrollBlogArticles(sliderArticleList, skrollHeight);

  
};


svgFadeOut();
addEventBtnSkroll();
addEventgoToThisArticle();
addEventmoveSidebarBlog();
