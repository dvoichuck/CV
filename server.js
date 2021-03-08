let bodyParser = require( "body-parser")
let path = require('path')
const urlencodedParser = bodyParser.urlencoded({extended: false});
const express = require('express'),
    app = express()
const host = '127.0.0.1'
const port = 7000
let engines = require('engines')

app.use(express.static(path.join(__dirname, 'public')));
const ejs = require('ejs')
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);


app.get('/', urlencodedParser, function (req, res) {
    res.render('index.html')
})

app.post('/', urlencodedParser, function (req, res) {
})


app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
)