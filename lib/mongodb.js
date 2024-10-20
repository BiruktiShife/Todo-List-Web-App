import mongoose from "mongoose";

export default async function connectMongoDB  (){
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Erro connecting to database: ", error);
  }
};
