const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/login');
        console.log('connect to DB');
    }
    catch(error){
        console.error("failed to connect");
    }
}

module.exports=connectDB;