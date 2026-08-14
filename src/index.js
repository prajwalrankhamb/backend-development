// require('dotenv').config({path: './.env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: './.env'
});

app.on("error",(error) => {
    console.log("Error",error);
    throw error
})

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`app is listing on port: ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGODB Connection Failed !!!", err );
    
})











/*
import express from "express";

const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Errror" , (error) => {
            console.log("ERRR",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listning on port ${process.env.port}`);
            
        })

    } catch (error) {
        console.log(error);
        throw error;
    }
} )()

*/