

const app = require('express')()
const bodyparser = require('body-parser')
const { createUser, addEntry, addNote } = require('./schema')

app.use(bodyparser.json())


app.post('/generatedb', function (req, res) {
    var obj = req.body
    // console.log(obj)

})










app.listen(8000, function () {
    console.log("SERVER RUNNING IN 8000")
})