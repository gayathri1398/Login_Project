// jshint es6


import express from "express";

// API
import Auth from "./API/auth.js";

const app = express();

// application middleware
app.use(express.json());


// application routes
app.use("/auth",Auth);


app.get("/",(req,res)=> res.json({"message":"Setup done successfully"}))

app.listen(4000,()=> console.log("Server is connected successfully!!!😍"))