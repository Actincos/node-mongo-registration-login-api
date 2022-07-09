const config = require('config.json');
const db = require('_helpers/db');


const User = db.User;
const Company= db.Company;
const Department = db.Department;
const BusinessService = db.BusinessService;

module.exports = {
    
    // getById,
    getAll,
    create,
    // update,
    // delete: _delete
};

async function getAll() {
    return await BusinessService.find();
    // return await Company.find();
}


async function create(userParam) {
    const dept = new BusinessService(userParam);
    await dept.save();
}