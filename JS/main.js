$('.header__burger').on('click', function () {
  $('.burger__nav').toggleClass('hidden')
})
$('.burger-open').on('click', function () {
  $('.burger__nav').toggleClass('hidden')
})


$('.reviews__slider').slick({
  arrows: false,
  slidesToShow: 2,
  infinite: true,
  draggable: false,
  dots: true,
  appendDots: $('.review__dots'),
  waitForAnimate: false,
  responsive:
    [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
})
$('.left').on('click', function (e) {
  e.preventDefault()
  $('.reviews__slider').slick('slickPrev')
})
$('.right').on('click', function (e) {
  e.preventDefault()
  $('.reviews__slider').slick('slickNext')
})