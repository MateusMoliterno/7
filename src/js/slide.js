const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        300: { slidesPerView: 1.5 },
        // 640: { slidesPerView: 2 },
        768: { slidesPerView: 2.3 },
        1024: { slidesPerView: 3.3 },
    }
});
