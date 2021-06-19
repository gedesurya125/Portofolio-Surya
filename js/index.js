AOS.init();
$(document).ready(function () {
  $(window).scroll(function (event) {
    let scroll = this.scrollY;
    if(scroll > $("header").height()){
      $("header").addClass("show");
      console.log('more than height');
    }else{
      $("header").removeClass("show");
    }
    console.log(
      'this is project',
      $('#project-tile').scrollTop()
      
    )
  });

//fade project


});