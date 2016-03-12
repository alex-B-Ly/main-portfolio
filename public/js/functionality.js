$(document).ready(function() {
  
  // INTRO
  function colorizeMe(){
    $(window).scroll(function() {
      var yPos = window.pageYOffset;

      if(yPos >= 120){
        $('#alex').removeClass('intro-pic').addClass('intro-pic-color');
      }else{
        $('#alex').removeClass('intro-pic-color').addClass('intro-pic');
      }
    });
  }

  function scrollTest(){
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
      offset:500
    })
    .setClassToggle('.front-skills', 'zoomer').
    addTo(controller);
  }

  // FUNCTIONS CALLED
  colorizeMe();
  scrollTest();
});