const mongoose = require('mongoose');

const assetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enums: ["LATPTOP", "DESKTOP", "CPU", "FURNITURE"],
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    condition: {
        type: String,
        enums: ["NEW", "OLD", "REPAIR"]
    }
}, { timestamps: true });

const Assets = mongoose.model('Assets', assetsSchema);


module.exports = Assets;