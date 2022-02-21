import Router from "./router.js";
import * as View from "./view.js";

function checkLogin(userId) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      if (data.userId == userId) {
        console.log("true");
        this.routing();
      } else {
        console.log("false");
      }
    });
}
export function routing(name, path) {
  const router = new Router();
  router.root = "http://127.0.0.1:5500";
  router.add({
    name: name,
    path: path,
    handler: () => {
      console.log("great");
    },
  });
  const activeRoutes = Array.from(document.querySelectorAll("[route]"));
  activeRoutes.forEach((route) =>
    route.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        router.navigate(e.target.getAttribute("route"));
      },
      false,
    ),
  );
  /* let currentPath = window.location.pathname;
  if (currentPath === "/") {
    // View.showLogin();
    console.log("hh");
  } else if (currentPath === "/home") {
    View.showAllTrains();
  }*/
}
export { checkLogin };
