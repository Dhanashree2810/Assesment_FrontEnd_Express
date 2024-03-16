
const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({

    clientname: {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    companyname : {
        type: String,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
    },
    email:{
        type: String,
        required: true,
        unique : true,       
    },
    phone: {
        type: Number,
        required: true
    },
    
}, { timestamps: true })


module.exports = mongoose.model('client', clientSchema)