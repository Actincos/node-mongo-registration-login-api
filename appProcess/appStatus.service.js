const mongoose = require('mongoose');
const db = require('_helpers/db');
const AppStatus= db.AppStatus;


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


async function create(params) {
    const Appstatus = new AppStatus(params);
    await Appstatus.save()
}