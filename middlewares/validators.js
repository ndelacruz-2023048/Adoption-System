//Validar campos en la rutas

import { body } from "express-validator";
import { validateErrors } from "./validate.errors.js";

//Arreglo de validaciones (por cada ruta)
export const registerValidator = [
    body('name','Name cannot be empty').notEmpty(),
    body('surname','Surname cannot be empty').notEmpty(),
    body('email','Email cannot be empty').notEmpty().isEmail(),
    body('username','Username cannot be empty').notEmpty().toLowerCase(),
    body('password','Password cannot be empty').notEmpty().isStrongPassword().withMessage('Password must be strong').isLength({min:8}),
    body('phone','Phone cannot be empty').notEmpty().isMobilePhone(),
    validateErrors
]