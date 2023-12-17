new Swiper(".swiper", {
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
