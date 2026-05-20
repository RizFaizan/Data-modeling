const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({}, { timestamps: true });

const Doctor = mongoose.model("Doctor", doctorSchema);


module.exports = Doctor;