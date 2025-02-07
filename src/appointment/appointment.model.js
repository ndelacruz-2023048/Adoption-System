import { model, Schema } from "mongoose";

const appointmentSchema = Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    date:{
        type:Date,
        required:[true,'Date is required']
    },
    state:{
        type:String,
        enum: ['ACEPTED', 'CREATED','FINALIZATION']
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User is required']
    },
    animalId:{
        type:Schema.Types.ObjectId,
        ref:'Animal',
        required:[true,'Animal is required']
    }

})

export default model('Appointment',appointmentSchema)