import express, { Router } from 'express'
import { createStudents } from '../controllers/createStudents.js'


export const crudRouter = Router()

crudRouter.use("/create", createStudents)