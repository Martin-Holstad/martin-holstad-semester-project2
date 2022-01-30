import { baseUrl } from "../../settings/baseUrl.js"
import { saveToCart, getFromCart } from "../../tools/storage.js"
import { shoppingBagIcon } from "../common/navigation-menu/shoppingBagIcon.js"

export function addToCartButton(shoeDetails) {

  const addToCartButton = document.querySelector(".shoe-details-add-to-cart-button")
  const selectSizeInput = document.querySelector("#select-size")

  addToCartButton.addEventListener("click", addToCart)

  function addToCart() {

    const id = shoeDetails[0].id
    const size = selectSizeInput.value
    const title = shoeDetails[0].title
    const price = shoeDetails[0].price
    const image = shoeDetails[0].image ? baseUrl + shoeDetails[0].image.url : shoeDetails[0].image_url

    const currentCart = getFromCart()

    const cartExists = currentCart.find(function (cart) {
      return cart.id === id
    })

    if (!cartExists) {
      const cart = { id: id, image: image, title: title, size: size, price: price }
      currentCart.push(cart)
      saveToCart(currentCart)
      shoppingBagIcon()
    } else {
      alert("This shoe is already in your cart")
    }
  }
}