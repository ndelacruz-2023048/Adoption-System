import { Schema } from "mongoose";

const appointmentSchema = Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    fecha:{
        type:Date,
        required:[true,'Date is required']
    },
    state:{
        type:String,
        enum: ['ACEPTATION', 'CREATED','FINALIZATION']
    },
    user:{
        type:String,
        
    },
    animal:{

    }

})