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