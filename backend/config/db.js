import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://srishwanth02:LtJlvvHRJec5EfkJ@cluster0.wv67hbs.mongodb.net/food-delivery')
    .then(()=>console.log("DB connected"));
}