import Appointment from "../appointment/appointment.model.js"
import Animal from '../animal/animal.model.js'
import User from '../user/user.model.js'
import { response } from "express"



export const createAppointment =async (request,response)=>{
    try {
        const appointmentData = request.body
        const isValidAnimal = await Animal.findOne({_id:appointmentData.animalId})
        const isValidUser = await User.findOne({_id:appointmentData.userId})

        //Search appointment by date
        const isAppointmentExistSameDate = await Appointment.findOne({date:appointmentData.date})
        if(isAppointmentExistSameDate){
            return response.send({success:false,message:"Appointment already exist with this date"}) 
        }
        const appointment = new Appointment(appointmentData)
        let dateAppointmentData = new Date(appointmentData.date)
        const listAppointments = await Appointment.find()
        // console.log(date.getMonth())
        listAppointments.forEach((appointment)=>{
            let date = new Date(appointment.date)
            let date1 =`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
            let date2 = `${dateAppointmentData.getFullYear()}-${dateAppointmentData.getMonth()}-${dateAppointmentData.getDate()}`
            if(date1 === date2){
                return response.send({success:false,message:"Appointment already exist in this day"})
            }
        })

        if(isValidAnimal && isValidUser && !isAppointmentExistSameDate){
            await appointment.save()
            return response.send(appointmentData)  
        }else{
            return response.send({success:false,message:"User or Animal Id is invalid"})
        }

       
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

