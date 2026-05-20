const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Rather not say"],
        required: true
    },
    joinDate: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Employee = mongoose.model("Employee", employeeSchema);


module.exports = Employee;