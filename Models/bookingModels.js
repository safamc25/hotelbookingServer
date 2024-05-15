const mongoose = require('mongoose')

// model-schema

const bookingSchema = {
    
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    
    hotel: {
        type: String,
        require: true
    },
    room: {
        type: String,
        require: true
    },
    checkIn: {
        type: String,
        require: true
    },
    checkOut: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
      totalPrice: {
        type: Number,
        require: true,
        default:0
    },
    date:{
        type:String,
        require:true
    }


    

}

// model

const bookings=mongoose.model("bookings",bookingSchema)

// export

module.exports=bookings