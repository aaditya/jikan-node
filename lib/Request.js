const axios = require('axios');
const { URL } = require('url');

class Request {
    baseURL = 'https://api.jikan.moe/';
    
    constructor(options = {}){
        if (options.version) this.baseURL += `v${options.version}`;
        else this.baseURL += "v4";
    }
    
    async send(args, params) {
        const requestOptions = {
            method: 'GET',
            url: this.createUrl(args),
            params 
        };

        const response = await axios(requestOptions);

        return response.data;
    }

    createUrl(args) {
        const url = new URL(this.baseURL);
        url.pathname += `/${args.filter(a => a).join("/")}`;
        return url.href;
    }
}

module.exports = Request;
