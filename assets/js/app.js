document.getElementById("year").textContent = new Date().getFullYear();

new Swiper('.skills-swiper', {
    loop: true,
    slidesPerView: 6,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
    }
});
new Swiper('.projects-swiper', {
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});