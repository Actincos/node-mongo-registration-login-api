const config = require('config.json');

const db = require('_helpers/db');
const User = db.User;
const Company= db.Company;
const Audit = db.Audit;


module.exports = {
    
    // getById,
    getAll,
    create,
    // update,
    // delete: _delete
};

async function getAll() {
    return await Company.find();
    // return await Company.find();
}


async function create(req, res) {
    console.log("here is user param for audit", req)
    // const audit = new Audit(userParam);
    // await audit.save();
}