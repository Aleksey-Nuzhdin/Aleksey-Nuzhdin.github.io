"use strict";

//preloader

let bodyBlock = document.querySelector('body');

bodyBlock.style.overflow = 'hidden';

window.addEventListener("load", function() {
  setTimeout(()=>{
    let preloader = document.querySelector('.vue__preloader');
    let preloaderBGC = document.querySelector('.preloader');
 
    bodyBlock.style.overflow = 'auto';
    preloaderBGC.style.opacity = 0;

    setTimeout(()=>{
      preloader.style.display = 'none';
    },1000);
  }, 500)
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

//Buttoun entry

if(document.getElementById('entry')){
  let button = document.getElementById('entry'),
      form = document.querySelector('.form__login');
  
  button.onclick = ()=>{
    form.submit();
  };
};

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

const goToThisArticle = function(){

  if(chekStartAnimation){
    chekStartAnimation = false;
    setTimeout(() => {
      chekStartAnimation = true;
    }, 300); 

    for(let i = 0; i < titleArticlesBlog.length; i++){
      titleArticlesBlog[i].classList.remove('sidebar__article__item_activ');
    };

    this.classList.add('sidebar__article__item_activ');

    let arrayArticles = [...titleArticlesBlog],
        indexEl = arrayArticles.indexOf(this),
        posElY = getCoords(articlesBlog[indexEl]).top;

    winSkroll(posElY-40, 0);
  };
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
    if(userClientHeight < 500){
      sliderArticleList.style.top = (skrollHeight - 500) + 'px';
    }else{
      sliderArticleList.style.top = (skrollHeight - userClientHeight) + 'px';
    };

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

let sidebarMoveConteiner = document.querySelector('.blog'),
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

const animateCloseSidebar = function(){
  sidebarBlogConteiner.style.transition = '.5s';
  bgSidebarMoveConteiner.style.opacity = '0';
  sidebarBlogConteiner.style.left = -350 + 'px';
  sidebarMoveConteiner.removeEventListener('mousemove',  eventMouseMove);
  sidebarMoveConteiner.removeEventListener('touchmove', eventToucheMove);
  setTimeout(deltEventMoveTransition, 500);
  setTimeout(deltEventMoveLeft, 500);
};

const animateOpenSidebar = function(){
  bgSidebarMoveConteiner.style.left = '0px';
  bgSidebarMoveConteiner.style.opacity = '1';
  sidebarBlogConteiner.style.transition = '.5s';
  sidebarBlogConteiner.style.left = -70 + 'px';
  sidebarMoveConteiner.removeEventListener('mousemove',  eventMouseMove);
  sidebarMoveConteiner.removeEventListener('touchmove', eventToucheMove);
  setTimeout(deltEventMoveTransition, 500);
};

const finishMoveSideBar = function(){
  let offsetLeft = sidebarBlogConteiner.offsetLeft;
  if(offsetLeft < -210){        //Дипоазн значений от -350 до -70
    animateCloseSidebar();
  }else{
    animateOpenSidebar();
  };

};

const MoveSidebarBlog = function(eLClientX){
  let fixMoveX = eLClientX - positionMouseX,
      moveX = fixMoveX+offsetLeftEl+350;

  if(0 <= moveX && moveX <= 280){
    sidebarBlogConteiner.style.left = (fixMoveX+offsetLeftEl) + 'px';

    if(fixMoveX > 150){
      finishMoveSideBar();
    }else if(fixMoveX <-150){
      finishMoveSideBar();
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

};

const removeEventMoveSidevarBlog = function(){

  sidebarBlogConteiner.removeEventListener('mousedown',
  ()=> {    
    positionMouseX = window.event.clientX;
    offsetLeftEl = sidebarBlogConteiner.offsetLeft;
    sidebarMoveConteiner.addEventListener('mousemove', eventMouseMove   
  ) } );

  sidebarMoveConteiner.removeEventListener('mouseup',
    ()=>sidebarMoveConteiner.removeEventListener('mousemove',  eventMouseMove) );

  sidebarBlogConteiner.removeEventListener('touchstart',
    (e)=>{
      positionMouseX = e.changedTouches[0].clientX;
      offsetLeftEl = sidebarBlogConteiner.offsetLeft;
      sidebarMoveConteiner.addEventListener('touchmove', eventToucheMove   
  )} );

  sidebarMoveConteiner.removeEventListener('touchend',
    ()=>sidebarMoveConteiner.removeEventListener('touchmove', eventToucheMove) );

  sidebarMoveConteiner.removeEventListener('touchend', finishMoveSideBar);
  sidebarMoveConteiner.removeEventListener('mouseup', finishMoveSideBar);

};

//flip login

const flipLogin = function(){
  let flipConteiner = document.querySelector('.welcom-title__conteiner.flip-conteiner'),
      battonAutorization = document.querySelector('.button_authorization__welcom'),
      battonBack = document.getElementById('goToWelcome');

  const flipLoginForward = function(){
    flipConteiner.style.transform = 'rotateY(180deg)';
    battonAutorization.style.opacity = 0;
    battonAutorization.style.cursor = 'default';
  }
  const flipLoginBack = function(){
    flipConteiner.style.transform = 'rotateY(0deg)';
    battonAutorization.style.opacity = 1;
    battonAutorization.style.cursor = 'pointer';
  }

  if(battonAutorization != null){
    battonAutorization.addEventListener('click', flipLoginForward);
    battonBack.addEventListener('click', flipLoginBack);
  }
}

//Animation hamBatton

let humButtonCheck = false,
    pauseAnimationHumButton = false;

const animateHumBatton = function(){
  let lines = document.querySelectorAll('.ham-menu__lines'),
      heigtBlock = document.querySelector('.ham-menu').offsetHeight,
      heigtLines = lines[0].offsetHeight;

  if(!pauseAnimationHumButton){
    pauseAnimationHumButton = true;
    setTimeout(() => {pauseAnimationHumButton = false}, 1000);

    if(humButtonCheck){
      lines[0].style.transform = 'rotate(0deg)';
      lines[2].style.transform = 'rotate(0deg)';

      setTimeout(() => {
        lines[0].style.top = 0 + 'px';
        lines[2].style.bottom = 0 + 'px';
        lines[1].style.opacity = 1;
      },500);
      humButtonCheck = false;
    }else{

      lines[0].style.top = heigtBlock/2 - heigtLines/2 + 'px';
      lines[2].style.bottom = heigtBlock/2 - heigtLines/2 + 'px';
      
      setTimeout(() => {
        lines[1].style.opacity = 0;
        lines[0].style.transform = 'rotate(45deg)';
        lines[2].style.transform = 'rotate(-45deg)';
      },500);

      humButtonCheck = true;
    };
  };
};

//curtain

const curtains = function(){

  let curtainsBatton = document.querySelector('.ham-menu'),
      checkCurtainsActiv = false,
      pausedAnimationCurtains = false,
      curtainArticle = document.querySelectorAll('.nav_item__curtains'),
      leftCurtain = document.querySelector('.left-curtain'),
      rightCurtain = document.querySelector('.right-curtain'),
      cortainsConteiner = document.querySelector('.curtains__nav');

  const curtainsDefflout = function(){
    leftCurtain.style.left = '-50%';
    rightCurtain.style.right = '-50%';
    cortainsConteiner.style.top = '-10000px';
    cortainsConteiner.style.opacity = 1;
    curtainsBatton.style.position = 'absolute';

    for(let i = 0; i<curtainArticle.length; i++){
      curtainArticle[i].style.transform = 'scale(0.0, 0.0)';
      curtainArticle[i].style.opacity = 0;
    };
  };

  const curtainArticleShow = function(i){
    curtainArticle[i].style.transform = 'scale(1.0, 1.0)';
    curtainArticle[i].style.opacity = 1;
    if ( i+1 < curtainArticle.length){ 
      return setTimeout(curtainArticleShow, 200, i+1);
    };
  };

  const curtainsDown = function(){
    leftCurtain.style.left = '0px';
    rightCurtain.style.right = '0px';
    cortainsConteiner.style.top = '0px';
    curtainsBatton.style.position = 'fixed';

    setTimeout(curtainArticleShow, 200, 0);
  };


  const curtainsUp = function(){
    cortainsConteiner.style.opacity = 0;
    setTimeout(curtainsDefflout, 700);
  };

  const curtainsActiv = function(){

    if(!pausedAnimationCurtains){
      pausedAnimationCurtains = true;
      setTimeout(() => {pausedAnimationCurtains = false}, 1000);
      if(checkCurtainsActiv){
        curtainsUp();
        checkCurtainsActiv = false;
      }else{
        curtainsDown();
        checkCurtainsActiv = true;
      };
    };
  };

  if(curtainsBatton){
    curtainsBatton.addEventListener('click', curtainsActiv);
    curtainsBatton.addEventListener('click', animateHumBatton);
  } 
};

//slider Portfolio

let controlTop =      document.querySelector('.slider__control-lisrt_up'),
    controlBottom =   document.querySelector('.slider__control-lisrt_down'),
    midleConeiner =   document.querySelector('.portfolio__right'),
    sliderMiddle =    document.querySelector('.slider__portfolio'),
    descItems =       document.querySelectorAll('.slider__desc-item'),
    midleIMG =        document.querySelectorAll('.slided__img-poiinter'),
    sectionPorfolio = document.querySelector('.portfolio'),
    activElem = 0,
    pointerItems,
    topItems,
    bottomItems;

const letSlider = function(){
  topItems = controlTop.querySelectorAll('.slider__control');
  bottomItems = controlBottom.querySelectorAll('.slider__control');
  pointerItems = sliderMiddle.querySelectorAll('.slider__pointer');

};


const heightFixSlider = function(){
  if(window.innerWidth > 768){
    sliderMiddle.style.height = midleIMG[activElem].offsetHeight + 'px';
  };

  if(window.innerWidth > 1200 ) sectionPorfolio.style.height = 130 + controlTop.offsetHeight + midleIMG[activElem].offsetHeight + 'px';

  controlTop.style.height = topItems[activElem].offsetHeight + 'px';
  controlBottom.style.height = topItems[activElem].offsetHeight + 'px';

  if(window.innerWidth < 768){
    sliderMiddle.style.height = midleConeiner.offsetHeight + 'px';
  };


  if(window.innerWidth > 1200 && sectionPorfolio){
    sectionPorfolio.style.height = 130 + controlTop.offsetHeight + midleIMG[activElem].offsetHeight + 'px';
  };
  if(window.innerWidth < 1200 && window.innerWidth > 768 && sectionPorfolio){
    sectionPorfolio.style.height = 750 + 'px';
  };
  if(window.innerWidth < 768 && sectionPorfolio){
    sectionPorfolio.style.height = 'auto';
  };
};

const sliderStartPosition = function(){
  topItems[0].style.top = 0;
  bottomItems[0].style.top = 0;
  pointerItems[0].style.top = 0;
};

const sliderPortfolio = function(){
  let checkGoToSlide = true,
      amountElem = topItems.length,
      nextElem
      ;
  

  const slideAnimation = function(){
    let itemControlHeigt,
        checkUpDown,
        itemPointerlWidth;

    if(checkGoToSlide){
      checkGoToSlide = false;

      if(this === controlTop){
        checkUpDown = 1;
      }else{
        checkUpDown = -1;
      };

      itemControlHeigt = checkUpDown * topItems[activElem].offsetHeight,
      itemPointerlWidth = checkUpDown * pointerItems[activElem].offsetWidth;

      nextElem = (activElem + amountElem + checkUpDown) % (amountElem);

      //console.log(descItems, activElem, amountElem, itemPointerlWidth);
      
      descItems[activElem].style.opacity = 0;
      descItems[nextElem].style.display = 'flex';
      setTimeout(()=>{
        descItems[nextElem].style.opacity = 1;
      },300)

      topItems[nextElem].style.top = itemControlHeigt + 'px';
      topItems[nextElem].style.display = 'flex';
      bottomItems[nextElem].style.top = -itemControlHeigt + 'px';
      bottomItems[nextElem].style.display = 'flex';
      pointerItems[nextElem].style.left = -itemPointerlWidth + 'px';
      pointerItems[nextElem].style.display = 'flex';
      
      setTimeout(()=>{
        topItems[nextElem].style.top = 0 + 'px';
        topItems[activElem].style.top = -itemControlHeigt + 'px';
        bottomItems[activElem].style.top = itemControlHeigt + 'px';
        bottomItems[nextElem].style.top = 0 + 'px';
        pointerItems[activElem].style.left = itemPointerlWidth + 'px';
        pointerItems[nextElem].style.left = 0 + 'px';


        setTimeout(()=>{
          descItems[activElem].style.display = 'none';
          topItems[activElem].style.display = 'none';
          bottomItems[activElem].style.display = 'none';
          pointerItems[activElem].style.display = 'none';
          activElem=nextElem;
          checkGoToSlide = true;
        },500);
      },20);
    };
  };
  
  controlTop.addEventListener('click', slideAnimation);
  controlBottom.addEventListener('click', slideAnimation);
};

//window onscroll

window.onscroll = function() { 
  let sliderArticleList = document.querySelector('.sidebar__article__list'),
      skrollHeight = window.scrollY;

  winSkrollShowSvg(); 
  winSkrollBlogArticles(sliderArticleList, skrollHeight);

  if( (window.innerWidth <= 768) && (skrollHeight < (userClientHeight / 2)) && sidebarBlogConteiner != undefined ) animateCloseSidebar();

};


svgFadeOut();
addEventBtnSkroll();
addEventgoToThisArticle();
flipLogin();
curtains();



const heightFixSliderShow = function(i){
  heightFixSlider();
  if ( i+1 < 5){ 
    return setTimeout(heightFixSliderShow, 200, i+1);
  };
};


if(controlTop){
  letSlider();
  setTimeout(heightFixSlider, 50);
  sliderStartPosition(); 
  sliderPortfolio();
  heightFixSliderShow(0);
};


let winWidhtBig;
if(window.innerWidth <= 768 && sidebarBlogConteiner) {
  addEventmoveSidebarBlog();
  winWidhtBig = false;
}else{ winWidhtBig = true;}




window.onresize = function(){
  userClientHeight =  document.documentElement.clientHeight;

  if(controlTop) heightFixSlider();

  for(let i = 0; i<articlesBlog.length; i++ ){
    articlesPosTop[i] = getCoords(articlesBlog[i]).top;
    articlesPosBottom[i] = articlesPosTop[i] + articlesBlog[i].offsetHeight;
  };

  if(window.innerWidth > 768 && !winWidhtBig && sidebarBlogConteiner){
    animateCloseSidebar();
    removeEventMoveSidevarBlog();
    sidebarBlogConteiner.style.left = 0 + 'px';
    winWidhtBig = true;
  };

  if(window.innerWidth < 768 && winWidhtBig && sidebarBlogConteiner){
    sidebarBlogConteiner.style.left = -350 + 'px';
    addEventmoveSidebarBlog();
    winWidhtBig = false;
  };


};