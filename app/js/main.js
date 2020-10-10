$(function () {
  $(".slider__inner").slick({
    arrows: false,
  });

  $('.recommend__slider').slick({
    // fade: true,
    prevArrow: $('.btn-prev'),
    nextArrow: $('.btn-next')
  });

  $(".select__header").on("click", function () {
    $(".select__body").slideToggle();
  });
  $(".select__item").on("click", function () {
    let value = this.innerText;
    $(".select__current").html(value);
    $(".select__body").slideToggle();
  });

  $('.popularity__raiting').rateYo({
    "starWidth": "17px",
    "rating": 4.5,
    "readOnly": true,
    "normalFill":"#ffc000",
    "ratedFill":"#ffc000",
    "starSvg": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\""+"viewBox=\"0 0 24 24\">"+
  "<title>star_outline</title>"+
  "<path d=\"M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z\"></path>"+
  "</svg>"
  })
});
