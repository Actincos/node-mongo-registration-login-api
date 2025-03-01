﻿const mongoose = require('mongoose');
const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const mongo = require('mongodb'),
// ObjectID = mongo.ObjectID;
const db = require('_helpers/db');
const User = db.User;
const UserAuth= db.UserAuth;
const Company= db.Company;
const {registerAuth} = require('../userAuth/userAuth.controller')

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

async function getAll() {
    // let User = {};
    return await User.find();
    // await Company.find();
    //  User= await User.find();
    //  User.companies= await Company.find();

    // return User;

}

async function getById(id) {
    return await User.findById(id);
}

async function create(userParam) {
    // console.log("user service", userParam)
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    const user = new User(userParam);
    user.id= mongoose.Types.ObjectId();
    // console.log("user=>", user)
    

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
    console.log("user=>", user.id, userParam.role)
    registerAuth({
        'user_id': user.id,
        'accessLevel': userParam.role
    });
   
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}