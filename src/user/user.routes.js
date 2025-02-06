import { Router } from "express";
import { getAllUsers, getUser } from "./user.controller.js";
import { validateJwt } from "../../middlewares/validate.jwt.js";

const api = Router()

api.get('/getUsers',getAllUsers)
api.get('/getUser/:id',validateJwt,getUser)

export default api