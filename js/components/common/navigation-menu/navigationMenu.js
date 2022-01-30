import { getUserName } from "../../../tools/storage.js";
import { shoppingBagIcon } from "./shoppingBagIcon.js"
import { hamburgerMenuButton } from "./hamburgerMenuButton.js";

export default function navigationMenu() {

  const { pathname } = document.location;

  const header = document.querySelector("header")

  header.innerHTML = `
                     <div class="hamburger-menu-container">
                     <div class="hamburger-menu-button">
                     <i class="fas fa-bars"></i>
                     </div>                    
                     <div class="hamburger-menu-content text-center">
                     <li><a href="/">HOME</a></li>
                     <li><a href="shoes.html">SHOES</a></li>
                     <li><a href="about.html">ABOUT</a></li>
                     <li><a href="contact.html">CONTACT</a></li>
                     </div>
                     </div>

                     <div class="logo"><a href="/">LATNA</a></div>

                     <nav>
                     <ul>
                     <li><a href="/" class="${pathname === "/" ? "active" : ""}">HOME</a></li>
                     <li><a href="shoes.html" class="${pathname === "/shoes.html" ? "active" : ""}">SHOES</a></li>
                     <li><a href="about.html" class="${pathname === "/about.html" ? "active" : ""}">ABOUT</a></li>
                     <li><a href="contact.html" class="${pathname === "/contact.html" ? "active" : ""}">CONTACT</a></li>
                     </ul>
                     </nav>

                     <div class="main-nav-icons-container d-flex">               
                     ${authLink}
                     <span><a href="favorites.html"><i class="far fa-heart main-nav-icons ms-3"></i></a></span>
                     <span><a href="cart.html"><i class="fas fa-shopping-bag main-nav-icons shopping-bag ms-3">
                     <div class="shopping-bag-count"></div>
                     </i></a></span>
                     </div>
                     `
  shoppingBagIcon()
  hamburgerMenuButton()
}

const username = getUserName()

let authLink = `<span><a href="login-form.html"><i class="fas fa-user-circle main-nav-icons"></i></a></span>`

if (username) {
  authLink = `<span class="admin-dropdown-menu">
              <p class="admin-dropdown-button">${username}<i class="admin-dropdown-icon fas fa-caret-down"></i></p>
              <div class="admin-dropdown-content">
              <li><a href="add-shoes-form.html"><i class="fas fa-plus"></i> Add shoes</a></li>
              <hr>
              <li><a href="edit.html"><i class="far fa-edit"></i> Edit shoes</a></li>
              <hr>
              <li class="log-out"><i class="fas fa-sign-out-alt"></i> Log out</li>
              </div>
              </span>
              `

  window.onload = function () {

    const adminDropdownButton = document.querySelector(".admin-dropdown-button")
    const adminDropdownContent = document.querySelector(".admin-dropdown-content")

    adminDropdownButton.onclick = function () {
      adminDropdownContent.classList.toggle("show")
    }

    const logOutButton = document.querySelector(".log-out")

    logOutButton.onclick = function () {
      localStorage.clear("token", "key")
      window.location.href = "index.html"
    }
  }
}
