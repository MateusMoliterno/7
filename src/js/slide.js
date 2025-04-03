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
        420: { slidesPerView: 2.2 },
        560: { slidesPerView: 3.3 },
        1024: { slidesPerView: 4.3 },
    }
});
