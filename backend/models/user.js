// const mongoose=require('mongoose')

// const userSchema=new mongoose.Schema({
//     name:{type: String, required:true},
//     email:{type: String, required:true},
//     password:{type: String, required:true}
// })

// const user=mongoose.model("userModel",userSchema)
// module.exports=user


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['farmer', 'businessman'], // Only allow these two options
        required: true 
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
