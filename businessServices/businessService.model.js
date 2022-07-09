const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const businessServiceschema = new Schema({
    companyid:{ type: String, required: true }, //userid here shall come branch id
    description: { type: String, required: true },
    longdescription: { type: String, required: true },
    // industry: { type: String, required: true },
    // createdDate: { type: Date, default: Date.now }
    isActive: {type: Boolean, default: true}
});


businessServiceschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('BusinessService', businessServiceschema);