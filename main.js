// scrolling to the top of the screen

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

// 3d image rotation
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
// DROP-DOWN MENU WHEN YOU PRESS MENU-HAMBURGER

const nav = document.querySelector("nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("menu-active");
});

//GSAP LOAD WEBSITE

const tl = gsap.timeline({
  onUpdate: () => {
    if (tl.progress() >= 0.7) {
      document.body.style.overflow = "visible";
    }
  },
});
// ODKOMENTOWAC W BODY OVERFLOW HIDDEN
tl.fromTo(".first-name", 7, { xPercent: -150 }, { xPercent: 550 })
  .fromTo(".last-name", 7, { xPercent: 150 }, { xPercent: -550 }, "<")
  .to(".first", 1, { xPercent: -100 }, "-=5")
  .to(".second", 1, { xPercent: 100 }, "<")
  .to(".loader", 0.1, { yPercent: -100 }, "-=4")
  .fromTo(
    ".name-logo",
    0.1,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1 },
    "-=4"
  )
  .fromTo(
    ".hamburger-menu",
    0.1,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1 },
    "-=4"
  )
  .fromTo(
    ".menu-li",
    0.3,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.1 },
    "-=4"
  )
  .fromTo(".image", 0.8, { x: -300, opacity: 0 }, { x: 0, opacity: 1 }, "-=3.8")
  .fromTo(
    ".start-text > *",
    0.8,
    { x: 300, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.2 },
    "-=3.8"
  )
  .fromTo(
    ".decoration-line:nth-child(2n+1)",
    0.8,
    { scaleY: 0 },
    { scaleY: 1, transformOrigin: "bottom" },
    "-=3.3"
  )
  .fromTo(
    ".decoration-line:nth-child(2n)",
    2,
    { scaleY: 0 },
    { scaleY: 1, transformOrigin: "top" },
    "-=3.3"
  );

// setting the decorating line for the entire body
const decorationLines = document.querySelectorAll(".decoration-line");

decorationLines.forEach(function (line) {
  line.style.height = document.body.clientHeight + "px";
});

// SEND MAIL
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

// DAY NIGHT MODE

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

// SCROLL UP BUTTON
const scrollUpBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 768 && window.scrollY > window.innerHeight * 0.3)
    scrollUpBtn.style.display = "flex";
  else scrollUpBtn.style.display = "none";
});
