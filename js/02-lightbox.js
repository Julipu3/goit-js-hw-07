import { galleryItems } from './gallery-items.js';
// Change code below this line
 
const gallery = document.querySelector(".gallery");


function createMarkup() {

    const element = galleryItems.map(item => `

<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
    `).join(""); 

    gallery.innerHTML = element;
};

createMarkup()


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);




