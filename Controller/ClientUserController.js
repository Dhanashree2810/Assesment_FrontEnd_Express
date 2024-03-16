
const clientUserModel = require('../Model/ClientModel')

async function addClientUser(req, res) {

    try {
        const{clientname,clientId,username,deletedAt,active} = req.body

        const data = new clientUserModel({
            clientname,
            clientId,
            username,
            deletedAt,
            active        
        });

        const clientUserData = await data.save();
        res.status(201).send({ msg: "Client User added successfully", clientUserData });
    } catch (err) {
        res.status(400).send({ err });
    }
}

async function updateClientUser(req, res) {
    try {
        const {clientname,clientId,username,active } = req.body

        const data = await clientUserModel.updateOne(
            { _id: req.params._id },
            { $set: 
                { 
                    clientname,clientId,username,active
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

async function findClientUsers(req, res) {
    try {
        const data = await clientUserModel.find()
        res.status(200).send({ data })
    }

    catch (err) {
        res.status(400).send(err)
    }
}

async function findParticularClientUser(req, res) {
    try {
        const data = await clientUserModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Client User doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


async function deleteClientUser(req, res) {
    try {
        const data = await clientUserModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Client User deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { addClientUser, updateClientUser, findClientUsers, findParticularClientUser, deleteClientUser }