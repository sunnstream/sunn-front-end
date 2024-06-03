//Homepage Carousel using Swiper.js

$(".slider-main_component").each(function(index) {
    const swiper = new Swiper($(this).find(".swiper") [0], {
        slidesPerView: 3,
        spaceBetween: "8%",
        speed: 700,
        keyboard: true,
        mousewheel: {
            forcetoaxis: true
        },

        slideToClickedSlide: true,
        
        
        
        });

});


  
    
  