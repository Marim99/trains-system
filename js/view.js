import { Route } from "./route.js";

let containerLogin = document.querySelector(".container-login");
let containerTrains = document.querySelector(".trains-div-container");
let containerHome = document.querySelector(".home-div-container");
let containerNavbar = document.querySelector(".header");
const test = () => {
  // const myModal = new bootstrap.Modal(document.getElementById("Mymodal"));
  //myModal.show();
  $("#Mymodal").modal("show");
};
let x = `  <nav class="navbar navbar-expand-lg">
<!-- logo -->
<div class="container-fluid">
<a class="navbar-brand" href="#"><img src="../Images/352317_directions_train_icon.svg"  /></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<!-- navbar -->
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav justify-content-end">
  <li class="nav-item"><a href="#" class="active navbar-link">Home</a></li>
  <li class="nav-item"><a class="navbar-link" href="#about">About</a></li>
  <li class="nav-item login-li">
    <a href="/login.html"><button class="login-btn hover-opacity" id="login-button"  >
      login
    </button><a>
  </li>
</ul>
<!--./nav-->
</div>

</div>
</nav>`;
const navbar = () => {
  let Html = `
  <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../Images/Vector.png"  />Smart<span>Railway</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item login-li">
        <a href="/login.html"><button class="login-btn hover-opacity" id="login-button"  >
        login
      </button><a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `;

  containerNavbar.innerHTML = Html;
};
const showLogin = () => {
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
          <button route="/trains.html" id="submit-button" name="submit" class="btn"><a href="/trains.html">Login</a></button>
        </div>
      </form>
  `;
  containerLogin.innerHTML = Html;
};
const showAllTrains = (id, state) => {
  let Html = `
  <div class="card train-card" ${(onclick = function () {
    test();
  })}>
  <div class="card-body">Train Id: ${id}
  </div>  
</div>
        
  `;
  containerTrains.innerHTML += Html;
};
const showHome = () => {
  let Html = `
  
<!--Home-->
<div class="home">
  <div class="overlay">
    <div class="home-content">
      <h1 class="title1">we are students at the faculty of Engineer</h1>
      <p class="home-desc">
        We made smart Railway system
      </p>
    </div>
    <!--./HOME-content-->
  </div>
  <!--./overlay-->
</div>
<!--./HOME-->

<!-- section header   -->
  `;
  containerHome.innerHTML = Html;
};
const showSensors = () => {
  let Html = ``;
};
export { showLogin, showAllTrains, showHome, navbar };
