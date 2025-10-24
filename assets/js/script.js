const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

const images = document.querySelectorAll(".home-image");
const navContainer = document.querySelector(".nav-container");
const totalImages = images.length;
let imageIndex = 0;
let interval;

for (let i = 0; i < totalImages; i++) {
    const button = document.createElement("button");
    button.classList.add("nav-btn");
    navContainer.appendChild(button);
}

const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        imageIndex = index;
        updateSlider();
        resetInterval();
    });
});

function updateSlider() {
    images.forEach(image => {
        image.classList.remove("image-active");
    });
    buttons.forEach(button => {
        button.classList.remove("btn-active");
    });
    images[imageIndex].classList.add("image-active");
    buttons[imageIndex].classList.add("btn-active");
}

function nextImage() {
    imageIndex++;
    if (imageIndex > totalImages - 1) {
        imageIndex = 0;
    }
    updateSlider();
}

function autoPlay() {
    interval = setInterval(nextImage, 3000);
}

function resetInterval() {
    clearInterval(interval);
    autoPlay();
}

updateSlider();
autoPlay();