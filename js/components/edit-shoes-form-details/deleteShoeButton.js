import { baseUrl } from "../../settings/baseUrl.js";
import { getToken } from "../../tools/storage.js";
import displayMessage from "../common/display-message/displayMessage.js";

export function deleteShoeButton(id) {

  const deleteShoeButton = document.querySelector(".delete-shoe-button")
  const messageContainer = document.querySelector(".display-message-container")

  deleteShoeButton.onclick = async function () {

    const doDelete = confirm("Are you sure you want to delete this shoe?")

    if (doDelete) {

      const url = baseUrl + "/products/" + id

      const token = getToken()

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };

      try {

        const response = await fetch(url, options)
        const json = await response.json()
        console.log(json)

        if (json.error) {
          return displayMessage("error", "Oops... Something went wrong", ".display-message-container")
        }

        location.href = "edit.html";

      } catch (error) {
        console.log(error);
        displayMessage("error", "Oops... Something went wrong", ".display-message-container")
      }
    }
  }
}