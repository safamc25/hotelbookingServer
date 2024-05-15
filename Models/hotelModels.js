const mongoose = require('mongoose')

// model-schema

const hotelSchema = {
    
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    rating: {
        
            type: Number,
            require: true
       
    }

}

// model

const hotels=mongoose.model("hotels",hotelSchema)

// export

module.exports=hotels