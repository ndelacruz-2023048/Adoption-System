import { Router } from "express";
import { getAllUsers, getUser, updateUser } from "./user.controller.js";
import { validateJwt } from "../../middlewares/validate.jwt.js";
import { updateUserValidator } from "../../middlewares/validators.js";

const api = Router()

api.get('/getUsers',getAllUsers)
api.get('/getUser/:id',validateJwt,getUser)
api.put('/updateUser/:id',[validateJwt,updateUserValidator],updateUser)
export default api