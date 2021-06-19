AOS.init();
$().ready(function () {
  $(window).scroll(function (event) {
    let scroll = this.scrollY;
    console.log(scroll);
    if(scroll > $("header").height()){
      $("header").addClass("show");
      $("#welcome-section").addClass("full")
      $("header > span, header > span > img").addClass("minimize");
    }else{
      $("header").removeClass("show");
      $("#welcome-section").removeClass("full");
      $("header > span, header > span > img").removeClass("minimize");
    }
  });

//fade project
let contact = document.getElementById("contact");
console.log(contact.getBoundingClientRect().top, contact.scrollLeft);

});