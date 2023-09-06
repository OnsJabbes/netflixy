import express  from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import http from "http" 
import mongoose from "mongoose"
import "dotenv/config"


const app = express ();

app.use ( cors());
app.use(express.json())
app.use (express.urlencoded({extended : false}))
app.use (cookieParser())

const port = process.env.PORT|| 5000 ;

const server = http.createServer(app) ;

mongoose.connect(process.env.MONGODB_URL).then(()=> {
    console.log("mongodb connected") ; 
    server.listen(port , () => {
        console.log('server is listening on port 5000 ');
    });
}).catch((err) => {
    console.log ({err}) ; 
    precess.exit (1) ; 
}) ; 