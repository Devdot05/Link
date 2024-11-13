const express = require("express")
const app = express()
require('dotenv').config()
const port = process.env.PORT || 4700
const mongoose = require("mongoose")
const mongodb_uri = process.env.URI
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const nigerianFoods = [
    {
        id: 1,
        name: 'Jollof Rice',
        price: 500
    },
    {
        id: 2,
        name: 'Pounded Yam',
        price: 400
    },
    {
        id: 3,
        name: 'Amala',
        price: 700
    },
    {
        id: 4,
        name: 'Semo',
        price: 1900
    },
    {
        id: 5,
        name: 'pap',
        price: 500
    },
]

mongoose.connect(mongodb_uri)
.then(()=>{
    console.log('Database connected');
    
})
.catch((err)=>{
    console.log(err);
    
})

let userSchema = mongoose.Schema({
    item: String,
})

let userModel = mongoose.model("user", userSchema)


app.get('/home', (req, res)=>{
    res.send(nigerianFoods)
})

app.post("/submit", (req, res)=>{
    console.log(req.body);
    const form = new userModel(req.body,)
    form.save()
    
   
    
})


app.listen(port, ()=>{
    console.log(`Lift off! Server has stated at ${port}`);
    
})
