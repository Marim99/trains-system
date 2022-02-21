import * as View from "./view.js";
import * as Model from "./model.js";
//import { getData } from "./fetchData/xhr.js";
import * as Data from "./fetchData/xhr.js";
function checkLogin(e) {
  e.preventDefault();
  let userId = document.querySelector("#user-id").value;
  let userPassword = document.querySelector("#user-password").value;
  console.log(`id ${userId}`);
  console.log(`passwprd ${userPassword}`);
  //Model.checkLogin(userId);
  /* fetch("data.json")
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
    });*/
  let x = Data.sendData(userId, userPassword);
}

function init() {
  Data.getData();
  View.showLogin();
  document
    .querySelector("#submit-button")
    .addEventListener("click", checkLogin);
}
export { init };
