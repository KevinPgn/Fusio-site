  $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
        
});