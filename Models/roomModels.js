const mongoose = require('mongoose')

// model-schema

const roomSchema = {
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    
    hotelname: {
        type: String,
        require: true
    },
    roomname: {
        type: String,
        require: true
    },
    roomtype: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    bed: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
   
    image: {
        type: String,
        require: true
    }
   

}

// model

const rooms=mongoose.model("rooms",roomSchema)

// export

module.exports=rooms