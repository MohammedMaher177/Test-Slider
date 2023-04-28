let myImages = Array.from(document.querySelectorAll(".myImages"));
let currentIndex;
let mainImg = document.querySelector("#mainImg");

let webwell = document.querySelector(".webwell");

let layer = document.querySelector(".layer img");

let slider = Array.from(document.querySelectorAll("#slider img"));
let tagroba = Array.from(document.querySelectorAll(".slider"));
let closeLayer = document.querySelector("#closeLayer");
let nextLayer = document.querySelector("#nextLayer");
let prevLayer = document.querySelector("#prevLayer");

closeLayer.addEventListener("click", close);
nextLayer.addEventListener("click", nextSLider);
prevLayer.addEventListener("click", prevSLider);
// slider 1
for (let i = 0; i < myImages.length; i++) {
  myImages[i].addEventListener("click", (e) => {
    mainImg.setAttribute("src", e.target.getAttribute("src"));
  });
}

// slider 2

for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("click", (e) => {
    webwell.classList.replace("d-none", "d-flex");
    layer.setAttribute("src", e.target.getAttribute("src"));
    currentIndex = slider.indexOf(e.target);
  });
}
for (let i = 0; i < tagroba.length; i++) {
  tagroba[i].addEventListener("click", (e) => {
    webwell.classList.replace("d-none", "d-flex");
    layer.setAttribute("src", e.target.getAttribute("src"));
    currentIndex = slider.indexOf(e.target);
  });
}
function close() {
  webwell.classList.replace("d-flex", "d-none");
}

function nextSLider() {
  currentIndex++;
  if (currentIndex >= slider.length - 1) currentIndex = 0;
  let imgUrl = slider[currentIndex].getAttribute("src");
  layer.setAttribute("src", imgUrl);
}

function prevSLider() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider.length - 2;
  }
  let imgUrl = slider[currentIndex].getAttribute("src");
  layer.setAttribute("src", imgUrl);
}

document.addEventListener("keyup", (e) => {
  if (webwell.classList.contains("d-flex")) {
    switch (e.key) {
      case "Escape":
        close();
        break;
      case "ArrowRight":
        nextSLider();
        break;
      case "ArrowLeft":
        prevSLider();
        break;
    }
  }
});
