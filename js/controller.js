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
  let x = Data.sendData(userId, userPassword);
}

function showAllTrains() {
  Model.getTrains();
}
function init() {
  Data.getData("https://reqres.in/api/users");
  View.navbar();
  View.showLogin();
  document
    .querySelector("#submit-button")
    .addEventListener("click", checkLogin);
}
function trains() {
  View.navbar();
  showAllTrains();
}
function home() {
  View.navbar();
  View.showHome();
}

export { init, showAllTrains, trains, home };
