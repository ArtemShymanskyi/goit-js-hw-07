import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');
const imgMarkUp = renderGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imgMarkUp);




function renderGallery(items) {
  return items
    .map(item => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
             </a>
        </div>`;
    })
    .join(' ');
}













