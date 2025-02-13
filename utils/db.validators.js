//Validar datos relacionados a la base de datos
import { isValidObjectId } from 'mongoose'
import User from '../src/user/user.model.js'
                                   //parametro || token || id(params) 
export const existUsername = async(username,user)=>{
    const alreadyUsername = await User.findOne({username})
    if(alreadyUsername && alreadyUsername._id!= user.uid){
        console.log(`Username${username} is already taken`)
        throw new Error(`Username ${username} is already taken`)
    }
}
export const existEmail = async(email,user)=>{
    console.log(user)
    const alreadyEmail = await User.findOne({email})
    if(alreadyEmail && alreadyEmail._id!=user.uid){
        console.log(`Email${email} is already taken`)
        throw new Error(`Email ${email} is already taken`)
    }
}

export const notRequiredField = (field)=>{
    if(field){
        throw new Error(`${field} is not required`)
    }

}


//Validar que sea un ID Valido
export const objectIdValid = (objectID)=>{
    if(!isValidObjectId(objectID)) { 
        throw new Error('Keeper is not a valid ObjectId')
    }
}