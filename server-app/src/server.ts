import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";

dotenv.config(); //fetch values from the env file
connectDb();

const port = process.env.PORT || 5001; //get from env file
const app = express(); //create express app

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use("/api/", shortUrl);


app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})


//Dp6IinLZBhlXxOwo