//Eliminar archivos si algo sale mal
import {unlink} from 'fs/promises'//Eliminar archivos
import {join} from 'path'//Unir carpetas o archivos o carpetas

//Middelware de eliminar
export const deleteFileOnError = async(error,request,response,next)=>{
    if(request.file && request.filePath){
        const filePath = join(request.filePath,request.file.filename)
        try {
            await unlink(filePath)
        } catch (unlinkError) {
            console.log('Error deleting file',unlink)
        }
    }
    if(error.status === 400 || error.errors){
        return response.status(400).send(
            {
                success:false,
                message:'Error registering user',
                error
            }
        )
    }
    return response.status(500).send({
        success:false,
        message:error.message
    })
    
}
