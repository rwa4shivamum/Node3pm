import express from 'express';
import {connect} from './configuration/mongoConnect.js'
import { crudRouter } from './routes/crudroutes.js';
const app = express()

app.use(express.json());

app.use("/api", crudRouter)

await connect()
app.listen(8080, ()=>{
    console.log(`Server is running on this 8080`)
})
