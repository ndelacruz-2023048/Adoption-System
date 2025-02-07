import Appointment from "../appointment/appointment.model.js"
import Animal from '../animal/animal.model.js'
import User from '../user/user.model.js'
import { response } from "express"

const validTime = (newDate)=>{
    let fecha = new Date(newDate)
    console.log(typeof fecha)
}

export const createAppointment =async (request,response)=>{
    try {
        const appointmentData = request.body
        const isValidAnimal = await Animal.findOne({_id:appointmentData.animalId})
        const isValidUser = await User.findOne({_id:appointmentData.userId})
        const appointment = new Appointment(appointmentData)
        const dateSplit = appointmentData.date.split('T');
        const dateToValid = dateSplit[0]
        const timeToValid = dateSplit[1]
        validTime(dateToValid)
        // !isValidUser ? response.send({success:false,message:"User Id is invalid"}) : appointment.save()
        isValidAnimal && isValidUser ? appointment.save() && response.send(appointmentData)  : response.send({success:false,message:"User or Animal Id is invalid"})
    } catch (error) {
        console.log(error)
        response.status(500).send(
            {message:'General error from server',error}
        )
    }
}

export const listAppointments = async (request,response)=>{
    try {
        let data = await Appointment.find()
        response.send(data)
    } catch (error) {
        response.status(500).send({sucess:false,message:"General error server",error})
    }
}

