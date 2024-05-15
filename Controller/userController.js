const users = require("../Models/userModels");
const jwt=require("jsonwebtoken")

exports.register = async (req, res) => {
    const { username, email,phone, password } = req.body

    try {
        const user = await users.findOne({ email })
        
        if (user) {
            res.status(400).json("user already exist please login")
        }
        
        else {
            const newUser = new users(
                { username, email,phone, password }
            )

            await newUser.save()
            res.status(201).json(newUser)
        }
    }

    catch {
        res.status(400).json("register api failed")
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body

    try{
        const user=await users.findOne({email,password})
        if(user){


            // generate token
            const token=jwt.sign({uid:user._id},process.env.JWT_SECERT_KEY)

            res.status(200).json({user,token}) //user token stored in collection
        }
        else{
            res.status(401).json("incorrect email or password")
        }
    }
    catch{
        res.status(400).json("login api failed")
    }
}

exports.getAllUsers=async(req,res)=>{
  
    try{
        const user=await users.find()
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(400).json("empty list")
        }
    }
    catch{
        res.status(400).json("get users list api failed")
    }
}

exports.getUsersCount = async (req, res) => {
    try {
        const count = await users.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json("Failed to get users count");
    }
};

exports.getProfile=async(req,res)=>{
  
   
        const _id=req.params._id
        try{
            const user=await users.findOne({_id:_id})
            res.status(200).json(user)
        }
        catch{
            res.status(400).json(" user  api failed")
        }
    }


