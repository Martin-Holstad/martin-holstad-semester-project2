import { baseUrl } from "./settings/baseUrl.js"
import navigationMenu from "./components/common/navigation-menu/navigationMenu.js"
import { getFeaturedShoes } from "./components/common/featured-shoes/getFeaturedShoes.js"
import { shoeDetailsHtml } from "./components/shoe-details/shoeDetailsHtml.js"
import { addToCartButton } from "./components/shoe-details/addToCartButton.js"
import displayMessage from "./components/common/display-message/displayMessage.js"
import { scrollToTopButton } from "./components/common/buttons/scrollToTopButton.js"


const stringDetails = document.location.search
const newUrlDetails = new URLSearchParams(stringDetails)
const idDetails = newUrlDetails.get("id")

navigationMenu()

const loader = document.querySelector(".loader")
const messageContainer = document.querySelector(".display-message-container")

async function getShoeDetails() {

  try {

    const response = await fetch(baseUrl + "/products?id=" + idDetails)
    const shoeDetails = await response.json()

    shoeDetailsHtml(shoeDetails)
    addToCartButton(shoeDetails)
    getFeaturedShoes()
    scrollToTopButton()

  } catch (error) {
    console.log(error)
    displayMessage("error", "Oops... Something went wrong!", ".display-message-container")

  } finally {
    loader.style.display = "none"
  }
}
getShoeDetails()

