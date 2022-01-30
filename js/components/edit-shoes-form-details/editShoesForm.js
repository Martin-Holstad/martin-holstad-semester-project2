import displayMessage from "../common/display-message/displayMessage.js"
import { updateShoe } from "./updateShoe.js"
import { deleteShoeButton } from "./deleteShoeButton.js"


export function editShoesForm(editShoeDetails) {

  const form = document.querySelector(".edit-shoes-form")
  const imageUrlInput = document.querySelector("#edit-shoes-form-image-url-input")
  const imageUrlError = document.querySelector(".edit-shoes-image-url-error")
  const titleInput = document.querySelector("#edit-shoes-form-title-input")
  const titleError = document.querySelector(".edit-shoes-title-error")
  const priceInput = document.querySelector("#edit-shoes-form-price-input")
  const priceError = document.querySelector(".edit-shoes-price-error")
  const descriptionInput = document.querySelector("#edit-shoes-form-description-input")
  const descriptionError = document.querySelector(".edit-shoes-description-error")
  const featuredShoeCheckbox = document.querySelector("#edit-shoes-featured-checkbox")
  const idInput = document.querySelector("#edit-shoes-form-id")
  const messageContainer = document.querySelector(".display-message-container")

  imageUrlInput.value = editShoeDetails[0].image_url
  titleInput.value = editShoeDetails[0].title
  priceInput.value = editShoeDetails[0].price
  descriptionInput.value = editShoeDetails[0].description
  idInput.value = editShoeDetails[0].id

  deleteShoeButton(editShoeDetails[0].id)

  form.addEventListener("submit", submitForm)

  function submitForm(event) {
    event.preventDefault()

    messageContainer.innerHTML = ""

    const titleValue = titleInput.value.trim()
    const priceValue = parseFloat(priceInput.value)
    const descriptionValue = descriptionInput.value.trim()
    const imageUrlValue = imageUrlInput.value.trim()
    const idValue = idInput.value
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

    updateShoe(imageUrlValue, titleValue, priceValue, descriptionValue, checkboxValue, idValue)
  }
}
