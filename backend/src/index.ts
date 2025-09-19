
import dotenv from "dotenv";
dotenv.config();
import type{ Response } from "express";
import type { Request } from "express";
import express from "express";
import cors from "cors";
import mainRouter from "./routes/main";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req : Request,res:Response)=>{
    res.send("Hello World");

});

app.listen(3000,()=>{console.log("Server is running on port 3000")})
