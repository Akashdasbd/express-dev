import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import devRoute from "./routes/dev.js";
import studentRoute from "./routes/student.js";

// config dotenv
dotenv.config();

// express initialize
const app = express();

// express support 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// static folder
app.use(express.static('public'));
// middlewares

// port 
const PORT = process.env.PORT || 9090;

// routes

app.use(devRoute);
app.use(studentRoute);

// Server Listen

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})