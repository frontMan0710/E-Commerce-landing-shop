new Swiper(".cardSwiper", {
    spaceBetween: 30,
    loop: true,
    direction: 'horizontal',
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
    },
    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: false,
    },
    autoplay: {
        delay: 4000,
    }
})
new Swiper(".quote-block", {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 1,
    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
})
