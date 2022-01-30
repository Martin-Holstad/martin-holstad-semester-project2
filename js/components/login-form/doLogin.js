import displayMessage from "../common/display-message/displayMessage.js"
import { baseUrl } from "../../settings/baseUrl.js"
import { saveToken, saveUser } from "../../tools/storage.js"

const messageContainer = document.querySelector(".display-message-container")
const loader = document.querySelector(".form-loader")
const form = document.querySelector(".login-form")

export async function doLogin(username, password) {

  loader.style.display = "block"
  form.style.display = "none"

  const url = baseUrl + "/auth/local"

  const data = JSON.stringify({ identifier: username, password: password })

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  }

  try {

    const response = await fetch(url, options)
    const json = await response.json()

    if (json.user) {
      saveToken(json.jwt)
      saveUser(json.user)
      window.location.href = "index.html"
    }

    if (json.error) {
      displayMessage("error", "invalid username or password", ".display-message-container")
    }

  } catch (error) {
    console.log(error)
    displayMessage("error", "Ops... something went wrong!", ".display-message-container")

  } finally {
    loader.style.display = "none"
    form.style.display = "block"
  }
}