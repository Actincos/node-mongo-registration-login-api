const config = require('config.json');

const db = require('_helpers/db');
// const { Audit } = require('../_helpers/db');
const User = db.User;
const Company= db.Company;
const Audit = db.Audit;
const CompanyEmployes = db.CompanyEmployes;


module.exports = {
    
    // getById,
    getAll,
    create,
    // update,
    // delete: _delete
};

// async function getById(id) {
//     return await Company.findById(id);
// }
async function getAll() {
    return await CompanyEmployes.find();
    // return await Company.find();
}


async function create(userParam) {
    const company = new CompanyEmployes(userParam);
    // const audit = new Audit(userParam);
    await company.save();
}