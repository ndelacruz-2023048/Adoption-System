import { Router } from "express";
import { createAnimal, testAnimal } from "./animal.controller.js";

const apiAnimal = Router();

apiAnimal.get('/animal',testAnimal)
apiAnimal.post('/animal',createAnimal)

export default apiAnimal

