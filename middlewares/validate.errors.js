//Validar los errores del middelware

import { validationResult } from "express-validator"

export const validateErrors = (request,response,next)=>{
    const errors = validationResult(request)
    if(!errors.isEmpty()){
        return next(errors)
    }
    next()
}
export const validateErrorsWithoutFiles = (request,response,next)=>{
    const errors = validationResult(request)
    if(!errors.isEmpty()){
        return response.status(400).send({
            sucess:false,
            message:'Error with validations',
            errors:errors.errors
        })
    }
    next()
}

export const validateErrorsAppointment = (request,response,next)=>{
    const errors = validationResult(request)
    if(!errors.isEmpty()){
        return response.status(400).send({
            sucess:false,
            message:'Error with validations',
            errors:errors.errors
    })
}
    next()
}