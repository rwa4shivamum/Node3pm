import express, { Router } from 'express'
import { createManyStudents, createStudents, deleteSingleStudent, getAllStudents, getStudents, updateSingleStudent } from '../controllers/createStudents.js'


export const crudRouter = Router()

crudRouter.post("/create", createStudents)

crudRouter.post("/insertmany", createManyStudents)

crudRouter.get("/getSingleStudent/:id", getStudents);

crudRouter.get("/getAll", getAllStudents);

crudRouter.patch("/updateSingleStudent", updateSingleStudent);

crudRouter.delete("/deleteSingleStudent", deleteSingleStudent)