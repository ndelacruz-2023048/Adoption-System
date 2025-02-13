import mongoose, { model, Schema } from "mongoose";

const animalSchema = Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
    },
    description:{
        type:String,
        required:[true, 'Description is required'],
    },
    age:{
        type:Number,
        required:[true, 'Age is required'],
    },
    type:{
        type:String,
        required:[true,'Type is required'],
    },
    keeper:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'Keeper is required']
    },

},
{
    versionKey:false,
    timestamps:true
}
)

export default model('Animal',animalSchema)