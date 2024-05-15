const bookings = require("../Models/bookingModels");

exports.addBooking = async (req, res) => {
    const {   name, phone, hotel,room, checkIn,checkOut,price } = req.body

    
 
   
    try {
        const currentDate = new Date().toISOString().slice(0, 10);
      

        const newBooking = new bookings({
            name, phone, hotel,room, checkIn,checkOut,price,totalPrice:price,  date: currentDate
        })
        await newBooking.save()
        res.status(200).json("Booking details added")
    }
    catch (error) {
        console.error(error);
        res.status(400).json("add to booking api failed")
    }
}


exports.getAllBooking=async(req,res)=>{
  
    try{
        const booking=await bookings.find()
        if(booking){
            res.status(200).json(booking)
        }
        else{
            res.status(400).json("empty list")
        }
    }
    catch{
        res.status(400).json("get booking list api failed")
    }
}

exports.getBooking=async(req,res)=>{
    const _id=req.params._id
    try{
        const booking=await bookings.findOne({_id:_id})
        res.status(200).json(booking)
    }
    catch{
        res.status(400).json(" booking  api failed")
    }
}

exports.updateBooking = async (req, res) => {
    const { _id } = req.params;
   
    try {
        const updateBooking = await bookings.findByIdAndUpdate(_id, req.body, { new: true });
        if (updateBooking) {
            res.status(200).json(updateBooking);
        } else {
            res.status(200).json("Booking details updated");
        }
    } catch (error) {
        
        res.status(400).json("Booking update API failed");
    }
};




exports.removeBooking = async (req, res) => {
    const { _id } = req.params
    try {
        await bookings.deleteOne({ _id })

        res.status(200).json("Booking removed ")

    }
    catch {
        res.status(400).json("delete Booking api failed")
    }
}

exports.getBookingCount = async (req, res) => {
    try {
        const count = await bookings.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json("Failed to get booking count");
    }
};