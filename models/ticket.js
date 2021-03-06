const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Flight = require('./flight')

const ticketSchema = new Schema ({
    seat: ({
        type: String,
        match: /[A-F][1-9]\d?/
    }),
    price: ({
        type: Number,
        min: 10,
    }),
    
    flight: {
        type: ObjectId,
        ref: 'Flight'
    },
})

module.exports = mongoose.model('Ticket',ticketSchema);