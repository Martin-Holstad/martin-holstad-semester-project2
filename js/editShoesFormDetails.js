import navigationMenu from "./components/common/navigation-menu/navigationMenu.js"
import { baseUrl } from "./settings/baseUrl.js"
import { editShoesForm } from "./components/edit-shoes-form-details/editShoesForm.js"
import displayMessage from "./components/common/display-message/displayMessage.js"

const stringDetails = document.location.search
const newUrlDetails = new URLSearchParams(stringDetails)
const idDetails = newUrlDetails.get("id")

navigationMenu()

const loader = document.querySelector(".loader")
const messageContainer = document.querySelector(".display-message-container")
const form = document.querySelector(".edit-shoes-form")

async function getEditShoesFormDetails() {

  try {

    const resposne = await fetch(baseUrl + "/products?id=" + idDetails)
    const editShoeDetails = await resposne.json()

    editShoesForm(editShoeDetails)

  } catch (error) {
    console.log(error)
    displayMessage("error", "Oops... Something went wrong!", ".display-message-container")

  } finally {
    loader.style.display = "none"
    form.style.display = "block"
  }
}
getEditShoesFormDetails()