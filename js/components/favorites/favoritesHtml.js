import { getFavorites } from "../../tools/storage.js";
import { removeFromFavoritesButton } from "./removeFromFavoritesButton.js"
import displayMessage from "../common/display-message/displayMessage.js";

export function favoritesHtml() {

  const favoritesShoesContainer = document.querySelector(".favorites-shoes-container")
  const messageContainer = document.querySelector(".display-message-container")

  const favorites = getFavorites()

  favoritesShoesContainer.innerHTML = ""
  messageContainer.innerHTML = ""

  if (favorites.length === 0) {
    displayMessage("normal", "There is no favorites in your collection", ".display-message-container")
  }

  favorites.forEach(function (shoe) {

    favoritesShoesContainer.innerHTML += `
                                         <div class="card">
                                         <a href="shoe-details.html?id=${shoe.id}">
                                         <img src="${shoe.image}" class="card-img-top" alt="${shoe.title}">
                                         <div class="card-body">
                                         <h2 class="card-title">${shoe.title}</h2>
                                         <p class="shoe-card-description">${shoe.description}</p>
                                         <p class="card-price">Kr ${shoe.price},-</p>
                                         </div>
                                         </a>
                                         <div class="card-trash-icon">
                                         <i class="fas fa-times class="remove-from-favorites-button" data-id="${shoe.id}"></i>
                                         </div>
                                         </div>
                                         `
    removeFromFavoritesButton()
  })
}