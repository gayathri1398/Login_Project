
import {} from 'dotenv/config'

import express from "express";

// API
import Auth from "./API/auth.js";

// mongodb connection
import ConnectDB from './database/connection.js';

const app = express();


// application middleware
app.use(express.json());


// application routes
app.use("/auth",Auth);


app.get("/",(req,res)=> res.json({"message":"Setup done successfully"}))

app.listen(8080,()=> {
    ConnectDB()
    .then(()=>console.log("Server is connected successfully!!!😍"))
    .catch(()=>console.log("Server is running but database is not connected!"))  
}
)