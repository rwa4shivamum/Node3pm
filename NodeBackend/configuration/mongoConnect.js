import mongoose from "mongoose";

export const connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Node3pm");
        console.log("mongodb Connected")        
    } catch (error) {
        console.log(error)
    }
}

