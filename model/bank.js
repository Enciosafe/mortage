const { Schema, model } = require('mongoose')

const interestPersentage = /^[0-9]{2}%$/


const contactSchema = Schema({
    name: {
        type: String,
        required: true
    },
    interestRate: {
        type: Number,
        required: [true, 'min 10% - max 99%'],
        match: interestPersentage
    },
    maxLoan: {
        type: Number,
        default: 0,
    },
    minDownPayment: {
        type: Number,
        default: 0
    },
    loanTerm: {
        type: Number,
        require: true,
    },
}, { versionKey: false, timestamps: true })

const Bank = model('bank', contactSchema)

module.exports = Bank