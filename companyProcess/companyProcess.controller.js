const express = require('express');
const router = express.Router();
const companyProcessService = require('./companyProcess.service');

router.post('/addCompanyProcess', addCompanyProcess);
router.get('/allComapnyProcess/:id', getAllProcess);
module.exports = router;

// module.exports ={
//     compProcess
// }

// function compProcess(params) {
//     companyProcessService.create(params) 
//         // .then((res) => res.json({
//         //     // console("here is response", res);
//         // }))
//         .then()
//         .catch(err => console.log(err));
// };

function addCompanyProcess(req, res, next) {
    console.log("here is request ", req.body)
    companyProcessService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAllProcess(req, res, next) {
    console.log("here is Companies", req.params)
    companyService.getAll(req.params.id)
        .then(comp => res.json(comp))
        .catch(err => next(err));
}