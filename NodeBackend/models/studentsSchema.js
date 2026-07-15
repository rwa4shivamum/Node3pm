import mongoose from "mongoose";

const studentSchma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        reuired:true
    }
})

export const Student = new mongoose.model("srudentschema", studentSchma)