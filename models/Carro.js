const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
    status:String,
    matricula:String,
    marca:String,
    tipo:String,
    capacidade:Number
    
},
    {timestamps: true}
);

module.exports = mongoose.model("Carro", CarroSchema);