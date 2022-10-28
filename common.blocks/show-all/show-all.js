let createShowAll = function(parentBlockClass, blockClassToShow) {
    let showAllTemplate = document.querySelector("#show-all-template").content;

    let showAll = showAllTemplate.querySelector(".show-all").cloneNode(true);
    showAll.classList.add(parentBlockClass + "__show-all");

    // set collapse state
    let showedBlock = document.querySelector("." + blockClassToShow);
    showAll.style.transform = "translateY(" + showedBlock.clientHeight + "px)";

    showAll.isCollapsed = true;
    showAll.addEventListener("click", function() {
        if (showAll.isCollapsed) {
            showAll.style.transform = "translateY(" + showedBlock.scrollHeight + "px)";
            showedBlock.classList.add(blockClassToShow + "--expanded");
            // arrow flip
            showAll.children[0].classList.add("show-all__arrow--expanded");
            // change inner text
            showAll.children[1].classList.add("page__block--hidden");
            showAll.children[2].classList.remove("page__block--hidden");

            showAll.isCollapsed = false;
        } else {
            showAll.style.transform = "translateY(" + showedBlock.clientHeight + "px)";
            showedBlock.classList.remove(blockClassToShow + "--expanded");
            // arrow flip
            showAll.children[0].classList.remove("show-all__arrow--expanded");
            // change inner text
            showAll.children[1].classList.remove("page__block--hidden");
            showAll.children[2].classList.add("page__block--hidden");

            showAll.isCollapsed = true;
        }
    });

    // on resize position fix
    const onResizeScrollHeightLossCompensation = 16;
    window.addEventListener('resize', function(event) {
        if (!showAll.isCollapsed) {
            showAll.style.transform = "translateY(" + Number(showedBlock.scrollHeight + onResizeScrollHeightLossCompensation) + "px)";
        }
    }, true);

    return showAll;
}
