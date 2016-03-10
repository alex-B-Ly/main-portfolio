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

  // FUNCTIONS CALLED
  colorizeMe();
});