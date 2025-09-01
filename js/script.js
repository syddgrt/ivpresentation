let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.getElementById("total-slides").textContent = totalSlides;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");
  document.getElementById("current-slide").textContent = currentSlide + 1;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight" || e.key === " ") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    previousSlide();
  }
});

// Optional auto-advance
// setInterval(nextSlide, 30000);
