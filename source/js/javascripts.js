var hamburgerBtn = document.querySelector(".page-header__toggle");
var pageHeaderNav = document.querySelector(".main-navigation");

pageHeaderNav.classList.remove("main-navigation--open");


  if(hamburgerBtn !== null){
  hamburgerBtn.addEventListener("click", function () {
    pageHeaderNav.classList.toggle("main-navigation--open");
    hamburgerBtn.classList.toggle("page-header__toggle--closed");
  });
}

  if(document.addEventListener){
  document.addEventListener('invalid', function(e){
    e.target.className += ' form__input--invalid';
  }, true);
  }

var divisor = document.getElementsByClassName("example__slim")[0],
slider = document.getElementById("slider");
function moveDivisor() {
    divisor.style.width = slider.value+"%";
}

var beforeBtn = document.querySelector(".example__toggle--before");
var afterBtn = document.querySelector(".example__toggle--after");

if(beforeBtn !== null){
  beforeBtn.addEventListener("click", function () {
    divisor.style.width = "0%";
    slider.value = 0
  });
}

if(afterBtn !== null){
  afterBtn.addEventListener("click", function () {
    divisor.style.width = "100%";
    slider.value = 100
  });
}
