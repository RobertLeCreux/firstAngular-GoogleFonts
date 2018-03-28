const FONTS_ROUTE = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDqr58bqdt5EThAFelJFOrm8CXx0bW4ODA';
const https = require('https');

var fonts;

module.exports = {
    get: function (req, resp) {
        https.get(FONTS_ROUTE, (res) => {
            var data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });
    
              res.on('end', () => {
                resp.send(JSON.parse(data));
            });
        }).on('error', (err) => {
            console.log("Error: " + err.message);
        });
        
    },
    // post: function (req, res) {
    //     var loc1, loc2;
    //     var request = req;        
        
    //     res.status(200);
    // }
}