import { galleryItems } from "./gallery-items.js";
// import SimpleLightbox from 'simplelightbox';

const ulEl = document.querySelector(".gallery");
const newElImg = createLi(galleryItems);

ulEl.insertAdjacentHTML("beforeend", newElImg);

// SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
  captionsData: "alt",
});

function createLi(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join("");
}
