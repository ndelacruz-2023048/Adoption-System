import { Router } from "express";
import { createAppointment, listAppointments } from "./appointment.controller.js";

const apiAppointments = Router()
apiAppointments.post('/cita',createAppointment)
apiAppointments.get('/getCita',listAppointments)
export default apiAppointments