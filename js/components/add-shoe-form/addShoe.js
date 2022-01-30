import { baseUrl } from "../../settings/baseUrl.js"
import { getToken } from "../../tools/storage.js"
import displayMessage from "../common/display-message/displayMessage.js"

const form = document.querySelector(".add-shoes-form")
const messageContainer = document.querySelector(".display-message-container")


export async function addShoe(title, price, description, image, checkbox) {

  const url = baseUrl + "/products"

  const data = JSON.stringify({ image_url: image, title: title, price: price, description: description, featured: checkbox })

  const token = getToken()

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  try {

    const response = await fetch(url, options)
    const json = await response.json()

    if (json.created_at) {
      displayMessage("success", "Shoe added", ".display-message-container");
      form.reset()
    }

    if (json.error) {
      displayMessage("error", "Oops... Something went wrong!", ".display-message-container");
    }

  } catch (error) {
    console.log(error)
    displayMessage("error", "Oops... Something went wrong!", ".display-message-container")
  }
}