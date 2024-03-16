
const clientModel = require('../Model/ClientModel')

async function addClient(req, res) {

    try {
        const{clientname,username,userId,companyname,companyId,email,phone} = req.body


        const data = new clientModel({
            clientname,
            username,
            userId,
            companyname,
            companyId,
            email,
            phone            
        });

        const clientData = await data.save();
        res.status(201).send({ msg: "Client added successfully", clientData });
    } catch (err) {
        res.status(400).send({ err });
    }
}

async function updateClient(req, res) {
    try {
        const { clientname,username,userId,companyname,companyId,email,phone } = req.body

        const data = await clientModel.updateOne(
            { _id: req.params._id },
            { $set: 
                { 
                    clientname,username,userId,companyname,companyId,email,phone
                } 
            }
        )

        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" })
        } else {
            res.status(400).send({ msg: "You haven't updated anything" })
        }
    } catch (err) {
        res.status(500).send({ err })
    }
}

async function findClients(req, res) {
    try {
        const data = await clientModel.find()
        res.status(200).send({ data })
    }

    catch (err) {
        res.status(400).send(err)
    }
}

async function findParticularClient(req, res) {
    try {
        const data = await clientModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Client doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


async function deleteClient(req, res) {
    try {
        const data = await clientModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Client deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { addClient, updateClient, findClients, findParticularClient, deleteClient }