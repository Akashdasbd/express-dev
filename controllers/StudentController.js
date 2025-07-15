import { students } from "../data/students.js"


export const allStudents = (req,res)=>{
    res.status(200).json(students);
}

export const getSingleStudent = (req,res)=>{
    const {id} = req.params;
    const student = students.find((data)=>data.id == id);
    res.status(200).json(student)
}