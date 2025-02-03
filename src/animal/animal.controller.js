import Animal from '../animal/animal.model.js'
import User from '../user/user.model.js'
import mongoose from 'mongoose'

export const testAnimal = (request,response)=>{
    console.log('Test Animal is running')
    response.send({message: 'Test Animal is running'})
}

export const createAnimal = async(request,response)=>{
    try {
        let newAnimal = request.body
        // let algo = await Animal.find({keeper:new mongoose.Types.ObjectId('679c3de2af72e17c360b3e88')})
        // console.log(algo)
        
        let userRoleAdmin = await User.findOne({role:'ADMIN',_id:newAnimal.keeper})
        console.log(userRoleAdmin)
        let animal = new Animal(newAnimal)
        userRoleAdmin ? await animal.save() && response.send({message:'Animal created',animal}): response.send({message:'Keeper Id is not valid'})
        // animal.keeper = selectIdUserRoleAdmin
        // await animal.save()
        
    } catch (error) {
        console.error(error)
        return response.status(500).send({message: 'General error with animal creation', error})
    }
}

export const getAnimals = async(request,response)=>{
    try {
        return response.send(await Animal.find())
    } catch (error) {
        console.error(error)
        return response.status(500).send({message: 'General error with animal creation', error})
    }
}

export const updateAnimal = async(request,response)=>{
    try {
        let id = request.params.id
        let animalToUpdate = request.body
        let animalUpdated= await Animal.findByIdAndUpdate({_id:id},animalToUpdate,{new:true})
        return response.send({message: 'Update animal',animalUpdated})
    } catch (error) {
        return response.status(500).send({message: 'General error with animal creation', error})
    }
}

export const deleteAnimal = async(request,response)=>{
    try {
        let id = request.params.id
        let animalDeleted = await Animal.findByIdAndDelete({_id:id})

        return response.send({message:'Delete animal',animalDeleted})

    } catch (error) {
        return response.status(500).send({message: 'General error with animal creation', error})
    }
}   