class Route {
  constructor(name, path, handler) {
    this.name = name;
    this.path = path;
    this.handler = handler;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get path() {
    return this._path;
  }
  set path(path) {
    this._path = path;
  }
  get handler() {
    return this._hangler;
  }
  set handler(handler) {
    this._hangler = handler;
  }
}
export { Route };
