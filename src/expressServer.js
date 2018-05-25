

const app = require('express')()
const bodyparser = require('body-parser')
const { addEntry, addNote, checkUser, checkNote, createUser } = require('./schema')

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

    /*
    FORMAT : 
    
    {
        userName : '',

        note : {
        title : '',
        content : [
            { 
                isChecked : t/f,
              entry : ''
            }
        ]
    }
    }

    */
    checkUser({ userName: heavyobj.userName }).then(function (doc, err) {
        console.log(doc)
    })

})








app.listen(8000, function () {
    console.log("SERVER RUNNING IN 8000")
})



/*
https://stackoverflow.com/questions/18867628/mongoose-deep-population-populate-a-populated-field
https://github.com/Automattic/mongoose/issues/1377#issuecomment-15911192
https://jaketrent.com/post/mongoose-population/
http://frontendcollisionblog.com/mongodb/2016/01/24/mongoose-populate.html
http://mongoosejs.com/docs/populate.html

https://stackoverflow.com/questions/26008555/foreign-key-mongoose



*/