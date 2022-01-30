import { baseUrl } from "../../settings/baseUrl.js"
import displayMessage from "../common/display-message/displayMessage.js"
import { getToken } from "../../tools/storage.js"

const messageContainer = document.querySelector(".display-message-container")
const messageContainerClass = "." + messageContainer.className

export async function updateShoe(imageUrl, title, price, description, checkbox, id) {

  const url = baseUrl + "/products/" + id

  const data = JSON.stringify({ image_url: imageUrl, title: title, price: price, description: description, featured: checkbox })

  const token = getToken()

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };


  try {

    const response = await fetch(url, options)
    const json = await response.json()

    console.log(json)

    if (json.updated_at) {
      displayMessage("success", "Shoe updated", messageContainerClass);
    }

    if (json.error) {
      displayMessage("error", "Oops... Something went wrong!", messageContainerClass);
    }


  } catch (error) {
    console.log(error)
    displayMessage("error", "Oops... Something went wrong!", messageContainerClass)
  }
}