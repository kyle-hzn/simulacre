const anchors = document.querySelectorAll(".title-menu");

var scroll = new SmoothScroll();

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (element) => {
    if (buttonContent.classList.contains("darkMode")) {
      document.body.style.overflow = "auto";
    } else document.body.style.overflow = "hidden";

    toggleSlider();
    element.preventDefault();
    setTimeout(
      () =>
        scroll.animateScroll(
          document.querySelector(`#${anchor.dataset.value}`)
        ),
      300
    );
  });
});
