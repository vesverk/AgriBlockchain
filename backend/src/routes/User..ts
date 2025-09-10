import { Request,Response } from "express";
import { Router } from "express";
import z, { object, string, success } from "zod"
import jwt from "jsonwebtoken"
import { PrismaClient,Role } from "@prisma/client"; 
import bcrypt from "bcrypt"
import { authentication, Logging } from "../middleware/auth.js";

export function generateToken(username:string,email:string,firstName:string,lastName:string){
    const accessToken= jwt.sign({username,email},process.env.ACCESS_TOKEN_SECRET as string)
    const refreshToken=jwt.sign({username,email,firstName,lastName},process.env.REFREAH_TOKEN_SECRET as string)
    return {accessToken,refreshToken}
}

interface jwtPayload{
    username:string,
    email:string
}

const roles=["Consumer","Farmer","Distributor","Retailer","Admin"]
const client=new PrismaClient()

export const userRouter=Router()
const userSchema=z.object({
    username:z.string().regex(/^\S+$/, "Username cannot contain spaces"),
    password:z.string(),
    firstName:z.string(),
    lastName:z.string(),
    email:z.string().email(),
    role:z.enum(roles)
})

userRouter.post("/signup",async (req:Request,res:Response):Promise<any>=>{
    try {
    const details=userSchema.safeParse(req.body)
    if(details.success != true) return res.status(400).json({message:"No data collected"})
    
    const {username,email,firstName,lastName,password,role}=details.data
    const hashedPassword=await bcrypt.hash(password,10)

    const userCreated=await client.user.create({
        data:{
            username,
            email,
            firstName,
            lastName,
            role:role as Role,
            password:hashedPassword 
        }
    })
    if(!userCreated) return res.status(400).json({message:"User not created"}) 
    
        res.status(200).json({message:"User created successfully"})
    } catch (error) {
        console.log(error)
    }
})

userRouter.post("/signin",async (req:Request,res:Response)=>{
     const userSchema=z.object({
        username:z.string().regex(/^\S+$/, "Username cannot contain spaces"),
        password:z.string()
     })
    try {
     const details=userSchema.safeParse(req.body)

     if(details.success!=true) return res.status(400).json({message:"No data collected"})
    
    const {username,password}=details.data
    const user=await client.user.findFirst({
        where:{
            username
        }
    })
    if(!user) return res.status(400).json({message:"User not found"})
    
    const verified=await bcrypt.compare(password,user.password)
    if(!verified) return res.status(401).json({message:"Wrong password"})
    const {accessToken,refreshToken}=generateToken(user.username,user.email,user.firstName,user.lastName)

    const updateUser=await client.user.update({
        where:{
            username
        },
        data:{
            refreshToken
        }
    })
    if(!updateUser) return res.json({message:"User refresh token not added"})

    res.status(200).json({message:"User Signed in",accessToken})
        
    } catch (error) {
        console.log(error)
    }   
     
})


userRouter.post("/update-profile",authentication,async(req:Logging,res)=>{
    const id=req.id
    const user=await client.user.findFirst({
        where:{
            id:id as number
        }
    })
    const userSchema=z.object({
        email:z.string().optional(),
        password:z.string().optional(),
        firstName:z.string().optional(),
        lastName:z.string().optional(),
    })
    const username=user?.username
    const resp=userSchema.safeParse(req.body)
    if(resp.data!=success) return res.status(404).json({message:"no input for changes"})
    const {email,password,firstName,lastName} =resp.data
    const {refreshToken,accessToken}= generateToken(username as string,email as string,firstName as string,lastName as string)
    const updateUser=await client.user.updateMany({
        where:{
            id:id as number,
        },
        data:{
            email:email as string,
            password:password as string,
            firstName:firstName as string,
            lastName:lastName as string,
            refreshToken
        }
    })
    if(!updateUser) return res.status(402).json({message:"User data not updated"})
    res.status(200).json({message:"user data updated",accessToken})
})

userRouter.get("/user-details",authentication,async(req:Logging,res):Promise<any>=>{
    const id=req.id
    const user=await client.user.findFirst({
        where:{
            id:id as number
        }
    })
    if(!user) return res.status(404).json({message:"User not found"})

    res.status(200).json({message:"user found",user})
})  