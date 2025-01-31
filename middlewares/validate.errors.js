//Validar los errores del middelware

import { validationResult } from "express-validator"

export const validateErrors = (request,response,next)=>{
    const errors = validationResult(request)
    if(!errors.isEmpty()){
        return response.status(400).send({message:'Error with data', errors:errors.errors})
    }
    next()
}