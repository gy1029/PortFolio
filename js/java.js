const swiper01 = new Swiper('.swiper01', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    breakpoints: {
        // when window width is >= 360px
        360: {
        slidesPerView: 1,
        spaceBetween: 50,
        },
        // when window width is >= 768px
        768: {
        slidesPerView: 2,
        spaceBetween: 50,
        },
        // when window width is >= 1200px
        1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        },               
    },
    navigation:{
        nextEl:'.btn-next01',
        prevEl:'.btn-prev01',
    }
});
const swiper02 = new Swiper('.swiper02', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    breakpoints: {
        // when window width is >= 360px
        360: {
        slidesPerView: 1,
        spaceBetween: 50,
        },
        // when window width is >= 768px
        768: {
        slidesPerView: 2,
        spaceBetween: 50,
        },
        // when window width is >= 1200px
        1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        },
        
    },
        navigation:{
            nextEl:'.btn-next02',
            prevEl:'.btn-prev02',
    }
});
const swiper03 = new Swiper('.swiper03', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    breakpoints: {
        // when window width is >= 360px
        360: {
        slidesPerView: 1,
        spaceBetween: 50,
        },
        // when window width is >= 768px
        768: {
        slidesPerView: 2,
        spaceBetween: 50,
        },
        // when window width is >= 1200px
        1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        },
        
    },
    navigation:{
            nextEl:'.btn-next03',
            prevEl:'.btn-prev03',
    }
});