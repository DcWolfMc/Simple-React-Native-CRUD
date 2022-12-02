import axios from "axios";
import { StudentType } from "../@types/@types";

export const api = axios.create({
    baseURL: "http://localhost:3000"
});

export async function getStudentsList(){
   return await api.get("/students")
}

export async function getStudentById(id:string) {
    return await api.get(`/students/${id}`)
}
export async function CreateNewStudent(student:StudentType) {
   return await api.post(`/students`,student)
}
export async function EditStudentById(id:string, student:StudentType ) {
    return await api.patch(`/students/${id}`,student)
}
export async function DeleteStudentById(id:string) {
    return await api.delete(`/students/${id}`)
}