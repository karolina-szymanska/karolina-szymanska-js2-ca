import { renderNews } from "./renderNews.js";

export function searchNews(news) {
  const searchInput = document.querySelector(".form-control");

  function searchTitles(event) {
    const searchedValue = event.target.value.trim().toLowerCase();

    const filteredNews = news.filter(function (item) {
      if (item.title.toLowerCase().includes(searchedValue)) {
        return true;
      }
    });

    renderNews(filteredNews);
  }

  searchInput.addEventListener("keyup", searchTitles);
}
