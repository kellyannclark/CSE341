const  mongoose = require("mongoose");
const URI = "mongodb+srv://thefaithseed:Saint69!@cluster0.trwmv1g.mongodb.net/";

const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log("db connected..!");
};

module.exports = connectDB;