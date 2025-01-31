//Middleware de limitacion de solicitudes
import rateLimit from "express-rate-limit";

export const limiter = rateLimit(
    {
        windowMs:15* 6 *1000,//rango de tiempo
        max:150,//Cantidad de peticiones permitidas en el rango de tiempo
        message:{
            message:'You are bloqued, wait 15 minutes'
        }
    }
)
    