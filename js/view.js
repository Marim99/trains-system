import { Route } from "./route.js";

let containerElement = document.querySelector(".container");
function showLogin() {
  let Html = `
  <form  class="login-id">
        <p class="login-text" style="font-size: 2.3rem; font-weight: 800">
          Smart <span>Railway</span>
        </p>
        <div class="input-group">
          <input
            type="email"
            placeholder="Enter your ID"
            id="user-id"
            required
           
          />
        </div>
        <div class="input-group">
          <input
            type="password"
            placeholder="Enter your password"
            id="user-password"
            required
           
          />
        </div>
        <div class="input-group">
          <button route="/home.html" id="submit-button" name="submit" class="btn">Login</button>
        </div>
      </form>
  `;
  containerElement.innerHTML = Html;
}
function showAllTrains() {
  //let Html = `<h1 class='test'>hi</h1>`;
  //containerElement.innerHTML = Html;
}
export { showLogin, showAllTrains };
