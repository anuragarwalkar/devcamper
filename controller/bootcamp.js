const bootcampModel = require('../models/bootcamp')

exports.getBootcamps = async (req,res,next)=>{
    try {
        const pageSize = parseInt(req.query.limit?req.query.limit:0);
        const pageNumber = parseInt(req.query.page?req.query.page:0);
        const bootcamps = await bootcampModel.find().skip((pageNumber - 1) * pageSize).limit(pageSize);
        res.status(200).json({success:true,count:bootcamps.length,data:bootcamps})   
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
        res.status(201).json({success:true,data:bootcamp})
    } catch (error) {
        res.status(400).json({success:false,data:error})
    }
};

exports.updateBootcamp = async (req,res,next) =>{
    try {
        const updatedBootcamp = await bootcampModel.findByIdAndUpdate(req.params.id,req.body, {new: true,runValidators:true})
        if(!updatedBootcamp){
         return res.status(404).json({success:false,message:'Please send a valid id'})
        }
        res.status(201).json({success:true,data:updatedBootcamp})
    } catch (error) {
        next(error);
    }
}

exports.deleteBootcamp = async (req,res,next) =>{
    try {
        const deletedBootcamp = await bootcampModel.findByIdAndDelete(req.params.id);
        if(!deletedBootcamp){
         return res.status(404).json({success:false,message:`${req.params.id} not found`})
        }
        res.status(200).json({success:true,message:`${req.params.id} Deleted`})
    } catch (error) {
        next(error)
    }
}