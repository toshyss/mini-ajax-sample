const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log("test");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.post('/', (req, res) => {
    console.log('body: ' + JSON.stringify(req.body.name));
    let result = JSON.stringify(req.body);
    res.send(result);
});

app.listen(8081);
