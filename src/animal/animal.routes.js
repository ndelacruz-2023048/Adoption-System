import { Router } from "express";
import { createAnimal, deleteAnimal, getAnimals, testAnimal, updateAnimal } from "./animal.controller.js";

const apiAnimal = Router();

apiAnimal.get('/animal',getAnimals)
apiAnimal.post('/animal',createAnimal)
apiAnimal.put('/animal/:id',updateAnimal)
apiAnimal.delete('/animal/:id',deleteAnimal)

export default apiAnimal

