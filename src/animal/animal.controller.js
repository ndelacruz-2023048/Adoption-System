import Animal from '../animal/animal.model.js'

export const testAnimal = (request,response)=>{
    console.log('Test Animal is running')
    response.send({message: 'Test Animal is running'})
}

export const createAnimal = async(request,response)=>{
    try {
        let newAnimal = request.body
        let animal = new Animal(newAnimal)
        await animal.save()
        response.send({message:'Animal created',animal})
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

export const deleteAnimal = async()=>{
    try {
        
    } catch (error) {
        
    }
}