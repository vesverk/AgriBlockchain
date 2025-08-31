import express from "express"
import dotenv from "dotenv"
import { userRouter } from "./routes/User..js";
dotenv.config()

const app=express();
app.use(express.json())


app.use("/v1/api/user",userRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server running at ${process.env.PORT}`)
})