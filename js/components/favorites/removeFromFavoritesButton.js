import { getFavorites, saveFavorites } from "../../tools/storage.js"
import { favoritesHtml } from "./favoritesHtml.js"

export function removeFromFavoritesButton() {

  let favorites = getFavorites()

  const trashCans = document.querySelectorAll(".card-trash-icon i")

  trashCans.forEach(function (trashCan) {
    trashCan.addEventListener("click", removeFavorite)
  })


  function removeFavorite() {
    const removeThisFavorite = this.dataset.id

    const newFavorites = favorites.filter(function (favorite) {

      if (removeThisFavorite !== favorite.id) {
        return true;
      }
    })
    favorites = newFavorites
    saveFavorites(favorites)
    favoritesHtml()
  }
}