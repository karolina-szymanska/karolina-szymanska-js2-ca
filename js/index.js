import { baseUrl } from "./settings/api.js";
import { renderNews } from "./components/renderNews.js";
import { searchNews } from "./components/searchNews.js";
import displayMessage from "./components/displayMessage.js";

const newsUrl = baseUrl + "articles";

(async function () {
  try {
    const response = await fetch(newsUrl);
    const results = await response.json();

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
