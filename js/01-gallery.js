import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", handleClick);

function createMarkup() {

    const element = galleryItems.map(item => `
    <li class="gallery__item"> 
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      target="_parent"
    />
  </a>
</li>
    `).join("");

    gallery.innerHTML = element;
};

createMarkup()

function handleClick(event) {
    event.preventDefault();

    for (let i=0; i < galleryItems.length; i++) {
        if (event.target.nodeName === "IMG") {
            const instance = basicLightbox.create(`<img scr="${item.original}" width="800" height="600">`);
            instance.show()
            document.body.addEventListener("keydown", (e) => {
                if (e.code === "Escape") {
                    instance.close();
                }
            });
        }
    }
}
console.log(galleryItems);

