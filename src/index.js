
class API {
    constructor(url, method = 'GET') {
        this.url = url;
        this.method = method;
    }

    isSecure() {
        return this.url.startsWith('https') ? true : false;
    }

    updateURL(url) {
        this.url = url;
    }
}




module.exports = { API }
