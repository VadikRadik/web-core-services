import 'swiper/swiper-bundle.min.css'
import Swiper, { Pagination } from 'swiper';

let services = [
    {
        service: "Диагностика",
        price: "Бесплатно",
        time: "30 мин",
    },
    {
        service: "Замена дисплея",
        price: "1 000 ₽",
        time: "30-120 мин",
    },
    {
        service: "Замена полифонического динамика",
        price: "1 000 ₽",
        time: "30-120 мин",
    },
    {
        service: "Тестирование с выдачей технического заключения",
        price: "1 000 ₽",
        time: "30-120 мин",
    },
    {
        service: "Замена программного обеспечения",
        price: "1 000 ₽",
        time: "30-120 мин",
    },
];

let createTableRows = function(services) {
    let cardTemplate = document.querySelector("#table-row-card-template").content;
    let result = [];

    for (let i = 0; i < services.length; i++) {
        let newCard = cardTemplate.querySelector(".table-row-card").cloneNode(true);
        newCard.querySelector(".table-row__column-service").textContent = services[i].service;
        let columns = newCard.querySelectorAll(".table-row__column");
        columns[0].textContent = services[i].price;
        columns[1].textContent = services[i].time;
        result.push(newCard);
    }
    
    return result;
}

let createServicesTable = function(services) {
    let tableHeader = document.querySelector(".prices__table-header");
    tableHeader.classList.remove("page__block--hidden");
    let cards = createTableRows(services);
    const cardsParent = document.querySelector(".prices__table");
    for (let i = 0; i < cards.length; i++) {
        cardsParent.appendChild(cards[i]);
        if (i < cards.length - 1) {
            let divider = document.createElement("div");
            divider.classList.add("table__divider");
            cardsParent.appendChild(divider);
        }
    }
    cardsParent.classList.remove("page__block--hidden");
}

let createPricesCards = function(services) {
    let cardTemplate = document.querySelector("#price-card-template").content;
    let result = [];

    for (let i = 0; i < services.length; i++) {
        let newCard = cardTemplate.querySelector(".price-card").cloneNode(true);
        let infos = newCard.querySelectorAll(".price-card__info");
        infos[0].textContent = services[i].service;
        infos[1].textContent = services[i].price;
        infos[2].textContent = services[i].time;
        result.push(newCard);
    }

    return result;
}

const swiperClass = ".prices-swiper";

let createSwiper = function(services) {
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
                slidesPerView: 1.2,
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

    const cardsParent = document.querySelector(".prices-swiper > .swiper-wrapper");
    let swiperElement = document.querySelector(swiperClass);

    let cards = createPricesCards(services);
    for (let i = 0; i < cards.length; i++) {
        let cardWrapper = document.createElement("div");
        cardWrapper.classList.add("swiper-slide");
        cards[i].classList.add("prices-swiper__card");
        cardWrapper.appendChild(cards[i]);
        cardsParent.appendChild(cardWrapper);
    }

    swiperElement.classList.remove("page__block--hidden");
    swiper.init();
}

export let initializePricesSection = function() {
    let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (isMobile) {
        createSwiper(services);
    } else {
        createServicesTable(services);
    }
} 
