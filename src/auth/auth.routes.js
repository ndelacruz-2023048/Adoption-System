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
import { deleteFileOnError } from "../../middlewares/delete.file.on.errors.js"


const api = Router()

//Rutas públicas     //Middelwares
api.post('/register',
    [uploadProfilePicture.single("profilePicture"),
    //Validador de errores!!!

    registerValidator],
    //Ejecutar la validación de errores 
    deleteFileOnError
    , register)
api.post('/login', login)
api.put('/password/:_id',updatePassword)

//Rutas privadas
api.get('/test', validateJwt, test)

//Exporto las rutas
export default api