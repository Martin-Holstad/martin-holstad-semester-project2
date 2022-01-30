import { baseUrl } from "../../settings/baseUrl.js"
import { getFavorites } from "../../tools/storage.js";
import displayMessage from "../common/display-message/displayMessage.js";

export function shoesHtml(shoes) {

  const shoesContainer = document.querySelector(".shoes-container");
  const messageContainer = document.querySelector(".display-message-container")

  shoesContainer.innerHTML = ""
  messageContainer.innerHTML = ""

  if (shoes.length === 0) {
    displayMessage("normal", "There is no shoes with that title or description", ".display-message-container")
  }

  shoes.forEach(function (shoe) {

    const favorites = getFavorites()

    let cssClass = "far"

    const doesFavoriteExist = favorites.find(function (favorite) {

      return parseInt(favorite.id) === shoe.id
    })

    if (doesFavoriteExist) {
      cssClass = "fa"
    }

    const imageUrl = shoe.image ? baseUrl + shoe.image.url : shoe.image_url

    shoesContainer.innerHTML += `
                                <div class="card">
                                <a href="shoe-details.html?id=${shoe.id}">
                                <img src="${imageUrl}" crossorigin="anonymous" class="card-img-top" alt="${shoe.title}">
                                <div class="card-body">
                                <h2 class="card-title">${shoe.title}</h2>
                                <p class="shoe-card-description">${shoe.description}</p>
                                <p class="card-price">Kr ${shoe.price},-</p>
                                </div>
                                </a>
                                <div class="card-favorite-icon">
                                <i class="${cssClass} fa-heart" data-id="${shoe.id}" data-title="${shoe.title}" data-description="${shoe.description}" data-price="${shoe.price}" data-image="${imageUrl}"></i>
                                </div>
                                </div>
                                `

  })
}
