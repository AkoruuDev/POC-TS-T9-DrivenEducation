// tools
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// route path
import usersRoute from './routes/users.routes.js'

// config
const server = express();
dotenv.config();
server.use(cors());
server.use(express.json());
const port: string | number = process.env.PORT || 5000;

// uses
server.use('/user', usersRoute)

// listen
server.listen(port, (): void => {
    console.log(`Server is running on ${port}`)
})