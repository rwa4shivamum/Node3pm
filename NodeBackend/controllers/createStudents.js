import { Student } from "../models/studentsSchema.js";


export const createStudents = async(req, res) => {
    try {
        const {name,email, password, gender, hobby, city} = req.body
        await Student.create({ name, email, password, gender, hobby, city });
        res.json({
          status: true,
          message: "I am posting the students successfully",
          data: { name, email, password, gender, hobby, city },
        });
    } catch (error) {
        res.json({
            status:false,
            message:`Error gettting ${error.message}`
        })
    }
}