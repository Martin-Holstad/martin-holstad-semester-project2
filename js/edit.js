import { baseUrl } from "./settings/baseUrl.js"
import navigationMenu from "./components/common/navigation-menu/navigationMenu.js";
import { editHtml } from "./components/edit/editHtml.js"
import displayMessage from "./components/common/display-message/displayMessage.js"
import { searchEditShoes } from "./components/edit/searchEditShoes.js"

navigationMenu()

const loader = document.querySelector(".loader")
const messageContainer = document.querySelector(".display-message-container")

export async function getEditShoes() {

  try {

    const response = await fetch(baseUrl + "/products")
    const shoes = await response.json();

    editHtml(shoes)
    searchEditShoes(shoes)

  } catch (error) {
    console.log(error)
    displayMessage("error", "Oops... Something went wrong!", ".display-message-container")

  } finally {
    loader.style.display = "none"
  }
}
getEditShoes()