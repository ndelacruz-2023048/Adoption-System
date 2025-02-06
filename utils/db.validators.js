//Validar datos relacionados a la base de datos
import User from '../src/user/user.model.js'
export const existUsername = async(username)=>{
    const alreadyUsername = await User.findOne({username})
    if(alreadyUsername){
        console.log(`Username${username} is already taken`)
        throw new Error(`Username ${username} is already taken`)
    }
}
export const existEmail = async(email)=>{
    const alreadyEmail = await User.findOne({email})
    if(alreadyEmail){
        console.log(`Username${username} is already taken`)
        throw new Error(`Username ${username} is already taken`)
    }
}