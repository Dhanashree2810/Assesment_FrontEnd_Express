
//import Client controllers
const {addClient, updateClient, findClients, findParticularClient, deleteClient} = require('../Controller/ClientController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//insert router for client
router.post('/add',addClient)

//update router for client
router.put('/update/:_id',updateClient)

//find router for single client
router.get('/find/:_id',findParticularClient)

//find router for all clients
router.get('/findall', findClients)

//delete router for single client
router.delete('/delete/:_id', deleteClient)

module.exports = router


