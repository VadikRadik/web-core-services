/*import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper(".brands-list",{
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: ".swiper-pagination",
    },
});*/

let brands = [
    {
        src: "./files/lenovo.png",
        alt: "лого lenovo",
    },
    {
        src: "./files/samsung.png",
        alt: "лого samsung",
    },
    {
        src: "./files/apple.png",
        alt: "лого apple",
    },
    {
        src: "./files/viewsonic.png",
        alt: "лого viewsonic",
    },
]

let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;



let createBrandCards = function(brands) {
    let cardTemplate = document.querySelector("#brand-card-template").content;
    let result = [];

    for (let i = 0; i < brands.length; i++) {
        let newCard = cardTemplate.querySelector(".brand-card").cloneNode(true);
        let cardLogo = newCard.querySelector(".brand-card__logo");
        cardLogo.src = brands[i].src;
        cardLogo.alt = brands[i].alt;
        result.push(newCard);
    }
    
    return result;
}

let createSwiper = function(brands) {
    let swiper = new Swiper(".brands-swiper", {
        speed: 400,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
        },
        createElements: true,
        init: false,
    });

    const cardsParent = document.querySelector(".swiper-wrapper");

    let cards = createBrandCards(brands);
    for (let i = 0; i < cards.length; i++) {
        let cardWrapper = document.createElement("div");
        cardWrapper.classList.add("swiper-slide");
        cardWrapper.appendChild(cards[i]);
        cardsParent.appendChild(cardWrapper);
    }

    swiper.init();
}

createSwiper(brands);