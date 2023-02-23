export function getExistingFavourites() {
  const favourites = localStorage.getItem("favourites");

  if (favourites) {
    return JSON.parse(favourites);
  } else {
    return [];
  }
}
