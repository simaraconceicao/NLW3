import express from 'express'
import './database/connection'
import routes from './routes'
import errorHandler from './errors/handler'
import path from 'path'
import cors from 'cors'

import 'express-async-errors'


const PORT = 3333
const app = express()


app.use(cors())
app.use(express.json())
app.use(routes) 
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)




app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta: " + PORT)
})