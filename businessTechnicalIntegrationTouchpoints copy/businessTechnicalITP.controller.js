const express = require('express');
const router = express.Router();
const businessSService = require('./businessService.service');


router.post('/addbusinessService', addbusinessService);
router.get('/allbusinessService', getAll);

module.exports = router;


function addbusinessService(req, res, next) {
    console.log("here is businessService request ", req.body)
    businessSService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function getAll(req, res, next) {
    console.log("here is get all businessServices")
    departmentService.getAll()
        .then(dept => res.json(dept))
        .catch(err => next(err));
}