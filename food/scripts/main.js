import { foodItems } from "./fooditems.js";

const reviews = document.querySelector(".reviews-container");

const reviewTitle = document.querySelector(".review-title");

// --- McDonald's Reviews ---

function displayMcdReviews(menuType) {
  let mcdItems = foodItems.filter((item) => item.restaurant === "mcd");

  if (menuType === "breakfast") {
    mcdItems = mcdItems.filter((item) => item.menu === "breakfast");
  } else if (menuType === "lunch") {
    mcdItems = mcdItems.filter((item) => item.menu === "lunch");
  }

  mcdItems.sort((a, b) => b.rating - a.rating);
  const topFive = mcdItems.slice(0, 5);
  let reviewsHTML = topFive.map((item) => {
    return `<div class="review-card">
      <img src="${item.image}" alt="${item.name}" class="review-image" height="300" width="300"/>
      <div>
        <h3 class="review-name">${item.name}</h3>
        <p class="review-text">${item.review}</p>
        <p class="review-rating">Rating: ${item.rating}/10</p>
      </div>
    </div>`;
  });
  reviews.innerHTML = reviewsHTML.join("");
}

if (reviewTitle.textContent.includes("McDonalds")) {
  displayMcdReviews();
}

// --- Burger King Carousel ---

let currentBKIndex = 0;
let allbkItems = foodItems.filter((item) => item.restaurant === "bk");
let currentBkItems = [...allbkItems];
let currentBKmenuType = "both";

function displayBKCarousel(menuType) {
  currentBkItems = [...allbkItems];
  if (menuType === "breakfast") {
    currentBkItems = currentBkItems.filter((item) => item.menu === "breakfast");
  } else if (menuType === "lunch") {
    currentBkItems = currentBkItems.filter((item) => item.menu === "lunch");
  }

  currentBkItems.sort((a, b) => b.rating - a.rating);
  let reviewCarousel = document.querySelector(".review-card");
  let item = currentBkItems[currentBKIndex];
  reviewCarousel.innerHTML = `<img src="${item.image}" alt="${item.name}" class="review-image" height="auto" width="312"/>
    <div>
    <h3 class="review-name">${item.name}</h3>
    <p class="review-text">${item.review}</p>
    <p class="review-rating">Rating: ${item.rating}/10</p>
    </div>`;
}

let breakfastBtn = document.getElementById("breakfast-btn");
let lunchBtn = document.getElementById("lunch-btn");
let allBtn = document.getElementById("all-btn");

breakfastBtn.addEventListener("click", () => {
  if (reviewTitle.textContent.includes("McDonalds")) {
    displayMcdReviews("breakfast");
  } else if (reviewTitle.textContent.includes("Burger King")) {
    currentBKmenuType = "breakfast";
    currentBKIndex = 0;
    displayBKCarousel(currentBKmenuType);
  }
});

lunchBtn.addEventListener("click", () => {
  if (reviewTitle.textContent.includes("McDonalds")) {
    displayMcdReviews("lunch");
  } else if (reviewTitle.textContent.includes("Burger King")) {
    currentBKIndex = 0;
    currentBKmenuType = "lunch";
    displayBKCarousel(currentBKmenuType);
  }
});

allBtn.addEventListener("click", () => {
  if (reviewTitle.textContent.includes("McDonalds")) {
    displayMcdReviews();
  } else if (reviewTitle.textContent.includes("Burger King")) {
    currentBKIndex = 0;
    currentBKmenuType = "both";
    displayBKCarousel(currentBKmenuType);
  }
});

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentBKIndex === 0) {
      return;
    } else {
      currentBKIndex--;
    }

    displayBKCarousel(currentBKmenuType);
  });

  nextBtn.addEventListener("click", () => {
    if (currentBKIndex === currentBkItems.length - 1) {
      return;
    } else currentBKIndex++;

    displayBKCarousel(currentBKmenuType);
  });
}

if (reviewTitle.textContent.includes("Burger King")) {
  displayBKCarousel();
}

//mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
