import { getExistingFavourites } from "./utils/favouritesFunctions.js";
// import displayMessage from "./components/displayMessage.js";

const containerFavourites = document.querySelector(".container-favourites");
const alertMessage = document.querySelector(".alert-secondary");

(function () {
  const favourites = getExistingFavourites();
  const clearButton = document.querySelector("#clear-button");

  if (favourites.length === 0) {
    alertMessage.style.display = "block";
    clearButton.style.display = "none";
  } else {
    clearButton.style.display = "block";
  }

  favourites.forEach(function (favourite) {
    containerFavourites.innerHTML += `<div class="col sm-12 md-4">
                                        <div class="card">
                                          <div class="card-header">${favourite.title}</div>
                                          <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                              <p>${favourite.summary}</p>
                                              <footer class="blockquote-footer">${favourite.author}</footer>
                                              <i class="fa-solid fa-heart" data-id="${favourite.id}" data-title="${favourite.title}" data-summary="${favourite.summary}" data-author="${favourite.author}"></i>
                                            </blockquote>
                                          </div>
                                        </div>
                                      </div>`;
  });

  clearButton.addEventListener("click", clearLocalStorage);
})();

function clearLocalStorage() {
  localStorage.clear();
  containerFavourites.innerHTML = "";
  alertMessage.style.display = "block";
  this.style.display = "none";
}
