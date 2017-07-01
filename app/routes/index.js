const routes = require('express').Router();
let bodyParser = require('body-parser');
let app = require('express')();
const scrapeIt = require("scrape-it");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes.get('/', (req, res) => {
    res.render('form', { title: 'Hey', message: 'We are  this', stream: 'DAAATA!!' });
});

routes.post('/submission', (req, res) => {
    // Promise interface
    var stream = scrapeIt(req.body.url, {
            head: "html",
            title: "title"
            , desc: "h2"
            , avatar: {
                selector: "img"
                , attr: "src"
            }
        }).then(page => {
            console.log(page);
            let isWordpress = false;
            if( page.head.indexOf('wp-includes' || 'wp-content') >= 0){
                console.log('yes this is wordpress');
                isWordpress = true;
            }else {
                console.log('not a wordpres site');
            }
            res.render('submitted', { title: req.body.url, message: 'We Are Looking at ', sdata: page, sitdId: isWordpress});
        });
});


module.exports = routes;




