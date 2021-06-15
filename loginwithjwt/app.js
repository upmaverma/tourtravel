
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


dotenv.config({path: './config.env'})
require('./db/connection');

app.use(require('./router/auth'));

app.use(express.json());


app.get('/',  (req,res)=>{
    res.send("hello world");
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});