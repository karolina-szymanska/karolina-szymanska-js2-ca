import { getExistingFavourites } from "./utils/favouritesFunctions.js";
import displayMessage from "./components/displayMessage.js";

(function () {
  const favourites = getExistingFavourites();
  const clearButton = document.querySelector("#clear-button");

  if (favourites.length === 0) {
    displayMessage("message", "Add your favourites", ".container-favourites");
    clearButton.style.display = "none";
  }

  const containerFavourites = document.querySelector(".container-favourites");

  favourites.forEach(function (favourite) {
    containerFavourites.innerHTML += `<div class="single-news">
                                        <h4>${favourite.title}</h4>
                                        <p>${favourite.summary}</p>
                                        <p class="author">-- ${favourite.author}</p>
                                        <i class="fa-solid fa-heart"></i>
                                    </div>`;
  });

  clearButton.addEventListener("click", clearLocalStorage);
})();

function clearLocalStorage() {
  localStorage.clear();
}
