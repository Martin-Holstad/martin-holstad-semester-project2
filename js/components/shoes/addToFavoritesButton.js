import { getFavorites, saveFavorites } from "../../tools/storage.js"

export function addToFavoritesButton() {

  const favoriteButtons = document.querySelectorAll(".card-favorite-icon i")

  favoriteButtons.forEach(function (favoriteButton) {
    favoriteButton.addEventListener("click", handleClick)
  })

  function handleClick() {
    this.classList.toggle("fa")
    this.classList.toggle("far")

    const id = this.dataset.id
    const title = this.dataset.title
    const description = this.dataset.description
    const price = this.dataset.price
    const image = this.dataset.image

    const currentFavorites = getFavorites()

    const favoriteExists = currentFavorites.find(function (favorite) {
      return favorite.id === id
    })

    if (!favoriteExists) {
      const favorite = { id: id, title: title, description: description, price: price, image: image }
      currentFavorites.push(favorite)
      saveFavorites(currentFavorites)
    } else {
      const newFavorite = currentFavorites.filter((favorites) => favorites.id !== id); {
        saveFavorites(newFavorite);
      }
    }
  }
}