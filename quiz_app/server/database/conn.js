import mongoose, { mongo } from "mongoose";

export default async function connect(){
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database Connected")
}