const mongoose = require('mongoose')

const AddressBookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        max:10,
        unique:true
    }
},
    {timestamps:true}
)

module.exports = mongoose.model('AddressBook',AddressBookSchema)