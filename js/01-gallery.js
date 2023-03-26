import { galleryItems } from "./gallery-items.js";
// Change code below this line



const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `)
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", onClickImg);

function onClickImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
  modal.show();
}
