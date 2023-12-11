const express = require('express')
const router = express.Router()
const Solicitar = require('../models/Solicitar')
const Carro = require('../models/Carro')

//aceitar solicitação

router.put("/Aprovar/:id", async(req, res)=>{
    try {
        var pedido = await Solicitar.findById(req.params.id)
        if(pedido){
            //aceitar
            var data = await Solicitar.findByIdAndUpdate(req.params.id, {
                status:"Aprovado"
            })
            res.status(204).json({message: "Sucesso"})
        }else{
            //erro message
            res.status(404).json({message: "Solicitação inexistente!"})
        }
    } catch (error) {
        res.status(404).json({message: "Erro"})
    }
})
router.put("/Reprovar/:id", async(req, res)=>{
    try {
        var pedido = await Solicitar.findById(req.params.id)
        if(pedido){
            //aceitar
            var data = await Solicitar.findByIdAndUpdate(req.params.id, {
                status:"Rejeitado"
            })
            res.status(204).json({message: "Sucesso"})
        }else{
            //erro message
            res.status(404).json({message: "Solicitação inexistente!"})
        }
    } catch (error) {
        res.status(404).json({message: "Erro"})
    }
})