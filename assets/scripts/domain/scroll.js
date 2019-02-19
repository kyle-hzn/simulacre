const anchors = document.querySelectorAll(".title-menu");

var scroll = new SmoothScroll();

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (element) => {
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
