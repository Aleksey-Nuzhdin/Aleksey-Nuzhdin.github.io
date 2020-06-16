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
