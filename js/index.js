import { baseUrl } from "./settings/api.js";
import { renderNews } from "./components/renderNews.js";
import { searchNews } from "./components/searchNews.js";
import displayMessage from "./components/displayMessage.js";
import { getExistingFavourites } from "./utils/favouritesFunctions.js";

const newsUrl = baseUrl + "articles";

// const myVariable = "hello there";
// localStorage.setItem("var1", myVariable);
// const variable1 = localStorage.getItem("var1");
// console.log(variable1);

// const colours = ["green", "yellow", "orange"];
// localStorage.setItem("savedColours", JSON.stringify(colours));
// const gottenColours = localStorage.getItem("savedColours");
// const parsedColours = JSON.parse(gottenColours);
// console.log(parsedColours);

(async function () {
  try {
    const response = await fetch(newsUrl);
    const results = await response.json();
    // console.table(results);

    renderNews(results);
    searchNews(results);

    const heartButtons = document.querySelectorAll(".single-news i.fa-heart");

    heartButtons.forEach(function (button) {
      button.addEventListener("click", handleClick);
    });
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Something went wrong on our side. Try refreshing the site.",
      ".container-news"
    );
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
