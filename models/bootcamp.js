const mongoose = require('mongoose');

const BootcampShema = new mongoose.Schema({
    name: {type:String,
        required:[true,'Please add a name'],
        unique:true,trim:true,
        maxlength:[50,'Name could not be more that 50 characters']},
    slug:String,
    description: {type:String,
        required:[true,'Please add a description'],
        maxlength:[500,'Description could not be more that 500 characters']},
    website: {type:String,
        match:[/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,'Please use a valid URL']},
    phone: {type:String,maxlength:[20,'Please send a valid phone']},
    email: {type:String,
    match:[/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,'Please send a valid email address']},
    careers:{type:[String],required:true,enum:[
        'Web Development',
        'Mobile Development',
        'UI/UX',
        'Data Science',
        'Business',
        'Other'
    ]} ,
    photo:{type:String,
    default:'no-photo.jpg'},
    housing: {type:Boolean,default:false},
    jobAssistance: {type:Boolean,default:false},
    jobGuarantee: {type:Boolean,default:false},
    acceptGi: {type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now},
    value:{type:Number}
})

module.exports = mongoose.model('bootcampModel',BootcampShema);