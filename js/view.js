import { Route } from "./route.js";

let containerLogin = document.querySelector(".container-login");
let containerTrains = document.querySelector(".trains-div-container");
let containerHome = document.querySelector(".home-div-container");
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
          <button route="/trains.html" id="submit-button" name="submit" class="btn">Login</button>
        </div>
      </form>
  `;
  containerLogin.innerHTML = Html;
};
const showAllTrains = (id, state) => {
  let Html = `
  
  <div class="card train-card ">
 
 
  <a href="#" class="justify-content-between">  
  <div class="card-body">${id}
  </div>
  <div class="card-body train-state">${state}
  </div>
  </a>
  
</div>
        
  `;
  // containerHome.appendChild(Html);
  containerTrains.innerHTML += Html;
};
const showHome = () => {
  let Html = `
  <div class="header">
  <!--container-->
  <div class="container">
    <!-- logo -->
    <div class="logo">
      <i class="fa fa-train fa-3x logo-icon" aria-hidden="true"></i>
    </div>

    <!-- navbar -->
    <ul class="nav">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#about">About</a></li>
      <!-- <li><a href="#station">staion</a></li> -->
      <li class="login-li">
        <button class="login-btn hover-opacity" id="login-button" route="/login.html" >
          login
        </button>
      </li>
    </ul>
    <!--./nav-->

    <div class="clear"></div>
  </div>
</div>
<!--./header-->
<!--Home-->
<div class="home">
  <div class="overlay">
    <div class="home-content">
      <h1 class="title1">we are cteative agency</h1>
      <p class="home-desc">
        morbi mattis felis at nunc.Duis viverra diam non justo.In
        nisl.Nullam sit amet magna in magna gravida vehicula.Mauris
        tincidunt sem sed arcu.Nunc posuere.
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
export { showLogin, showAllTrains, showHome };
