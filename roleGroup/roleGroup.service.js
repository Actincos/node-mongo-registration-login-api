const mongoose = require('mongoose');
const db = require('_helpers/db');
const RoleGroup= db.RoleGroup;
const {appProcessCreation} = require('../appProcess/appStatus.controller');

module.exports = {
    // authenticate,
    // getAll,
    // getById,
    create
    // update,
    // delete: _delete
};


async function create(params) {
    const Roleprocess = new RoleGroup(params);
    await Roleprocess.save()

    // roleGroupId= mongoose.Types.ObjectId();
    // appProcessCreation({
    //     'id':compProcessId,
    //     'roleGroupId': params.id,
    //     // 'roleGroupId': roleGroupId
    // });
}