/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
// ============MENU SHOW ============
// Validate if constants exist
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
// ============MENU HIDDEN ============
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== DARK LIGHT THEME ===============*/
