const hotels = require("../Models/hotelModels");

exports.addHotel = async (req, res) => {
    const {   name, address, email,phone, city,state, image, rating } = req.body

    

    try {
       
        const newHotel = new hotels({
             name, address, email,phone, city,state, image, rating
        })
        await newHotel.save()
        res.status(200).json("Hotel details added")
    }
    catch {
        res.status(400).json("add to hotel api failed")
    }
}

exports.getAllHotel=async(req,res)=>{
  
    try{
        const hotel=await hotels.find()
        if(hotel){
            res.status(200).json(hotel)
        }
        else{
            res.status(400).json("empty list")
        }
    }
    catch{
        res.status(400).json("get hotel list api failed")
    }
}

exports.getHotel=async(req,res)=>{
    const _id=req.params._id
    try{
        const hotel=await hotels.findOne({_id:_id})
        res.status(200).json(hotel)
    }
    catch{
        res.status(400).json(" hotel  api failed")
    }
}

exports.updateHotel = async (req, res) => {
    const { _id } = req.params;
   
    try {
        const updatedHotel = await hotels.findByIdAndUpdate(_id, req.body, { new: true });
        if (updatedHotel) {
            res.status(200).json(updatedHotel);
        } else {
            res.status(200).json("Hotel details updated");
        }
    } catch (error) {
        
        res.status(400).json("Hotel update API failed");
    }
};




exports.removeHotel = async (req, res) => {
    const { _id } = req.params
    try {
        await hotels.deleteOne({ _id })

        res.status(200).json("Hotel removed ")

    }
    catch {
        res.status(400).json("delete hotel api failed")
    }
}

exports.getHotelCount = async (req, res) => {
    try {
        const count = await hotels.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json("Failed to get hotel count");
    }
};