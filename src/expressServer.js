

var app = require('express')()
var bodyparser = require('body-parser')


app.use(bodyparser.json())


app.post('/generatedb', function (req, res) {
    var obj = req.body
    console.log(obj)
})










app.listen(8000, function () {
    console.log("SERVER RUNNING IN 8000")
})