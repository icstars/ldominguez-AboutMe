let left = document.querySelector(".left");
let right = document.querySelector(".right");
let carousel = document.querySelector(".slider");
let translate = 0;

left.addEventListener("click", () => {
  if (translate < 0) {
    translate += 300;
    carousel.style.transform = "translateX(" + translate + "px)";
    console.log(translate);
  }
});

right.addEventListener("click", () => {
  if (translate > -600) {
    translate -= 300;
    carousel.style.transform = "translateX(" + translate + "px)";
    console.log(translate);
  }
});
