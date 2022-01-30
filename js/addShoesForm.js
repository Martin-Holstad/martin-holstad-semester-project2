import navigationMenu from "./components/common/navigation-menu/navigationMenu.js"
import displayMessage from "./components/common/display-message/displayMessage.js"
import { addShoe } from "./components/add-shoe-form/addShoe.js"

navigationMenu()

const form = document.querySelector(".add-shoes-form")
const imageUrlInput = document.querySelector("#url-input")
const imageUrlError = document.querySelector(".add-shoe-image-url-error")
const titleInput = document.querySelector("#add-shoe-title-input")
const titleError = document.querySelector(".add-shoe-title-error")
const priceInput = document.querySelector("#add-shoe-price-input")
const priceError = document.querySelector(".add-shoe-price-error")
const descriptionInput = document.querySelector("#add-shoe-description-input")
const descriptionError = document.querySelector(".add-shoe-description-error")
const featuredShoeCheckbox = document.querySelector("#add-shoe-featured-checkbox")
const messageContainer = document.querySelector(".display-message-container")


form.addEventListener("submit", submitForm)

function submitForm(event) {
  event.preventDefault();

  messageContainer.innerHTML = "";

  const titleValue = titleInput.value.trim()
  const priceValue = parseFloat(priceInput.value)
  const descriptionValue = descriptionInput.value.trim()
  const imageUrlValue = imageUrlInput.value.trim()
  let checkboxValue = false

  if (imageUrlValue.length === 0) {
    imageUrlInput.style.borderColor = "red"
    imageUrlError.style.display = "block"
  } else {
    imageUrlInput.style.borderColor = "green"
    imageUrlError.style.display = "none"
  }

  if (titleValue.length === 0) {
    titleInput.style.borderColor = "red"
    titleError.style.display = "block"
  } else {
    titleInput.style.borderColor = "green"
    titleError.style.display = "none"
  }

  if (isNaN(priceValue) || priceValue.length === 0) {
    priceInput.style.borderColor = "red"
    priceError.style.display = "block"
  } else {
    priceInput.style.borderColor = "green"
    priceError.style.display = "none"
  }

  if (descriptionValue.length === 0) {
    descriptionInput.style.borderColor = "red"
    descriptionError.style.display = "block"
  } else {
    descriptionInput.style.borderColor = "green"
    descriptionError.style.display = "none"
  }

  if (featuredShoeCheckbox.checked) {
    checkboxValue = true
  } else {
    checkboxValue = false
  }

  if (imageUrlValue.length === 0 || titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "All fields needs to be filled", ".display-message-container")
  }

  addShoe(titleValue, priceValue, descriptionValue, imageUrlValue, checkboxValue)
}
