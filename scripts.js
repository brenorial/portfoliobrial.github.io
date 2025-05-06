// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  // Future JavaScript functionality can be added here
});

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    let index = 0;
    const imagesContainer = carousel.querySelector(".carousel-images");
    const totalImages = imagesContainer.children.length;

    carousel.dataset.index = index;

    carousel.querySelector(".prev").addEventListener("click", () => {
      index = (index - 1 + totalImages) % totalImages;
      imagesContainer.style.transform = `translateX(-${index * 100}%)`;
      carousel.dataset.index = index;
    });

    carousel.querySelector(".next").addEventListener("click", () => {
      index = (index + 1) % totalImages;
      imagesContainer.style.transform = `translateX(-${index * 100}%)`;
      carousel.dataset.index = index;
    });
  });
});
