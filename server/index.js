
import {} from 'dotenv/config'

import express from "express";
import cors from "cors";
import passport from 'passport';

import session from 'express-session';


// API
import Auth from "./API/auth.js";


// config
import routeConfig from "./config/routeConfig.js"

// mongodb connection
import ConnectDB from './database/connection.js';

const app = express();


// application middleware
app.use(express.json());
app.use(session({resave: false,
     saveUninitialized: true,
     secret:"UserToken"}));
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


routeConfig(passport);

// application routes
app.use("/auth",Auth);


app.get("/",(req,res)=> res.json({"message":"Setup done successfully"}))

app.listen(8080,()=> {
    ConnectDB()
    .then(()=>console.log("Server is connected successfully!!!😍"))
    .catch(()=>console.log("Server is running but database is not connected!"))  
}
)