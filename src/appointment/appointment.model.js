import { Schema } from "mongoose";

const appointmentSchema = Schema({
    name:{
        type:String,
        required:[true,'']
    }
})