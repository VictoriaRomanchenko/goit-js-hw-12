import getImagesByQuery from "./js/pixabay-api";
import createGallery, { clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more-btn");

let q = '';
let page = 1;
let totalHits = 0;
let loadedHits = 0;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    q = event.target.elements['search-text'].value.trim();
    if (q === "") {
        iziToast.error({
                    message: "Please, fill in the field!",
                    closeOnClick: true,
                    position: "topRight",
                });
        
        return;
    }
    page = 1;
    loadedHits = 0;
    clearGallery()
    showLoader()
    await loadGallery()
})

loadMoreBtn.addEventListener("click", async () => {
    showLoader();
    await loadGallery();
    const imageBoxes = document.querySelectorAll('.image-box')
    if (imageBoxes.length) {
        const firstBox = imageBoxes[0];
        const height = firstBox.getBoundingClientRect().height;
        console.log(height);
        
        window.scrollBy({
            top: height * 2,
            behavior: "smooth",
        });
    }
}
)

const loadGallery = async () => {
    try {
        hideLoadMoreButton();
        const response = await getImagesByQuery(q, page);
        if (page === 1) {
            totalHits = response.totalHits;
            if (!response.hits.length) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                closeOnClick: true,
                position: "topRight",
            });
            return;
            }
        }

        createGallery(response.hits);

        page++;
        loadedHits += response.hits.length;

        if(loadedHits >= totalHits) {
            hideLoadMoreButton();
            iziToast.error({
            message: "We're sorry, but you've reached the end of search results.",
            closeOnClick: true,
            position: "topRight",
        });
        } else {
            showLoadMoreButton();
        }
        
    }
    catch (error) {
        iziToast.error({
            message: `${error}`
        })
    } finally {
        hideLoader();
    }
}
