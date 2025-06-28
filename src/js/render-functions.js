// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more-btn");

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250, 
    captionPosition: 'bottom', 
    captionsData: 'alt'});

export default function createGallery(images) {
    const createMarkup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="image-box">
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" width="300">
        </a>
        <div class="image-stats">
            <div class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${likes}</span>
            </div>
            <div class="image-stat">
                <span class="label">Views</span>
                <span class="value">${views}</span>
            </div>
            <div class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${comments}</span>
            </div>
            <div class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${downloads}</span>
            </div>
        </div>
    </li>`).join("");

    gallery.insertAdjacentHTML("beforeend", createMarkup);
    lightbox.refresh();
};

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}

export function showLoadMoreButton () {
    loadMoreBtn.classList.remove("hidden");
}

export function hideLoadMoreButton () {
    loadMoreBtn.classList.add("hidden")
}

