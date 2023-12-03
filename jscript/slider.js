new Swiper(".swiper", {
    spaceBetween: 30,
    loop: true,
    direction: 'horizontal',
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
<<<<<<< HEAD
        768: {
=======
        425: {
            slidesPerView: 2,
        },
        767: {
>>>>>>> fb7c0e16ba3e6a1a7eb383d7aa3a67f96d33f3b0
            slidesPerView: 3,
        },
    },
    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: false,
    }
})