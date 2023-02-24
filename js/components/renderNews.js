import { getExistingFavourites } from "../utils/favouritesFunctions.js";

export function renderNews(newsToRender) {
  const containerNews = document.querySelector(".container-news");

  containerNews.innerHTML = "";

  const favourites = getExistingFavourites();

  newsToRender.forEach(function (news) {
    let cssClass = "fa-regular";

    // check through favs array if the news id exists in the array
    const doesObjectExist = favourites.find(function (fav) {
      //return this object if the fav´s id
      return parseInt(fav.id) === news.id;
    });

    // if id is in the array, change the style of the i element
    if (doesObjectExist) {
      cssClass = "fa-solid";
    }

    containerNews.innerHTML += `<div class="col sm-12 md-4">
                                  <div class="card">
                                    <div class="card-header">${news.title}</div>
                                    <div class="card-body">
                                      <blockquote class="blockquote mb-0">
                                        <p>${news.summary}</p>
                                        <footer class="blockquote-footer">${news.author}</footer>
                                        <i class="${cssClass} fa-heart" data-id="${news.id}" data-title="${news.title}" data-summary="${news.summary}" data-author="${news.author}"></i>
                                      </blockquote>
                                    </div>
                                  </div>
                                </div>`;
  });
}
