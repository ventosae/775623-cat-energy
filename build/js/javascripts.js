var hamburgerBtn=document.querySelector(".page-header__toggle"),pageHeaderNav=document.querySelector(".main-navigation");pageHeaderNav.classList.remove("main-navigation--open"),hamburgerBtn.classList.remove("page-header__toggle--closed"),null!==hamburgerBtn&&hamburgerBtn.addEventListener("click",function(){pageHeaderNav.classList.toggle("main-navigation--open"),hamburgerBtn.classList.toggle("page-header__toggle--closed")}),document.addEventListener&&document.addEventListener("invalid",function(e){e.target.className+=" form__input--invalid"},!0),document.addEventListener&&document.addEventListener("invalid",function(e){e.target.className+=" pop-up__input--invalid"},!0);var divisor=document.getElementsByClassName("example__slim")[0],slider=document.getElementById("slider");function moveDivisor(){divisor.style.width=slider.value+"%"}var beforeBtn=document.querySelector(".example__toggle-before"),afterBtn=document.querySelector(".example__toggle-after");null!==beforeBtn&&beforeBtn.addEventListener("click",function(){divisor.style.width="100%",slider.value=100}),null!==afterBtn&&afterBtn.addEventListener("click",function(){divisor.style.width="0%",slider.value=0});