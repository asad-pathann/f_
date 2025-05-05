import mongoose from "mongoose"

 export const ConnectDB = async(userData)=>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`server  mongoDB server stated ${mongoose.connection.host.rainbow}`)
 }