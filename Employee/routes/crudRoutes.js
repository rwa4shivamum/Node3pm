import express, { Router } from 'express'
import { deleteEmployee, EmployeeCreate, getAllEmploye, updateEmployee } from "../controllers/createEmployee.js";

export const crudRouter = Router()

crudRouter.post("/create", EmployeeCreate)
crudRouter.get("/getAll", getAllEmploye);
crudRouter.patch("/updateEmployee/:id", updateEmployee)
crudRouter.delete("/deleteEmployee/:id", deleteEmployee)