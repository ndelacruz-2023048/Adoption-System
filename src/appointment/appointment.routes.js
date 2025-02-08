import { Router } from "express";
import { createAppointment, listAppointments } from "./appointment.controller.js";
import { registerAppointmentValidator } from "../../middlewares/validators.js";

const apiAppointments = Router()
apiAppointments.post('/cita',registerAppointmentValidator,createAppointment)
apiAppointments.get('/getCita',listAppointments)
export default apiAppointments