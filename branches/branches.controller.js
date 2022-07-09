const express = require('express');
const router = express.Router();
const branchService = require('./branches.service');


router.post('/addBranch', addCompanyBranch);
router.get('/allbranches', getAllBranches);

module.exports = router;


function addCompanyBranch(req, res, next) {
    console.log("here is branchrequest ", req.body)
    branchService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

// function getCurrent(req, res, next) {
//     companyService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }
function getAllBranches(req, res, next) {
    console.log("here is get all branches")
    branchService.getAll()
        .then(branch => res.json(branch))
        .catch(err => next(err));
}