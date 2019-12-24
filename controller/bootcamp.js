const bootcampModel = require('../models/bootcamp')

exports.getBootcamps = async (req,res,next)=>{
    try {
        const bootcamps = await bootcampModel.find();
        res.status(200).json({success:true,data:bootcamps})   
    } catch (error) {
        next(error);
    }
};

exports.getBootcamp = async (req,res,next) => {
    try {
        const bootcamp = await bootcampModel.findById(req.params.id);
        res.status(200).json({success:true,data:bootcamp})
    } catch (error) {
        next(error)
    }
};

exports.createBootcamp = async (req,res,next) =>{
    try {
        const bootcamp = await bootcampModel.create(req.body);
        res.status(200).json({success:true,data:bootcamp})
    } catch (error) {
        res.status(400).json({success:true,data:error})
    }
};

exports.updateBootcamp = async (req,res,next) =>{
    try {
        const updatedBootcamp = await bootcampModel.findByIdAndUpdate(req.params.id,req.body, {new: true,runValidators:true})
        if(!updatedBootcamp){
         return res.status(404).json({success:false,message:'Please send a valid id'})
        }
        res.status(200).json({success:true,data:updatedBootcamp})
    } catch (error) {
        next(error);
    }
}

exports.deleteBootcamp = (req,res,next) =>{
 res.status(200).json({success:true,msg:`deleting ${req.params.id}`})
}