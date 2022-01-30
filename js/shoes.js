import { baseUrl } from "./settings/baseUrl.js"
import navigationMenu from "./components/common/navigation-menu/navigationMenu.js"
import { shoesHtml } from "./components/shoes/shoesHtml.js"
import { getFeaturedShoes } from "./components/common/featured-shoes/getFeaturedShoes.js"
import { addToFavoritesButton } from "./components/shoes/addToFavoritesButton.js"
import { searchShoes } from "./components/shoes/searchShoes.js"
import displayMessage from "./components/common/display-message/displayMessage.js"
import { scrollToTopButton } from "./components/common/buttons/scrollToTopButton.js"

navigationMenu()

const loader = document.querySelector(".loader")
const messageContainer = document.querySelector(".display-message-container")

async function getShoes() {

  try {

    const response = await fetch(baseUrl + "/products")
    const shoes = await response.json();

    searchShoes(shoes)
    shoesHtml(shoes)
    addToFavoritesButton()
    getFeaturedShoes()
    scrollToTopButton()

  } catch (error) {
    console.log(error)
    displayMessage("error", "Oops... Something went wrong!", ".display-message-container")

  } finally {
    loader.style.display = "none"
  }
}
getShoes()

