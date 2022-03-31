const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
email: {type: String, unique:true, lowercase:true },
password: String,
username: String.apply,
gender: {
    type: String,
    enum: ['MALE', 'FEMALE']
},
PHONE: Number
})

module.exports=mongoose.model('User', userSchema);