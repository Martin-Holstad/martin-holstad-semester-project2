import { shoesHtml } from "./shoesHtml.js"

export function searchShoes(shoes) {

  const searchShoesInput = document.querySelector(".search-shoes-input")

  searchShoesInput.onkeyup = function () {

    const searchValue = this.value.trim().toLowerCase()

    const filterdShoes = shoes.filter(function (shoe) {
      if (shoe.title.toLowerCase().startsWith(searchValue) || shoe.description.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    shoesHtml(filterdShoes)
  }
}