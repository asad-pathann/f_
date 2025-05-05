
import colors from "colors"
import express from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./Connection/Connection.js"
import { PostRouter } from "./Router/PostRoutes.js"
dotenv.config()
const app = express()
ConnectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/post',PostRouter)
app.listen(process.env.PORT , ()=> console.log(`server is started ${process.env.PORT.rainbow}`))
