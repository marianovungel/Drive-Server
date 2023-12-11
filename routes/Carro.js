const express = require('express')
const router = express.Router()
const Carro = require('../models/Carro')

router.get("/", async(req, res)=>{
    try {
        const response = await Carro.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.get("/:id", async(req, res)=>{
    try {
        const response = await Carro.findById(req.params.id);
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.post("/", async(req, res)=>{
    try {
        const newData = new Carro(req.body);
        await newData.save()
        res.status(200).json("Cadastrado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao cadastrar!")
    }
})
router.put("/:id", async(req, res)=>{
    try {
        await Carro.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.delete("/:id", async(req, res)=>{
    try {
        await Carro.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})

module.exports = router;