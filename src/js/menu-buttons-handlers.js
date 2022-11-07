export let createHandlers = function() {
    let burgerMenuButton = document.querySelector(".upper-menu__menu-button");
    burgerMenuButton.addEventListener("click", function() {
        let sideMenu = document.querySelector(".side-menu");
        sideMenu.classList.add("side-menu--open");

        let fog = document.querySelector(".fog");
        fog.classList.add("fog--visible");
    });

    let sideMenuCloseButton = document.querySelector(".side-menu__close");
    sideMenuCloseButton.addEventListener("click", function(){
        let sideMenu = document.querySelector(".side-menu");
        sideMenu.classList.remove("side-menu--open");

        let fog = document.querySelector(".fog");
        fog.classList.remove("fog--visible");
    });

    window.addEventListener("resize", function(evt) {
        let openMenu = document.querySelector(".side-menu--open");
        if (openMenu) {
            openMenu.classList.remove("side-menu--open");
            let fog = document.querySelector(".fog");
            fog.classList.remove("fog--visible");
        }
    });
}