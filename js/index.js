import { baseUrl } from "./settings/api.js";
import { renderNews } from "./components/renderNews.js";
import { searchNews } from "./components/searchNews.js";
import displayMessage from "./components/displayMessage.js";

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
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Something went wrong on our side. Try refreshing the site.",
      ".container-news"
    );
  }
})();

const heartButtons = document.querySelectorAll(".single-news i.fa-heart");
console.log(heartButtons);
