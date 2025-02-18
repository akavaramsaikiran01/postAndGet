const mongoose=require('mongoose');
const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://akavaramsaikiran01:rgukt123@village-connect.bj3pq.mongodb.net/?retryWrites=true&w=majority&appName=village-connect');
}
module.exports=connectDB;