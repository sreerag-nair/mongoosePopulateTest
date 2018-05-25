

const app = require('express')()
const bodyparser = require('body-parser')
const { createUser, addEntry, addNote } = require('./schema')

app.use(bodyparser.json())


app.post('/insert-user', function (req, res) {
    var obj = req.body
    // console.log(obj)

    createUser(obj).then(function (doc, err) {
        if (err) throw err

        console.log("USER INSERT SUCCESSFUL")


    })

})

app.post('/add-note', function (req, res) {
    var heavyobj = req.body
    
})








app.listen(8000, function () {
    console.log("SERVER RUNNING IN 8000")
})