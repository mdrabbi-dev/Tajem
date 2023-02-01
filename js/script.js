$(function(){
    $('.banner-part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:false,
        pauseOnHover:false
    });
    $('.review-slick').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows:false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 575.98,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
            }
          },
          {
            breakpoint: 319.98,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
            }
          }
        ]
      });
})


  