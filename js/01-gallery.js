import { galleryItems } from './gallery-items.js';
const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"  width = 100%/>
          </a>
        </li>
      `;
    })
    .join("");
}

galleryRef.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }
  const { source, alt } = event.target.dataset;
  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${source}" alt="${alt}" />
    </div>
  `);
  instance.show();
}

console.log(galleryItems);
