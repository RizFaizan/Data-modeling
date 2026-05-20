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
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Rather not say"],
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now,
        required: true
    }
}, { timestamps: true });

const Employee = mongoose.model("Employee", employeeSchema);


module.exports = Employee;