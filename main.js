//ANIMATING THE MAIN IMAGE ON THE START PAGE

let myPanel = document.getElementById("panel");
let subpanel = document.getElementById("panel-container");

let mouseX, mouseY;

let transformAmount = 3;

function transformPanel(mouseEvent) {
  mouseX = mouseEvent.pageX;
  mouseY = mouseEvent.pageY;

  const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
  const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

  const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
  const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

  subpanel.style.transform =
    "perspective(400px) rotateY(" +
    percentX * transformAmount +
    "deg) rotateX(" +
    percentY * transformAmount +
    "deg)";
}

function handleMouseEnter() {
  setTimeout(() => {
    subpanel.style.transition = "";
  }, 100);
  subpanel.style.transition = "transform 0.1s";
}

function handleMouseLeave() {
  subpanel.style.transition = "transform 0.1s";
  setTimeout(() => {
    subpanel.style.transition = "";
  }, 100);

  subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}

myPanel.addEventListener("mousemove", transformPanel);
myPanel.addEventListener("mouseenter", handleMouseEnter);
myPanel.addEventListener("mouseleave", handleMouseLeave);

// DROP-DOWN MENU WHEN YOU PRESS MENU-HAMBURGER

const nav = document.querySelector("nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("menu-active");
});

//GSAP LOAD WEBSITE

// const tl = gsap.timeline();

// tl.fromTo(".first-name", 7, { xPercent: -150 }, { xPercent: 550 })
//   .fromTo(".last-name", 7, { xPercent: 150 }, { xPercent: -550 }, "<")
//   .to(".first", 1, { xPercent: -100 }, "-=5")
//   .to(".second", 1, { xPercent: 100 }, "<")
//   .to(".loader", 0.1, { yPercent: -100 }, "-=4")
//   .fromTo(
//     ".name-logo",
//     0.1,
//     { x: -100, opacity: 0 },
//     { x: 0, opacity: 1 },
//     "-=4"
//   )
//   .fromTo(
//     ".hamburger-menu",
//     0.1,
//     { x: 100, opacity: 0 },
//     { x: 0, opacity: 1 },
//     "-=4"
//   )
//   .fromTo(
//     ".menu-li",
//     0.3,
//     { y: -50, opacity: 0 },
//     { y: 0, opacity: 1, stagger: 0.1 },
//     "-=4"
//   )
//   .fromTo(".image", 0.8, { x: -300, opacity: 0 }, { x: 0, opacity: 1 }, "-=3.8")
//   .fromTo(
//     ".start-text > *",
//     0.8,
//     { x: 300, opacity: 0 },
//     { x: 0, opacity: 1, stagger: 0.2 },
//     "-=3.8"
//   )
//   .fromTo(
//     ".decoration-line:nth-child(2n+1)",
//     0.8,
//     { scaleY: 0 },
//     { scaleY: 1, transformOrigin: "bottom" },
//     "-=3.3"
//   )
//   .fromTo(
//     ".decoration-line:nth-child(2n)",
//     2,
//     { scaleY: 0 },
//     { scaleY: 1, transformOrigin: "top" },
//     "-=3.3"
//   );
