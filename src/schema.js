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
            type: Schema.Types.ObjectId,
            ref: 'NotesModel'

        }
    ]
})

var notesSchema = new mongoose.Schema({
    noteTitle : String,
    notesContent : [
        {
            type : Schema.Types.ObjectId,
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
    
    var userSchemaHandle = db.model('UserModel',userSchema)
    var notesSchemaHandle = db.model('NotesModel',notesSchema)
    var contentSchemaHandle = db.model('ContentModel',contentSchema)

    return { userSchemaHandle, notesSchemaHandle, contentSchemaHandle } 
}

var { userSchemaHandle, notesSchemaHandle, contentSchemaHandle } = genAllModels()


//----------------------------------------EXPORTS----------------------------------------

exports.createUser = function(userObj){
    return userSchemaHandle(userObj).save()
}

exports.addNote = function(notesObj){
    return notesSchemaHandle(notesObj).save()
}

exports.addEntry = function(entryObj){
    return contentSchemaHandle(entryObj).save()
}

exports.checkUser = function(userObj){
    return userSchemaHandle.findOne(userObj)
}

exports.checkNote = function(notesObj){
    return notesSchemaHandle.findOne(notesObj)
}
//---------------------------------------------------------------------------------------