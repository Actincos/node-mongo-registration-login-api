const mongoose = require('mongoose');
const db = require('_helpers/db');
// const User = db.User;
const Company= db.Company;
// const Audit = db.Audit;
// const {compProcess} = require('../companyProcess/companyProcess.controller')


module.exports = {
    
    // getById,
    getAll,
    create,
    // update,
    // delete: _delete
};

// async function getById(id) {
//     console.log("Comapany service ", id)
//     let userid= id;
//     return await Company.findById(userid);
// }
async function getAll(id) {
    return await Company.find({userid:id});
    // return await Company.find();
}


async function create(userParam) {
    console.log("userParams in company service", userParam);
    const company = new Company(userParam);
    company.id= mongoose.Types.ObjectId();

    console.log("company in company service", company);
    compProcessId= mongoose.Types.ObjectId();
    // roleGroupId= mongoose.Types.ObjectId();
    // const audit = new Audit(userParam);
    await company.save();
    // compProcess({
    //     'id':compProcessId,
    //     'companyid': company.id,
    //     // 'roleGroupId': roleGroupId
    // });
}