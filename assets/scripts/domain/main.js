console.log("working yeah");
const menuBurger = document.querySelector(".burger");
const sideMenu = document.querySelector(".side-menu");
const anchors = document.querySelectorAll(".title-menu");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    toggleSlider();
  });
});

menuBurger.addEventListener("click", () => {
  toggleSlider();
});

const toggleSlider = () => {
  menuBurger.classList.toggle("burgeractive");
  sideMenu.classList.toggle("active");
};
