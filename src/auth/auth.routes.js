//Rutas de autenticación
import { Router } from "express"
import { 
    login,
    register, 
    test, 
    updatePassword
} from "./auth.controller.js"
import { validateJwt } from '../../middlewares/validate.jwt.js'
import { registerValidator } from "../../middlewares/validators.js"
import { uploadProfilePicture } from "../../middlewares/multer.uploads.js"


const api = Router()

//Rutas públicas     //Middelwares
api.post('/register',[uploadProfilePicture.single("profilePicture"),registerValidator], register)
api.post('/login', login)
api.put('/password',updatePassword)

//Rutas privadas
api.get('/test', validateJwt, test)

//Exporto las rutas
export default api