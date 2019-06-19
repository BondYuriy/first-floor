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

$(".partners-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1200: {
      items: 5
    }
  }
});

$(".product-img-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    1200: {
      items: 3
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
