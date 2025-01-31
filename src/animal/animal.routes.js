import { Router } from "express";
import { createAnimal, getAnimals, testAnimal, updateAnimal } from "./animal.controller.js";

const apiAnimal = Router();

apiAnimal.get('/animal',getAnimals)
apiAnimal.post('/animal',createAnimal)
apiAnimal.put('/animal/:id',updateAnimal)

export default apiAnimal

