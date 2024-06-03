const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: "8%",
    breakpoints: {
        320: {
            slidesPerView: 1, 
            spaceBetween: "8%",
        },

        480: {
            slidesPerView: 2,
            spaceBetween: "8%",
        },

        640: {
            sidesPerView: 3,
            spaceBetween: "8%",
        }
        }
    });

