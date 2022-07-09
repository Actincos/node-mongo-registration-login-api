const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchschema = new Schema({
    userid:{ type: String, required: true }, //userid
    companyid:{ type: String, required: true }, //companyid
    // companyid:{ type: String, required: true }, this will be the id of the company against which branch is registered
    branchname: { type: String, required: true },
    businessservices: { type: String, required: true },
    // industry: { type: String, required: true },
    // to add next address, contact audit app status
    createdDate: { type: Date, default: Date.now },
    isActive: {type: Boolean, default: true}
});


branchschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Branch', branchschema);