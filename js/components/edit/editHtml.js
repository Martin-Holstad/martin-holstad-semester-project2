import { baseUrl } from "../../settings/baseUrl.js"
import displayMessage from "../common/display-message/displayMessage.js";

export function editHtml(shoes) {

  const shoesContainer = document.querySelector(".shoes-container");
  const messageContainer = document.querySelector(".display-message-container")

  shoesContainer.innerHTML = ""
  messageContainer.innerHTML = ""

  if (shoes.length === 0) {
    displayMessage("normal", "There is not shoes with that title or description", ".display-message-container")
  }

  shoes.forEach(function (shoe) {

    const imageUrl = shoe.image ? baseUrl + shoe.image.url : shoe.image_url

    shoesContainer.innerHTML += `
                                <div class="card">
                                <a href="edit-shoes-form-details.html?id=${shoe.id}">
                                <img src="${imageUrl}" class="card-img-top" alt="${shoe.title}">
                                <div class="card-body">
                                <h2 class="card-title">${shoe.title}</h2>
                                <p class="shoe-card-description">${shoe.description}</p>
                                <p class="card-price">Kr ${shoe.price},-</p>
                                </div>
                                </a>
                                </div>
                                `
  })
}
