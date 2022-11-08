import {createShowAll} from './show-all.js';

import 'swiper/swiper-bundle.min.css'
import Swiper, { Pagination } from 'swiper';

let kinds = [
    "Ремонт ноутбуков",
    "Ремонт планшетов",
    "Ремонт ПК",
    "Ремонт мониторов",
    "Ремонт смартфонов",
];

let createKindsCards = function(kinds) {
    let cardTemplate = document.querySelector("#kind-card-template").content;
    let result = [];

    for (let i = 0; i < kinds.length; i++) {
        let newCard = cardTemplate.querySelector(".kind-card").cloneNode(true);
        let cardLabel = newCard.querySelector(".kind-card__label");
        cardLabel.textContent = kinds[i];
        result.push(newCard);
    }
    
    return result;
}

let createKindTiles = function(kinds) {
    let cards = createKindsCards(kinds);
    const cardsParent = document.querySelector(".kinds-tiles");
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("kinds-tiles__tile");
        cardsParent.appendChild(cards[i]);
    }
    cardsParent.classList.remove("page__block--hidden");

    let parentBlock = document.querySelector(".kinds");
    let showAll = createShowAll("kinds","kinds-tiles");
    parentBlock.appendChild(showAll);
}

const swiperClass = ".kinds-swiper";

let createSwiper = function(kinds) {
    
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

    const cardsParent = document.querySelector(".kinds-swiper > .swiper-wrapper");
    let swiperElement = document.querySelector(swiperClass);

    let cards = createKindsCards(kinds);
    for (let i = 0; i < cards.length; i++) {
        let cardWrapper = document.createElement("div");
        cardWrapper.classList.add("swiper-slide");
        cards[i].classList.add("kinds-swiper__card");
        cardWrapper.appendChild(cards[i]);
        cardsParent.appendChild(cardWrapper);
    }

    swiperElement.classList.remove("page__block--hidden");
    swiper.init();
}

export let initializeKindsSection = function() {
    let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (isMobile) {
        createSwiper(kinds);
    } else {
        createKindTiles(kinds);
    }
} 
