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
function loginBtn(e) {
  // e.preventDefault();
  Model.routing("login", "/login.html");
}
function showAllTrains() {
  Model.getTrains();
}
function init() {
  Data.getData("https://reqres.in/api/users");
  View.showLogin();
  document
    .querySelector("#submit-button")
    .addEventListener("click", checkLogin);
}
function trains() {
  showAllTrains();
}
function home() {
  View.showHome();
  document.querySelector("#login-button").addEventListener("click", loginBtn);
}

export { init, showAllTrains, trains, home };
