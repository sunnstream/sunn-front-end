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

    const slides = document.querySelectorAll('.swiper-slide');

    if (slides[0]) {
        slides[0].style.width = '28.875rem';
        slides[0].style.height = '37.75rem';
    }

    if (slides[1]) {
        slides[1].style.width = '${28.875 * 0.3}rem';
        slides[1].style.height = '${37.75 * 0.3}rem';
    } 

    if (slides[2]) {
        slides[2].style.width = '${28.875 * 0.3 * 0.3}rem';
        slides[2].style.height = '${37.75 * 0.3 * 0.3}rem';
    }   

