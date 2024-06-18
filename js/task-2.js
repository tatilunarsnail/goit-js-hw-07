const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// =====================Option1=================================
// const galleryList = document.querySelector(".gallery");

// function createGalleryMarkup(array) {

//   const markup = array.map(({ url, alt }) => {

//     const galleryListItem = document.createElement("li");
//     const galleryImage = document.createElement("img");

//     galleryImage.src = url;
//     galleryImage.alt = alt;
//     galleryImage.style.width = "360px";

//     galleryListItem.append(galleryImage);

//     return galleryListItem;
//   });

//   galleryList.append(...markup);
// }

// createGalleryMarkup(images);

// =====================Option2=================================

const galleryList = document.querySelector(".gallery");

function createGalletyMarkup(array) {

  return array.map(({ url, alt }) =>
    `<li>
        <img src = ${url} alt = ${alt} width = 360px />
    </li>`).join("");
}

galleryList.insertAdjacentHTML('afterbegin', createGalletyMarkup(images));
