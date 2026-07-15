import express, { Router } from 'express'
import { createManyStudents, createStudents, getAllStudents, getStudents } from '../controllers/createStudents.js'


export const crudRouter = Router()

crudRouter.post("/create", createStudents)

crudRouter.post("/insertmany", createManyStudents)

crudRouter.get("/getSingleStudent/:id", getStudents);

crudRouter.get("/getAll", getAllStudents);