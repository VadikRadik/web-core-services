import 'swiper/swiper-bundle.min.css'
import Swiper, { Pagination } from 'swiper';

import {createShowAll} from './show-all.js';

import lenovoImg from "../img/lenovo.png";
import samsungImg from "../img/samsung.png";
import appleImg from "../img/apple.png";
import viewsonicImg from "../img/viewsonic.png";
import boschImg from "../img/bosch.png";
import hpImg from "../img/hp.png";
import acerImg from "../img/acer.png";
import sonyImg from "../img/sony.png";

let brands = [
    {
        src: lenovoImg,
        alt: "лого lenovo",
    },
    {
        src: samsungImg,
        alt: "лого samsung",
    },
    {
        src: appleImg,
        alt: "лого apple",
    },
    {
        src: viewsonicImg,
        alt: "лого viewsonic",
    },
    {
        src: boschImg,
        alt: "лого bosch",
    },
    {
        src: hpImg,
        alt: "лого hp",
    },
    {
        src: acerImg,
        alt: "лого acer",
    },
    {
        src: sonyImg,
        alt: "лого sony",
    },
    {
        src: lenovoImg,
        alt: "лого lenovo",
    },
    {
        src: samsungImg,
        alt: "лого samsung",
    },
    {
        src: appleImg,
        alt: "лого apple",
    },
]

const swiperClass = ".brands-swiper";

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
    
    let swiper = new Swiper(swiperClass, {
        modules: [Pagination],
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        createElements: true,
        init: false,
        loop: true,

        spaceBetween: 16,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.3,
                spaceBetween: 16
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            // when window width is >= 1120px
            1120: {
                slidesPerView: 4,
                spaceBetween: 16
            }
        }
    });

    const cardsParent = document.querySelector(".brands-swiper > .swiper-wrapper");
    let swiperElement = document.querySelector(swiperClass);

    let cards = createBrandCards(brands);
    for (let i = 0; i < cards.length; i++) {
        let cardWrapper = document.createElement("div");
        cardWrapper.classList.add("swiper-slide");
        cards[i].classList.add("brands-swiper__card");
        cardWrapper.appendChild(cards[i]);
        cardsParent.appendChild(cardWrapper);
    }

    swiperElement.classList.remove("page__block--hidden");
    swiper.init();
}

let createBrandTiles = function(brands) {
    let cards = createBrandCards(brands);
    const cardsParent = document.querySelector(".brands-tiles");
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("brands-tiles__tile");
        cardsParent.appendChild(cards[i]);
    }
    cardsParent.classList.remove("page__block--hidden");

    let parentBlock = document.querySelector(".brands");
    let showAll = createShowAll("brands","brands-tiles");
    parentBlock.appendChild(showAll);
}

export let initializeBrandsSection = function() {
    let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (isMobile) {
        createSwiper(brands);
    } else {
        createBrandTiles(brands);
    }
} 

