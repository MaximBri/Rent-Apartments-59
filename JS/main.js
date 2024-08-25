// burger start
$('.header__burger').on('click', function () {
  $('.burger__nav').toggleClass('hidden')
})
$('.burger-open').on('click', function () {
  $('.burger__nav').toggleClass('hidden')
})
// burger end

// callback start
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
// callback end

// slider1 start
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
// slider1 end

// slider2 start
$('.apart__slider').slick({
  arrows: false,
  slidesToShow: 3,
  infinite: true,
  draggable: true,
  dots: false,
  waitForAnimate: false,
  responsive:
    [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ]
})
$('.apart-left').on('click', function (e) {
  e.preventDefault()
  $('.apart__slider').slick('slickPrev')
})
$('.apart-right').on('click', function (e) {
  e.preventDefault()
  $('.apart__slider').slick('slickNext')
})
// slider2 end

// slider3 start
$('.apart__slider2').slick({
  arrows: false,
  slidesToShow: 1,
  infinite: true,
  draggable: true,
  dots: true,
  appendDots: $('.apart__dots'),
  waitForAnimate: false,
  // responsive:
  //   [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ]
})
$('.apart-left2').on('click', function (e) {
  e.preventDefault()
  $('.apart__slider2').slick('slickPrev')
})
$('.apart-right2').on('click', function (e) {
  e.preventDefault()
  $('.apart__slider2').slick('slickNext')
})
// media
function myFunction(x) {
  if (x.matches) {
    $('.apart__slider2').removeClass('hidden2')
    $('.apart__dots').removeClass('hidden2')
    $('.main__inner__about-texts2').removeClass('hidden2')
  } 
  else {
    $('.apart__slider2').addClass('hidden2')
    $('.apart__dots').addClass('hidden2')
    $('.main__inner__about-texts2').addClass('hidden2')
  }
}
var x = window.matchMedia("(max-width: 768px)")
myFunction(x) 
x.addListener(myFunction);
// slider3 end
