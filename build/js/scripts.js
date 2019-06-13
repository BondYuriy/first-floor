$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 100) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });
});

//================================================

$(".home-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$(".option-carousel").owlCarousel({
  loop: true,
  margin: 18,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});

//================================================

$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

//=================================================

$(".btn-toggle-filter").click(function() {
  $(this)
    .next(".category-filter")
    .toggleClass("show");
});

//=================================================

$(".select-toggle").click(function() {
  $(this).toggleClass("open");
});

//========================================================

("use strict");

var btnSub = document.querySelector(".btn-sub");
var btnAdd = document.querySelector(".btn-add");
var valueResult = document.querySelector(".value");

var addCounter = function addCounter() {
  valueResult.textContent = Number(valueResult.textContent) + 1;
};

var subCounter = function subCounter() {
  if (Number(valueResult.textContent) > 0) {
    valueResult.textContent = Number(valueResult.textContent) - 1;
  }
};

btnAdd.addEventListener("click", addCounter);
btnSub.addEventListener("click", subCounter);
