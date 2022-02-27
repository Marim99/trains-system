import { getData, showAllDataOfTrains } from "./fetchData/xhr.js";
import Router from "./router.js";
import * as View from "./view.js";

/*function checkLogin(userId) {
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
}*/
function routing(name, path) {
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
}
function getTrains() {
  // getData("https://reqres.in/api/unknown");
  showAllDataOfTrains("https://reqres.in/api/unknown");
}
async function getResult() {
  let result = await showAllDataOfTrains("https://reqres.in/api/unknown");
  return result;
}

async function doTask() {
  let data = await getResult();
  console.log(`data ${data}`);
}

export { routing, getTrains, doTask };
