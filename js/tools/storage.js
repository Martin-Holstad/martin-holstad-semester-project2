
const tokenKey = "token"
const userKey = "user"
const favoritesKey = "favorites"
const cartKey = "cart"

export function saveToken(token) {
  saveToStorage(tokenKey, token)
}

export function getToken() {
  return getFromStorage(tokenKey)
}

export function saveUser(user) {
  saveToStorage(userKey, user)
}

export function getUser() {
  return getFromStorage(userKey)
}

export function getUserName() {
  const user = getFromStorage(userKey)

  if (user) {
    return user.username;
  }

  return null;
}

export function saveToCart(cart) {
  saveToStorage(cartKey, cart)
}

export function getFromCart() {
  const cart = getFromStorage(cartKey)

  if (cart === null) {

    return []

  } else {

    return cart;
  }
}

export function saveFavorites(favorites) {
  saveToStorage(favoritesKey, favorites)
}

export function getFavorites() {
  const favorites = getFromStorage(favoritesKey)

  if (favorites === null) {

    return []

  } else {

    return favorites;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key)

  if (!value) {
    return []
  }

  return JSON.parse(value)
}