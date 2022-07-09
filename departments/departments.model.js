const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const departmentschema = new Schema({
    companyid:{ type: String, required: true }, //userid here shall come branch id
    departmentname: { type: String, required: true },
    // businessnature: { type: String, required: true },
    // industry: { type: String, required: true },
    //parentDepartmentId:{type: String},
    createdDate: { type: Date, default: Date.now },
    isActive: {type: Boolean, default: true}
});


departmentschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Department', departmentschema);