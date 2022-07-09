const express = require('express');
const router = express.Router();
const departmentService = require('./department.service');


router.post('/adddepartment', addDepartment);
router.get('/allDepartment', getAll);

module.exports = router;


function addDepartment(req, res, next) {
    console.log("here is dept request ", req.body)
    departmentService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function getAll(req, res, next) {
    console.log("here is get all Companies")
    departmentService.getAll()
        .then(dept => res.json(dept))
        .catch(err => next(err));
}