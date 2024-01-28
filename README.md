# PORTFOLIO

Opis projektu.

## Contents

- [Scrolling to the Top](#scrolling-to-the-top)
- [3D Image Rotation](#3d-image-rotation)
- [Drop-Down Menu](#drop-down-menu)
- [GSAP Load Website](#gsap-load-website)
- [Setting Decorating Line](#setting-decorating-line)
- [Send Mail](#send-mail)
- [Day Night Mode](#day-night-mode)
- [Scroll Up Button](#scroll-up-button)

## Scrolling to the Top

The following code provides a smooth scroll-to-top functionality when the page loads:

```
window.onload = function () {
  scrollToTop();
};

function scrollToTop() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 1);
  }
}

```

## 3D Image Rotation

This section includes code for a 3D image rotation effect. It captures mouse movements and applies a transformation to create a dynamic visual experience:

```
let myPanel = document.getElementById("panel");
let subpanel = document.getElementById("panel-container");

const projectPanel = document.querySelectorAll(".panel-project");

let mouseX, mouseY;
let transformAmount = 3;

function transformPanel(panel, subpanel, mouseEvent) {
  mouseX = mouseEvent.pageX;
  mouseY = mouseEvent.pageY;

  const rect = panel.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2 + window.scrollX;
  const centerY = rect.top + rect.height / 2 + window.scrollY;

  // Użyj wymiarów obrazu zamiast kontenera
  const percentX = (mouseX - centerX) / (subpanel.clientWidth / 2);
  const percentY = -((mouseY - centerY) / (subpanel.clientHeight / 2));

  subpanel.style.transform =
    "perspective(400px) rotateY(" +
    percentX * transformAmount +
    "deg) rotateX(" +
    percentY * transformAmount +
    "deg)";
}

function handleMouseEnter(panel, subpanel) {
  setTimeout(() => {
    subpanel.style.transition = "";
  }, 100);
  subpanel.style.transition = "transform 0.1s";
}

function handleMouseLeave(panel, subpanel) {
  subpanel.style.transition = "transform 0.1s";
  setTimeout(() => {
    subpanel.style.transition = "";
  }, 100);

  subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}

myPanel.addEventListener("mousemove", (event) =>
  transformPanel(myPanel, subpanel, event)
);
myPanel.addEventListener("mouseenter", () =>
  handleMouseEnter(myPanel, subpanel)
);
myPanel.addEventListener("mouseleave", () =>
  handleMouseLeave(myPanel, subpanel)
);

projectPanel.forEach((el) => {
  const projectSubpanel = el.querySelector(".project-img");
  el.addEventListener("mousemove", (event) =>
    transformPanel(el, projectSubpanel, event)
  );
  el.addEventListener("mouseenter", () =>
    handleMouseEnter(el, projectSubpanel)
  );
  el.addEventListener("mouseleave", () =>
    handleMouseLeave(el, projectSubpanel)
  );
});
```
