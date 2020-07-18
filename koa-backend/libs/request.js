const https = require('https');
const get = function(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = [];
            res.on('data', (d) => {
                data.push(d);
            });
            res.on('end', () => {
                resolve(Buffer.concat(data).toString());
            })
            
        }).on('error', (e) => {
            reject(e);
        })
    })
}

module.exports = get;