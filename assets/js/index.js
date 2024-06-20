const hamburgerOpen = document.getElementById("hamburger-menu");
const hamburgerClose = document.getElementById("hamburger-menu-close");

function openMenu() {
    const mobileLinks = document.getElementById("mobile-links");
    mobileLinks.style.display = "flex";
}

function closeMenu() {
    const mobileLinks = document.getElementById("mobile-links");
    mobileLinks.style.display = "none"
}

hamburgerOpen.addEventListener("click", openMenu);
hamburgerClose.addEventListener("click", closeMenu);