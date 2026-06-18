// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true })

// const User = mongoose.model('User', userSchema);

// module.exports = User;



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true        
    }
},{timestamps: true})