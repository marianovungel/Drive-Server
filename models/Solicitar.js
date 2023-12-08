const mongoose = require('mongoose');

const SolicitarSchema = new mongoose.Schema({
    status:String,
    processo:String,
    data:String,
    destino:String,
    capacidade:Number,
    user:String,
    user:String,
    userid:String,
    
},
    {timestamps: true}
);

module.exports = mongoose.model("Solicitar", SolicitarSchema);