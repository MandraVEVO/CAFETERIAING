import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "../routes/index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/',(req,res)=> {
    res.send('Esta es la raiz de mi Cafeteria');
})

routes(app);

app.listen(port, ()=>{
    console.log('Server is running on http://localhost:'+port); 
});