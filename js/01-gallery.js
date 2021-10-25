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
// Отримання url великого зображення 

galleryContainer.addEventListener('click', onSelectImage);

function onSelectImage(event) {
 if (!event.target.classList.contains('gallery__image')){
   return;
 }

 event.preventDefault();


 const imageInstance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
  onClose: () => {
document.removeEventListener('keyup', closeModal);
  },
});
imageInstance.show()

document.addEventListener('keyup', closeModal);

function closeModal(event){
if(event.key === 'Escape'){
  imageInstance.close();
  
}
 }
} 














