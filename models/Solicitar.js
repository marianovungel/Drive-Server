const mongoose = require('mongoose');

const SolicitarSchema = new mongoose.Schema({
    status:{type:String,default: "Pendente"},
    user:String,
    userid:String,
    execution:{ type:Boolean, default: false},
    carroId:String,
    nome:String,
    sobrenome:String,
    siape:String,

    UnidadeRequi:String,
    EmailRequi:String,
    Telefone:String,

    Atividade:String,
    Objectivo:String,
    Rua:String,
    Bairro:String,
    Cidade:String,
    PontoRef:String,
    Cep:String,
    Hora:String,
    date:String,
    Passageiros:Number,

    RuaD:String,
    BairroD:String,
    CidadeD:String,
    PontoRefD:String,
    CepD:String,
    HoraD:String,

    dataR:String,
    PassageiroR:Number,

    

    parada:String,
    NomePassaEndereco:String,
    Motivo:String,

    NomeRespons:String, 
    SobrenomeRespons:String, 
    SiapeRespons:String, 
    TelefoneRespons:String, 

    processo:String,
    capacidade:Number,
    
    Lista:[Object]
},
    {timestamps: true}
);

module.exports = mongoose.model("Solicitar", SolicitarSchema);