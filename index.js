require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./db')

const Carro = require('./routes/Carro')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "/*");
    res.header("Access-Control-Allow-Methods", 'GET,POST','PUT','DELETE');
    app.use(cors())
    next();
})
app.use(cors())



app.get("/", (req, res)=>{
    res.send("Drive UNILAB-CARS")
})

app.use("/carro", Carro)

const port = process.env.PORT
app.listen(port, console.log("Servidor funcionando!", port))