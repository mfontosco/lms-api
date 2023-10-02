// index.js
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

import  UserRoute from "./routes/auth.js"
import ProfileRoute from "./routes/profile.js"

const app = express();

app.use(cors());
app.use(express.json(express.json({limit:"50mb"})))
app.use(bodyParser.json());

// Routes and middleware setup here...
app.use("/api/v1/user",UserRoute)
app.use("/api/v1/profile",ProfileRoute)
app.get("/get",(req,res)=>{
    res.send("backend server is working successfully")
})

const port = 8000 || process.env.PORT

app.listen(port,(err)=>{
    if(err){
        console.log("err===>",err)
    }
    console.log(`server is running on ${port}`)
})
