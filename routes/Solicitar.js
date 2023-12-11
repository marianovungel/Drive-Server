const express = require('express')
const router = express.Router()
const Solicitar = require('../models/Solicitar');
const Carro = require('../models/Carro');
const Filtrar = require("../Services/Filtro").getCarro

router.get("/", async(req, res)=>{
    try {
        const response = await Solicitar.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.get("/:id", async(req, res)=>{
    try {
        const response = await Solicitar.findById(req.params.id);
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.get("/acompanhar/:id", async(req, res)=>{
    try {
        const response = await Solicitar.find({userId: req.params.id});
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.post("/", async(req, res)=>{
    try {
        const newData = new Solicitar(req.body);
        await newData.save()
        res.status(200).json("Cadastrado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao cadastrar!")
    }
})
router.post("/pesq", async(req, res)=>{
    try {
        const AllCars = await Carro.find();
        const AllSol = await Solicitar.find();
        var cars = AllCars.filter((all)=> all.status !== "Manutencao")//Livre e Reservado
        var sol = AllSol.filter((alls)=> alls.status === "Aprovado" && alls.date === req.body.date)//pedido aprovados
        
        var data = await Filtrar(cars, sol)
        
        res.status(200).json(data)
    } catch (error) {
        res.status(200).json(error.message)
    }
})
router.put("/:id", async(req, res)=>{
    try {
        await Solicitar.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})

module.exports = router;