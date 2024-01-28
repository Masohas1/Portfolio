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

## Drop-Down Menu

This section includes code for a drop-down menu that activates when clicking on a hamburger icon:

```
const nav = document.querySelector("nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("menu-active");
});
```

## Setting Decorating Line

This section adjusts the height of decorative lines on the page to match the height of the body:

```

const decorationLines = document.querySelectorAll(".decoration-line");

decorationLines.forEach(function (line) {
  line.style.height = document.body.clientHeight + "px";
});
```

## Send Mail

In this code, AJAX has been used, allowing the email to be sent without refreshing the page. As a result, the code responsible for triggering the "loader" is not executed again

```
function sendEmail() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let textarea = document.getElementById("textarea");
  const response = document.getElementById("response");

  fetch("form.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "name=" +
      encodeURIComponent(name.value) +
      "&email=" +
      encodeURIComponent(email.value) +
      "&textarea=" +
      encodeURIComponent(textarea.value),
  })
    .then((response) => response.text())
    .then((data) => {
      response.innerHTML = data;
      response.classList.add("active-response");
      name.value = "";
      email.value = "";
      textarea.value = "";
    })
    .catch((error) => console.error("Błąd: ", error));
}
```

## Day Night Mode

This section includes code for toggling between day and night modes, adjusting the color scheme of the website:

```
const btnNightDay = document.querySelector(".day-night-mode");
const iconNightDay = document.querySelector(".day-night-mode i");
let growColor = JSON.parse(
  localStorage.getItem("localStorageGrowColor") || true
);

const saveGrowColor = (grow) => {
  localStorage.setItem("localStorageGrowColor", grow);
};

const changeColorWebsite = () => {
  const body = document.querySelector("body");
  if (growColor) {
    // DAY
    body.style.setProperty("--background-color", "#fff");
    body.style.setProperty("--font-color", "#000");
    body.style.setProperty("--footer-color", "#ebebeb");
    body.style.setProperty("--animation-color-font", "#000");
    iconNightDay.classList = "";
    iconNightDay.classList.add("fas", "fa-solid", "fa-moon");
    saveGrowColor(growColor);
    growColor = false;
  } else {
    // NIGHT
    body.style.setProperty("--background-color", "#1b1a1a");
    body.style.setProperty("--font-color", "#cecece");
    body.style.setProperty("--footer-color", "#2c2b2b");
    body.style.setProperty("--animation-color-font", "#fff");
    iconNightDay.classList = "";
    iconNightDay.classList.add("fas", "fa-solid", "fa-sun");
    saveGrowColor(growColor);
    growColor = true;
  }
};

changeColorWebsite();
btnNightDay.addEventListener("click", changeColorWebsite);
```
