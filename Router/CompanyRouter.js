

//import Company controllers
const {addCompany , updateCompany , findParticularCompany , findCompanies , deleteCompany} = require('../Controller/CompanyController')

const express = require('express')

const router = express()

//insert router for Company
router.post('/add',addCompany)

//update router for Company
router.put('/update/:_id',updateCompany)

//find router for single Company
router.get('/find/:_id',findParticularCompany)

//find router for all Companies
router.get('/findall', findCompanies)

//delete router for single Company
router.delete('/delete/:_id', deleteCompany)

module.exports = router


