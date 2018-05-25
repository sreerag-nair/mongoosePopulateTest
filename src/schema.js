const mongo = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var dbase = mongoose.createConnection("mongodb://localhost:27017/");
var db = dbase.useDb('populateLearnDB')


/*

3 schemas - { 
        userModel
        notesModel
        contentModel
}


*/


var userSchema = new mongoose.Schema({
    userName: String,
    notesId: [
        {
            userId: Schema.Types.ObjectId,
            ref: 'NotesModel'

        }
    ]
})

var notesSchema = new mongoose.Schema({
    noteTitle : String,
    notesContent : [
        {
            notesId : Schema.Types.ObjectId,
            ref : 'ContentModel'
        }
    ]
})

var contentSchema = new mongoose.Schema(
    {
        entry : String,
        isChecked : Boolean

    }
)

function genAllModels(){
    
    var userSchemaHandle = db.model('Model',userSchema)
    var notesSchemaHandle = db.model('NotesModel',notesSchema)
    var contentSchemaHandle = db.model('ContentModel',contentSchema)

    return { userSchemaHandle, notesSchemaHandle, contentSchemaHandle } 
}

var { userSchemaHandle, notesSchemaHandle, contentSchemaHandle } = genAllModels()


exports.createUser = function(userObj){
    return userSchemaHandle(userObj).save()
}