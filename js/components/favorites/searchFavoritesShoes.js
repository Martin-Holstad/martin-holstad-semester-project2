import { favoritesHtml } from "./favoritesHtml.js";
import { getFavorites, saveFavorites } from "../../tools/storage.js";

let favorites = getFavorites()

export function searchFavoritesShoes() {

  const searchShoesInput = document.querySelector(".search-shoes-input")

  searchShoesInput.onkeyup = function () {

    const searchValue = this.value.trim().toLowerCase()

    const filterdShoes = favorites.filter(function (favorite) {
      if (favorite.title.toLowerCase().startsWith(searchValue) || favorite.description.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    saveFavorites(filterdShoes)
    favoritesHtml()
  }
}