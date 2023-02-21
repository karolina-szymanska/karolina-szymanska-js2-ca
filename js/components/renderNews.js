export function renderNews(newsToRender) {
  const containerNews = document.querySelector(".container-news");

  containerNews.innerHTML = "";

  newsToRender.forEach(function (news) {
    containerNews.innerHTML += `<div class="single-news">
                                    <h4>${news.title}</h4>
                                    <p>${news.summary}</p>
                                    <p class="author">-- ${news.author}</p>
                                    <i class="fa-regular fa-heart"></i>
                                </div>`;
  });
}
