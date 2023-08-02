import { galleryItems } from './gallery-items.js';
// Change code below this line
 
const gallery = document.querySelector(".gallery");

// gallery.addEventListener("click", handleClick);

function createMarkup() {

    const element = galleryItems.map(item => `

<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
    `).join("");

    gallery.innerHTML = element;
};

createMarkup()

gallery.addEventListener("click", modalClick);
function modalClick(e) {
e.preventDefault();
const target = e.target;
if (target === e.currentTarget) {
    return;
}
modalSlider();
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
});


console.log(galleryItems);
