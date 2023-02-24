import { baseUrl } from "./settings/api.js";
import { renderNews } from "./components/renderNews.js";
import { searchNews } from "./components/searchNews.js";
// import displayMessage from "./components/displayMessage.js";
import { getExistingFavourites } from "./utils/favouritesFunctions.js";

const newsUrl = baseUrl + "articles";
const containerNews = document.querySelector(".container-news");
const alertError = document.querySelector(".alert-danger");

(async function () {
  try {
    const response = await fetch(newsUrl);
    const results = await response.json();
    // console.table(results);

    renderNews(results);
    searchNews(results);

    const heartButtons = document.querySelectorAll("i.fa-heart");

    heartButtons.forEach(function (button) {
      button.addEventListener("click", handleClick);
    });
  } catch (error) {
    console.log(error);
    containerNews.innerHTML = "";
    alertError.style.display = "block";
  }
})();

function handleClick() {
  this.classList.toggle("fa-regular");
  this.classList.toggle("fa-solid");

  const id = this.dataset.id;
  const title = this.dataset.title;
  const summary = this.dataset.summary;
  const author = this.dataset.author;

  const currentFavourites = getExistingFavourites();

  const newsExists = currentFavourites.find(function (existingNews) {
    //return the object if the existingNews´id is equal to the id I´ve clicked on:
    return existingNews.id === id;
  });

  if (!newsExists) {
    const newsToAdd = {
      id: id,
      title: title,
      summary: summary,
      author: author,
    };
    currentFavourites.push(newsToAdd);
    saveFavourites(currentFavourites);
  } else {
    const newFavourites = currentFavourites.filter(
      (existingNews) => existingNews.id !== id
    );
    saveFavourites(newFavourites);
  }
}

function saveFavourites(favouritesToSave) {
  localStorage.setItem("favourites", JSON.stringify(favouritesToSave));
}
