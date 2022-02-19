import * as View from "./view.js";
import * as Model from "./model.js";

function checkLogin(e) {
  e.preventDefault();
  let userId = document.querySelector("#user-id").value;
  console.log(`id ${userId}`);
  //Model.checkLogin(userId);
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      if (data.userId == userId) {
        console.log("true");
        Model.routing();
      } else {
        console.log("false");
        alert("Enter your correct Id");
        document.querySelector("#user-id").value = "";
      }
    });
}

function init() {
  View.showLogin();
  document
    .querySelector("#submit-button")
    .addEventListener("click", checkLogin);
}
export { init };
