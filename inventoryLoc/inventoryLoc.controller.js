const express = require('express');
const router = express.Router();
const companyService = require('./company.service');
const auditService= require('./company.service');


router.post('/addCompany', addCompany);
router.get('/allComapny', getAllC);


module.exports = router;


function addCompany(req, res, next) {
    // console.log("here is request ", req.body)
    companyService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

// function getCurrent(req, res, next) {
//     companyService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }
function getAllC(req, res, next) {
    // console.log("here is get all Companies")
    companyService.getAll()
        .then(comp => res.json(comp))
        .catch(err => next(err));
}