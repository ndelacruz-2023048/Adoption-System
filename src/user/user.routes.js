import { Router } from "express";
import { getAllUsers, getUser, updateProfilePicture, updateUser } from "./user.controller.js";
import { validateJwt } from "../../middlewares/validate.jwt.js";
import { updateUserValidator } from "../../middlewares/validators.js";
import { deleteFileOnError } from "../../middlewares/delete.file.on.errors.js";
import { uploadProfilePicture } from "../../middlewares/multer.uploads.js";

const api = Router()

api.get('/getUsers',getAllUsers)
api.get('/getUser/:id',validateJwt,getUser)
api.put('/updateUser/:id',[validateJwt,updateUserValidator],updateUser)
api.put('/updateProfilePicture/:id',validateJwt,uploadProfilePicture.single('profilePicture'),deleteFileOnError,
        updateProfilePicture)
export default api