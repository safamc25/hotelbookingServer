require('dotenv').config()

const express=require('express')

const cors=require('cors')

const router=require('./Routes/routes')

const hotelServer=express()

hotelServer.use(cors())

hotelServer.use(express.json())

require('./Connections/connection')

hotelServer.use(router)






const PORT=8000 || process.env.port
hotelServer.listen(PORT,()=>{
    console.log(`_________________Hotel Server started at Port Number ${PORT}_________________`);
})