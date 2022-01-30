import { editHtml } from "./editHtml.js";

export function searchEditShoes(shoes) {

  const searchShoesInput = document.querySelector(".search-shoes-input")

  searchShoesInput.onkeyup = function () {

    const searchValue = this.value.trim().toLowerCase()

    const filterdShoes = shoes.filter(function (shoe) {
      if (shoe.title.toLowerCase().startsWith(searchValue) || shoe.description.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    editHtml(filterdShoes)
  }
}
