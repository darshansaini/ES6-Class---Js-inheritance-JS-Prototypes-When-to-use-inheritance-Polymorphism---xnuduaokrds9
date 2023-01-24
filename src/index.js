
class API {
    constructor(url, method = 'GET') {
        this.url = url;
        this.method = method;

        let secure;
        if (this.url.startsWith('https')) {
            secure = true;
        } else {
            secure = false;
        }

        this.isSecure = function() {
            return secure;
        }

        this.updateURL = function(newUrl) {
            this.url = newUrl;
            if (this.url.startsWith('https')) {
                secure = true;
            } else {
                secure = false;
            }
        }
    }
}



module.exports = { API }
