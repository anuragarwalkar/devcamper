const mongoose = require('mongoose');


const connectDB = async () =>{
    const connection = await mongoose.connect('mongodb://localhost:27017/devcamp', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false });
    console.log(`Mongo Db connected to ${connection.connection.host}`)
}

module.exports = connectDB;