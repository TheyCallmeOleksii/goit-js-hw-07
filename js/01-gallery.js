import { galleryItems } from "./gallery-items.js";
// Change code below this line

let instance;
const ulEl = document.querySelector(".gallery");
const newElImg = createLi(galleryItems);

ulEl.insertAdjacentHTML("beforeend", newElImg);
const refItem = document.querySelectorAll(".gallery__link");

ulEl.addEventListener("click", onImgClick);

function createLi(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onImgClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  event.preventDefault();

  const dataSource = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${dataSource}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", pressEsc);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", pressEsc);
      },
    }
  );

  instance.show();

  window.addEventListener("keydown", pressEsc);

  function pressEsc(event) {
    if (event.key !== "Escape") {
      return;
    }
    instance.close();
    window.removeEventListener("keydown", pressEsc);
  }
}
