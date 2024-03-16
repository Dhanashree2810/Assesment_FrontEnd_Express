
const companyModel = require('../Model/CompanyModel')

async function addCompany(req, res) {

    try {
        const{companyname,relatedcompanyname,username,userId} = req.body


        const data = new companyModel({
            companyname,
            relatedcompanyname,
            username,
            userId,        
        });

        const companyData = await data.save();
        res.status(201).send({ msg: "Company added successfully", companyData });
    } catch (err) {
        res.status(400).send({ err });
    }
}

async function updateCompany(req, res) {
    try {
        const {companyname,relatedcompanyname,username,userId} = req.body

        const data = await companyModel.updateOne(
            { _id: req.params._id },
            { $set: 
                { 
                    companyname,relatedcompanyname,username,userId
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

async function findCompanies(req, res) {
    try {
        const data = await companyModel.find()
        res.status(200).send({ data })
    }

    catch (err) {
        res.status(400).send(err)
    }
}

async function findParticularCompany(req, res) {
    try {
        const data = await companyModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Company doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


async function deleteCompany(req, res) {
    try {
        const data = await clientModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Company deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = {addCompany , updateCompany , findParticularCompany , findCompanies , deleteCompany}