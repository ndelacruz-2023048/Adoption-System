//Gestionar lógica de autenticación
import User from '../user/user.model.js'
import { checkPassword, encrypt } from '../../utils/encryp.js'
import { generateJwt } from '../../utils/jwt.js'

export const test = (req, res)=>{
    console.log('Test is running')
    res.send({message: 'Test is running'})
}

//Register
export const register = async(req, res)=>{
    try{    
        //Capturar los datos
        let data = req.body
        //Crear el el obejto del modelo agregandole los datos capturados
        let user = new User(data)
        //Encriptar la password
        user.password = await encrypt(user.password)
        //Asignar rol por defecto
        // user.role = 'CLIENT'
        user.profilePicture = req.file.filename ?? null     
        //Guardar
        await user.save()
        //Responder al usuario
        return res.send({message: `Registered successfully, can be login with username: ${user.username}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'General error with user registration', err})
    }
}


//Login
export const login = async(req, res)=>{
    try{
        //Capturar los datos(body)
        let { username, password } = req.body
        //Validar que el usuario exista
        let user = await User.findOne({username}) //{username} = {username: username}
        //Verificar que la contraseña coincida
        if(user && await checkPassword(user.password, password)){
            //Generar el token
            let loggedUser = {
                uid: user._id,
                username: user.username,
                name: user.name,
                role: user.role
            }
            let token = await generateJwt(loggedUser)
            return res.send(
                {
                    message: `Welcome ${user.name}`,
                    loggedUser,
                    token
                }
            )
        }
        //Responder al usuario
        return res.status(400).send({message: 'Invalid credentials'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'General error with login function', err})
    }
}

//Update Password
export const updatePassword = async(request,response)=>{
    try {
        let {_id, oldPassword, newPassword} = request.body
        let selectUserById = await User.findOne({_id})
        let isValidPassword = await checkPassword(selectUserById.password,oldPassword)
        let responseNewPassword = await User.findByIdAndUpdate({_id:_id},{password:newPassword},{new:true})
        console.log(responseNewPassword)
        response.send({message:'Update password'})
    } catch (error) {
        response.status(500).send({message: 'General error with password update', error})
    }
}