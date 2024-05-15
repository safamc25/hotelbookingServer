const rooms = require("../Models/roomModels");
const hotels=require("../Models/hotelModels")

exports.addRooms = async (req, res) => {
    const {hotelname,roomname,roomtype,description, bed, price, image } = req.body

    

    try {
       
        // Fetch hotel document from MongoDB based on hotel name
        const hotel = await hotels.findOne({ name: hotelname });
        if (!hotel) {
            return res.status(404).json({ error: 'Hotel not found' });
        }

        const newRoom = new rooms({
            hotel: hotel._id, // Store hotel ID instead of hotel name
            hotelname: hotel.name,
            roomname,
            roomtype,
            description,
            bed,
            price,
            image
        });
        await newRoom.save()
        res.status(200).json("Room details added")
    }
    catch(error) {
        console.log(error);
        res.status(400).json("add to room api failed")
    }
}

exports.getAllRoom=async(req,res)=>{
  
    try{
        const room=await rooms.find()
        if(room){
            res.status(200).json(room)
        }
        else{
            res.status(400).json("empty list")
        }
    }
    catch{
        res.status(400).json("get room list api failed")
    }
}

exports.getRoom=async(req,res)=>{
    const _id=req.params._id
    try{
        const room=await rooms.findOne({_id:_id})
        res.status(200).json(room)
    }
    catch{
        res.status(400).json(" room  api failed")
    }
}



exports.updateRoom = async (req, res) => {
    const { _id } = req.params;
   
    try {
        const updateRoom = await rooms.findByIdAndUpdate(_id, req.body, { new: true });
        if (updateRoom) {
            res.status(200).json(updateRoom);
        } else {
            res.status(200).json("Room details updated");
        }
    } catch (error) {
        
        res.status(400).json("Room update API failed");
    }
};




exports.removeRoom = async (req, res) => {
    const { _id } = req.params
    try {
        await rooms.deleteOne({ _id })

        res.status(200).json("Room removed ")

    }
    catch {
        res.status(400).json("delete room api failed")
    }
}

exports.getRoomCount = async (req, res) => {
    try {
        const count = await rooms.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json("Failed to get room count");
    }
};