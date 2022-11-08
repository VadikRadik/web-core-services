export let createHandlers = function() {
    // side menu open and close handlers
    let burgerMenuButton = document.querySelector(".upper-menu__menu-button");
    burgerMenuButton.addEventListener("click", function() {
        let sideMenu = document.querySelector(".side-menu");
        sideMenu.classList.add("side-menu--open");

        let fog = document.querySelector(".fog-menu");
        fog.classList.add("fog-menu--visible");
    });

    let sideMenuCloseHandler = function(evt) {
        let openMenu = document.querySelector(".side-menu--open");
        if (openMenu) {
            openMenu.classList.remove("side-menu--open");
            let fog = document.querySelector(".fog-menu");
            fog.classList.remove("fog-menu--visible");
        }
    }

    let sideMenuCloseButton = document.querySelector(".side-menu__close");
    let fogMenu = document.querySelector(".fog-menu");

    sideMenuCloseButton.addEventListener("click", sideMenuCloseHandler);
    window.addEventListener("resize", sideMenuCloseHandler);
    fogMenu.addEventListener("click", sideMenuCloseHandler);

    // call popup open and close handlers
    let callButtons = document.querySelectorAll(".communications__call");
    for (let i = 0; i < callButtons.length; i++) {
        callButtons[i].addEventListener("click", function() {
            let modalContainer = document.querySelector(".modal-container");
            modalContainer.classList.add("modal-container--visible");

            let modalCall = document.querySelector(".modal-call");
            modalCall.classList.add("modal-call--open");

            let fog = document.querySelector(".fog-modal");
            fog.classList.add("fog-modal--visible");
        });
    }

    let callCloseHandler = function() {
        let isModalCallOpen = document.querySelector(".modal-call--open") !== null;
        if (!isModalCallOpen) {
            return;
        }

        let modalContainer = document.querySelector(".modal-container");
        modalContainer.classList.remove("modal-container--visible");

        let modalCall = document.querySelector(".modal-call");
        modalCall.classList.remove("modal-call--open");

        let fog = document.querySelector(".fog-modal");
        fog.classList.remove("fog-modal--visible");
    }

    let modalCallCloseButton = document.querySelector(".modal-call__button-close");
    modalCallCloseButton.addEventListener("click", callCloseHandler);
    let modalFog = document.querySelector(".fog-modal");
    modalFog.addEventListener("click", callCloseHandler);

    // feedback popup open and close handlers
    let feedbackButtons = document.querySelectorAll(".communications__chat");
    for (let i = 0; i < feedbackButtons.length; i++) {
        feedbackButtons[i].addEventListener("click", function() {
            let modalContainer = document.querySelector(".modal-container");
            modalContainer.classList.add("modal-container--visible");

            let modalCall = document.querySelector(".modal-feedback");
            modalCall.classList.add("modal-feedback--open");

            let fog = document.querySelector(".fog-modal");
            fog.classList.add("fog-modal--visible");
        });
    }

    let feedbackModalCloseHandler = function() {
        let isModalFeedbackOpen = document.querySelector(".modal-feedback--open") !== null;
        if (!isModalFeedbackOpen) {
            return;
        }

        let modalContainer = document.querySelector(".modal-container");
        modalContainer.classList.remove("modal-container--visible");

        let modalFeedback = document.querySelector(".modal-feedback");
        modalFeedback.classList.remove("modal-feedback--open");

        let fog = document.querySelector(".fog-modal");
        fog.classList.remove("fog-modal--visible");
    }

    let modaFeedbackCloseButton = document.querySelector(".modal-feedback__button-close");
    modaFeedbackCloseButton.addEventListener("click", feedbackModalCloseHandler);
    modalFog.addEventListener("click", feedbackModalCloseHandler);
}