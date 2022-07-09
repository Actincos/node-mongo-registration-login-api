const mongoose = require('mongoose');
const db = require('_helpers/db');
const CompanyProcess= db.CompanyProcess;
const {roleGroupCreation} = require('../roleGroup/roleGroup.controller');
const {appProcessCreation} = require('../appProcess/appStatus.controller');
module.exports = {
    
    // getById,
    getAll,
    create,
    // update,
    // delete: _delete
};

// async function create(params) {
//     const CompProcess = new CompanyProcess(params);
//     await CompProcess.save()

//     roleGroupId= mongoose.Types.ObjectId();
//     roleGroupCreation({
//         'id':roleGroupId,
//         // 'companyid': company.id,
//         // 'roleGroupId': roleGroupId
//     });
// }

async function getAll(id) {
    return await CompanyProcess.find({userid:id});
}

async function create(userParam) {
    console.log("userParams in company Process service", userParam);
    const compPR = new CompanyProcess(userParam);
    compPR.id= mongoose.Types.ObjectId();
    const compProcessId= mongoose.Types.ObjectId();
    compPR.roleGroupId= compProcessId;
    const appProcessId= mongoose.Types.ObjectId();
    compPR.appProcessId= appProcessId;
    await compPR.save();
    await roleGroupCreation({
        _id: compProcessId,
        code:userParam.code,
        description: userParam.description
    });
    await appProcessCreation({
        _id: appProcessId,
        code:userParam.code,
        description: userParam.description,
        stepNumber:userParam.stepnumber
    })
}