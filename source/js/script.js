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

var cartPopup = document.querySelector(".cart-popup");
var indexButton = document.querySelector(".best-product__button");
var catalogButton = document.querySelector(".catalog__icon");

indexButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  cartPopup.classList.remove("cart-popup--hidden");
});

catalogButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  cartPopup.classList.remove("cart-popup--hidden");
});
