new Swiper(".swiper", {
    spaceBetween: 30,
    loop: true,
    direction: 'horizontal',
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: false,
    }
})