//Gestionar un perfil existente de usuario
import User from '../user/user.model.js'
//Obtener todos
export const getAllUsers = async (request,response)=>{
    try{
        const {limit=1, skip=0} = request.query//Params
        //Consultar
        const users = await User.find().skip(skip).limit(limit)

        if(users.length===0){
            return response.status(404).send({
                success:false,
                message: 'Users not found'
            })
        }

        return response.send({
            success:true,
            message: 'Users found:', users
        })
    }catch(errors){
        console.error(errors)
        return response.status(500).send({message: 'General error',errors})
    }
}

//Obtener uno
export const getUser = async(req, res)=>{
    try {
        //obtener el id del Producto a mostrar
        let {id} = req.params
        let user = await User.findById(id)
        if(!user) return res.status(404).send({
            success:false,
            message: 'User not found'
        })
        return res.send({
            success:true,
            message: 'User found: ', user
        })
    } catch (err) {
        console.error('General error', err)
        return res.status(500).send({
            sucess:false,
            message: 'General error', err
        })
    }
}
//Actualizar datos generales
export const updateUser=async(request,response)=>{
    try {   
        const {id} = request.params
        const data = request.body
        const update  = await User.findByIdAndUpdate(
            id,
            data,
            {new:true}
        )

        if(!update) return response.status(404).send({
            success:false,
            message:'User not found'
        })

        return response.send(
            {
                success: true,
                message: 'User updated',
                update
            }
        )


    } catch (error) {
        console.error(error)
        response.send({
            success:false,
            message:"General error",
            error
        })
    }
}

//Actualizar profilePicture
export const updateProfilePicture = async (request,response)=>{
    try {
        const {uid} = request.user
        const {filename}= request.file
        const user = await User.findByIdAndUpdate(uid,{
            profilePicture:filename
        },{new:true})
        if(!user) return response.status(404).send({
            
            sucess:false,
            message:'User not found'
        })
        return response.send({success:true,message:'User updated succesfully',user})

    } catch (error) {
        console.error(error)
        response.send({
            success:false,
            message:"General error",
            error
        })
    }
}
