"use strict";

// menu burger
const burgerButton = document.querySelector(".menu-button"),
      burgerMenu = document.querySelector(".nav-menu");

if (burgerButton) {
    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("menu-button--active");
        burgerMenu.classList.toggle("nav-menu--active");
        document.body.classList.toggle("body--lock")
    })
}