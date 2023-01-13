// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


// створення та рендер розмітки
 const generalGallery = document.querySelector('.gallery');

 function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
        .join('');
   
}
// підключення скрипту та стилів
//ініціалізація бібліотеки та створення і додав. елем
const photoMarkup = createGalleryMarkup(galleryItems);

generalGallery.insertAdjacentHTML('beforeend', photoMarkup);

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});
// в документації options додати підписи до зобр., підпис через 250
console.log(generalGallery);

