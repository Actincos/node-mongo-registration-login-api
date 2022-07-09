const mongoose = require('mongoose');
const db = require('_helpers/db');
const Auth= db.Auth;

module.exports = {
    // authenticate,
    // getAll,
    // getById,
    create
    // update,
    // delete: _delete
};

async function create(userParam) {
    const Userauth = new Auth(userParam);
    Userauth.id= mongoose.Types.ObjectId();
    await Userauth.save()
}