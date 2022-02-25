/* this selects the hamburger menu button */
const hamburgerBtn = document.querySelector("button.mobile-menu-button");

/* this is the mobile menu */
const mobileMenu = document.querySelector(".mobile-menu");

/* mobile button event */
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle("hidden");
});