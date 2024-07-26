const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

const scrollRevealOption2 = {
    distance: "1000px",
    origin: "bottom",
    duration: 100,
};

ScrollReveal().reveal(".form__container", {
    ...scrollRevealOption,
    origin: "right",
    delay: 250,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 750,
});
ScrollReveal().reveal(".header__links", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__links__buttons", {
    ...scrollRevealOption,
    delay: 1250,
});
ScrollReveal().reveal(".header__sub__title__container", {
    ...scrollRevealOption2,
    origin: "left",
});

