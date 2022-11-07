export let createShowAll = function(parentBlockClass, blockClassToShow) {
    let showAllTemplate = document.querySelector("#show-all-template").content;

    let showAll = showAllTemplate.querySelector(".show-all").cloneNode(true);
    showAll.classList.add(parentBlockClass + "__show-all");

    // set collapse state
    let showedBlock = document.querySelector("." + blockClassToShow);

    showAll.isCollapsed = true;
    showAll.addEventListener("click", function() {
        if (showAll.isCollapsed) {
            showedBlock.classList.add(blockClassToShow + "--expanded");
            // arrow flip
            showAll.children[0].classList.add("show-all__arrow--expanded");
            // change inner text
            showAll.children[1].classList.add("page__block--hidden");
            showAll.children[2].classList.remove("page__block--hidden");

            showAll.isCollapsed = false;
        } else {
            showedBlock.classList.remove(blockClassToShow + "--expanded");
            // arrow flip
            showAll.children[0].classList.remove("show-all__arrow--expanded");
            // change inner text
            showAll.children[1].classList.remove("page__block--hidden");
            showAll.children[2].classList.add("page__block--hidden");

            showAll.isCollapsed = true;
        }
    });

    return showAll;
}
