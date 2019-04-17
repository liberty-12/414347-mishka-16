var nav = document.querySelector(".navigation");
var navButton = document.querySelector(".navigation__toggle");

nav.classList.remove("navigation--nojs");

navButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (nav.classList.contains("navigation--closed")) {
    nav.classList.remove("navigation--closed");
    nav.classList.add("navigation--opened");
  } else {
    nav.classList.add("navigation--closed");
    nav.classList.remove("navigation--opened");
  }
});
