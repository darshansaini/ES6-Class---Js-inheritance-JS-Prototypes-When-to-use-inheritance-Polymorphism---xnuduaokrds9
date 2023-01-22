
class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    #secure = url.startsWith("https") ? true : false;
  }

  isSecure() {
    return #secure;
  }

  updateUrl(newUrl) {
    this.url = newUrl;
    #secure = newUrl.startsWith("https") ? true : false;
  }
}

module.exports = { API }
