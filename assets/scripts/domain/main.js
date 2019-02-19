const buttonContent = document.querySelector(".content-button");
const menuBurger = document.querySelector(".burger");
const sideMenu = document.querySelector(".side-menu");

buttonContent.addEventListener("click", () => {
  toggleSlider();
});

const toggleSlider = () => {
  buttonContent.classList.toggle("darkMode");
  menuBurger.classList.toggle("burgeractive");
  sideMenu.classList.toggle("active");
};
