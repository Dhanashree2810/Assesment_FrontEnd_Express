
const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyname: {
        type:String,
        required: true
    },
    relatedcompanyname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
    },
    username: {
        type:String,
        required : true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },

    
}, { timestamps: true })


module.exports = mongoose.model('company', companySchema)