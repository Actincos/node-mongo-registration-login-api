const express = require('express');
const router = express.Router();
const companyService = require('./company.service');
const auditService= require('./company.service');
const companyEmployesService = require('./companyEmployes.service');


router.post('/addCompanyEmploye', addCompanyEmploye);
router.get('/allComapnyEmploye', getAll);


module.exports = router;


function addCompanyEmploye(req, res, next) {
    // console.log("here is request ", req.body)
    companyEmployesService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

// function getCurrent(req, res, next) {
//     companyService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }
function getAll(req, res, next) {
    console.log("here is get all Companies")
    companyEmployesService.getAll()
        .then(comp => res.json(comp))
        .catch(err => next(err));
}