// jshint es6

const express = require("express");

const app = express();

app.use(express.json());

app.listen(4000,()=> console.log("Server is connected successfully!!!😍"))