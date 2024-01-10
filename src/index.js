import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnection from "./db/connection.js";
import { app } from "./app.js";

dotenv.config({
    path:"./.env"
})

dbConnection()
.then(() => {
    app.on("error",(error) => {
        console.log("When we try to listen the error accored : ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("Server is running on Port: ",process.env.PORT)
    })
}).catch((error) => {
    console.log("MongoDb connection failed ",error);
})
