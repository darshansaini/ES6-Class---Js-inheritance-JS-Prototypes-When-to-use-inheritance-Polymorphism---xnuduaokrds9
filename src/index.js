
class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
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
