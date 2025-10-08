const photo_grid = document.querySelector(".photo-grid");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");
photo_grid.addEventListener("click", openModal);

function openModal(e) {
  console.log(e.target);
  const img = e.target;
  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");
  modalImage.alt = alt;
  const full = src.replace("sm", "full");
  modalImage.src = full;
  modal.showModal();
}

closeButton.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

let button = document.querySelector(".menu");
let menu = document.querySelector("nav");

button.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("hide");
}
