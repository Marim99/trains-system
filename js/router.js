/*import * as View from "./view.js";
function router() {
  /* let activeRoutes = Array.from(document.querySelectorAll("[route]"));

  function navigate(e) {
    e.preventDefault();
    let route = e.target.attributes[0].value;
    let routeInf = myFirstRouter.routes.filter(function (r) {
      return r.path === route;
    });
    console.log(routeInf);
  }

  activeRoutes.forEach((route) => {
    route.addEventListener("click", navigate, false);
  });

  function Router(name, routes) {
    return {
      name: name,
      routes: routes,
    };
  }

  let myFirstRouter = new Router("myFirstRouter", [
    {
      path: "/",
      name: "Root",
    },
    {
      path: "/home",
      name: "Home",
    },
    {
      path: "/Detiels",
      name: "Detiels",
    },
  ]);
  let currentPath = window.location.pathname;
  if (currentPath === "/") {
    // View.showLogin();
    console.log("hh");
  } else {
    let ex=myFirstRouter.routes.filter(function (r) {
      return r.path === currentPath;
    });
    console.log(currentPath);
  }
}
export default router;*/
import { Route } from "./route.js";
class Router {
  constructor() {
    this.mode = "hash";
    this.routes = [];
    this.root = "/";
  }
  get root() {
    return this._root;
  }
  set root(val) {
    this._root = val;
  }
  get mode() {
    return this._mode;
  }
  set mode(val) {
    this._mode =
      val == "history" && window.history.pushState ? "history" : "hash";
  }
  get routes() {
    return this._routes;
  }
  set routes(val) {
    this._routes = val;
  }
  add(route) {
    this.routes.push(new Route(route.name, route.path, route.handler));
    return this;
  }

  match(route) {
    for (let i = 0; i < this.routes.length; i++) {
      let paramNames = [];
      let regexPath = `${this.routes[i].path.replace(
        /([:*])(\w+)/g,
        function (full, colon, name) {
          paramNames.push(name);
          return `([^\/]+)`;
        },
      )}(?:\/|$)`;
      let routeMatch = route.match(new RegExp(regexPath));
      if (routeMatch !== null) {
        let params = routeMatch
          .slice(1, routeMatch, length)
          .reduce((params, value, index) => {
            if (params === null) params = {};
            params[paramNames[index]] = value;
            return params;
          }, null);
        if (params === null) {
          this.routes[i].handler();
        } else {
          this.routes[i].handler(params);
        }
        this.location(route);
      }
    }
  }
  navigate(route) {
    route = route ? route : "";
    this.match(route);
  }
  location(route) {
    if (this.mode === "history") {
      window.history.pushState(null, null, this.root + route);
    } else {
      route = route.replace(/^\//, "").replace(/\/$/, "");
      window.location.href = route;
      window.location.href.replace(/#(.*)$/, "") + "#" + route;
    }
  }
}
export default Router;
