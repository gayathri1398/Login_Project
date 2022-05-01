import mongoose from "mongoose";

export default async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URL);
   } catch (error) {
       return error;
   }
}