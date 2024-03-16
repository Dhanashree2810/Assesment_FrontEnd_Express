
const mongoose = require('mongoose')

const clientUserSchema = new mongoose.Schema({
    clientname: {
        type: String,
        required: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    username: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date,
        default: null
    },
    active: {
        type: Boolean,
        default: true
    }
    
}, { timestamps: true })


module.exports = mongoose.model('user', clientUserSchema)