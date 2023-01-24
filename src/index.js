
class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    var obj.#secure = true;
    obj.#secure = url.startsWith("https") ? true : false;
  }

  isSecure() {
    return obj.#secure;
  }

  updateUrl(newUrl) {
    this.url = newUrl;
    obj.#secure = newUrl.startsWith("https") ? true : false;
  }
}

module.exports = { API }
