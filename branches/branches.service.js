const config = require('config.json');

const db = require('_helpers/db');
// const User = db.User;
// const Company= db.Company;
const Branch= db.Branch;
module.exports = {
    
    // getById,
    getAll,
    create,
    // update,
    // delete: _delete
};


// async function getById(id) {
//     return await Branch.findById(id);
// }
async function getAll() {
    return await Branch.find();
    // return await Company.find();
}

async function create(userParam) {
    console.log("hitting branch creation")
    const branch = new Branch(userParam);
    await branch.save();
}