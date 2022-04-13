const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true,
        trim:true
    },
    id:{
        type:Number,
        required:true,
        unique:true

    },
    language:{
        type:string,
        required:true,
        trim:true
    },
    framework:{
        type:string,
        required:true,
        trim:true
    }
})

const schoolID = new mongoose.model("MenRanking", menSchema)

module.exports= schoolID