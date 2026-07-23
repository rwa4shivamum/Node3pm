import { Employee } from "../model/employeeSchema.js"

export const EmployeeCreate = async(req,res) =>{
    try {
        const {name, email , age, department, salary} = req.body
        if(!name || !email || !age || !department || !salary){
            res.status(400).json({
                status:false,
                message:"some fields are missing"
            })
        }
        const employeeFoundInDb = await Employee.find({email})
        if(employeeFoundInDb){
            res.status(409).json({
                status:false,
                message:'Data was already exist'
            })
        }
        const createDataInDb = await Employee.create({name, email, age, department, salary})
        res.status(201).json({
            success:true,
            message:`Employee Got created in DB`
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:`Error in EmployeeCreate ${error.message}`
        })
    }
}

export const getAllEmploye = async(req, res) =>{
    try {
        const allEmployee = await Employee.find()
        res.status(200).json({
            status:true,
            message:"Employee found Successfully",
            data:allEmployee
        })
    } catch (error) {
        res.json({
            status:false,
            message:`Error in finding the all employee ${error.message}`
        })
    }
}

export const updateEmployee = async(req, res) =>{
    try {
        const {id} = req.query
        const { name, email, age, department, salary } = req.body;
        const employeeFoundInDb = await Employee.find({ email });
        if (!employeeFoundInDb) {
          res.status(409).json({
            status: false,
            message: "Employee Not Found",
          });
        }
        const employee = await Employee.findByIdAndUpdate(id,req.body,{new:true})
        res.json({
            status:true,
            message:"Employee got updated"
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:`Error in updating the Employee ${error.message}`
        })
    }
}

export const deleteEmployee = async(req, res)=>{
    try {
        const {id} = req.query
        await Employee.findByIdAndDelete({id})
        res.json({
            status:true,
            message:'Employee got deleted successfully'
        })
    } catch (error) {
        res.json({
            status:false,
            message:`Error while deleting the employee ${error.message}`
        })
    }
}