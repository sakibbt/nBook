$(document).ready(function(){
  $('.center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
        }
        }
    ]
  });
});
$('.counter').counterUp({
    delay: 10,
    time: 1300
});