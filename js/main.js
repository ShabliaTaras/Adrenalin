$(function () {
  $(".slider").slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
  });
  $(".rate").rateYo({
    rating: 3.6,
    starWidth: "12px",
    ratedFill: "#f05a29",
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu ul").slideToggle();
  });
  $("a[href*=\\#]:not([href=\\#])").on("click", function () {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      return false;
    }
  });
});

(function () {
  const burger = document.querySelector(".header__menu-btn");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
})();

$(function () {
  AOS.init();
});
