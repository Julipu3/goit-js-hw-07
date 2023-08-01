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

        if (event.target.nodeName === "IMG") {
            const instance = basicLightbox.create(`<img src="${item.original}" width="800" height="600">`);
            instance.show()

        function keydownHandler(e) {
            if (e.code === "Escape") {
                instance.close();
                document.body.removeEventListener("keydown", keydownHandler);
            }
        }

        document.body.addEventListener("keydown", keydownHandler);
    }
}

document.body.addEventListener("click", clickHandler);
 
console.log(galleryItems);

