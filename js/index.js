AOS.init();
$().ready(function () {
  $(window).scroll(function (event) {
    let scroll = this.scrollY;
    //console.log(scroll);
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
//console.log(contact.getBoundingClientRect().top, contact.scrollLeft);
});

const menuIcon = document.querySelector(".icon-group");
const navBar = document.querySelector("#navbar");

const allSections = document.querySelectorAll('section')

for(let i = 0; i < allSections.length; i++){
  allSections[i]
  .addEventListener('click',function() {
    if( navBar.style.maxHeight !== "" ){
      navBar.style.maxHeight = "";
      menuIcon.style.top ="0px";
    }
  });
}
function openNavBar(event){
console.log("i am clicked");
if( navBar.style.maxHeight === "" ){
  const navHeight = navBar.scrollHeight;
  navBar.style.maxHeight = navHeight.toString()+'px';
  menuIcon.style.top ="-30px";
}else{
  navBar.style.maxHeight = "";
  menuIcon.style.top ="0px";

}
}