
const express = require('express')

const mongoose = require('mongoose')

const app = express()

const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/AssesmentDB')
.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
})

app.listen(8080, () => {
    console.log("Server running");
})


//Main Router for Client
const clientRoute = require('./Router/ClientRouter')
app.use('/client',clientRoute)

//Main Router for Client User
const clientUserRoute = require('./Router/ClientUserRouter')
app.use('/user',clientUserRoute)


//Main Router for Company
const companyRoute = require('./Router/CompanyRouter')
app.use('/company',companyRoute)


