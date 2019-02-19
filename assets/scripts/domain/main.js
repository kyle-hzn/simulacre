const buttonContent = document.querySelector(".content-button");
const menuBurger = document.querySelector(".burger");
const sideMenu = document.querySelector(".side-menu");

buttonContent.addEventListener("click", () => {
  if (buttonContent.classList.contains("darkMode")) {
    document.body.style.overflow = "auto";
  } else document.body.style.overflow = "hidden";

  toggleSlider();
});

const toggleSlider = () => {
  buttonContent.classList.toggle("darkMode");
  menuBurger.classList.toggle("burgeractive");
  sideMenu.classList.toggle("active");
};
