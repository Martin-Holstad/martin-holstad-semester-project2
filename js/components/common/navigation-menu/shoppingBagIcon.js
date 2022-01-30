import { getFromCart } from "../../../tools/storage.js"

export function shoppingBagIcon() {

  const cart = getFromCart()

  const shoppingBagCount = document.querySelector(".shopping-bag-count")

  shoppingBagCount.innerHTML = cart.length

  if (cart.length === 0) {
    shoppingBagCount.style.display = "none"
  } else {
    shoppingBagCount.style.display = "block"
  }
}