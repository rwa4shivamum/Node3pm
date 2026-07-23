import express from 'express'
import { crudRouter } from './routes/crudRoutes.js'
import dotenv from 'dotenv'
import { mongoConnect } from './configuration/db.config.js'
dotenv.config()


const app = express()
app.use(express.json())
await mongoConnect()
app.use("/api", crudRouter)
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})