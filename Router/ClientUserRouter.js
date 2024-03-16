

//import Client User controllers
const {  addClientUser, updateClientUser, findClientUsers, findParticularClientUser, deleteClientUser } = require('../Controller/ClientUserController')

const express = require('express')

const router = express()

//insert router for client User
router.post('/add',addClientUser)

//update router for client User
router.put('/update/:_id',updateClientUser)

//find router for single client User
router.get('/find/:_id',findParticularClientUser)

//find router for all client Users
router.get('/findall', findClientUsers)

//delete router for single client User
router.delete('/delete/:_id', deleteClientUser)

module.exports = router


