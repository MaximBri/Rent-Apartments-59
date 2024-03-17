$('.header__burger').on('click', function () {
  $('.burger__nav').toggleClass('hidden')
})
$('.burger-open').on('click', function () {
  $('.burger__nav').toggleClass('hidden')
})

$('.callback').on('click', function () {
  $('.callback-menu').removeClass('unshow')
  $('.header').addClass('blur'),
  $('.main').addClass('blur'),
  $('.footer').addClass('blur')
})
$('.free').on('click', function () {
  $('.callback-menu').addClass('unshow')
  $('.header').removeClass('blur'),
  $('.main').removeClass('blur'),
  $('.footer').removeClass('blur')
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