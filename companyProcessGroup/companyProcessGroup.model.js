//table is deleted

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const companyprocessgroupschema = new Schema([{
    id:{ type: String, required: true }, //userid
    createdBy:{type: String},
    createdDate: { type: Date, default: Date.now },
    modifiedBy:{type: String},
    modifiedDate: { type: Date, default: Date.now },
    previousStatus:{type: String},
    previousStatusDate: { type: Date, default: Date.now },
    currentStatus:{type: String},
    currentStatusDate: { type: Date, default: Date.now },
    processCode:{type: String},
    changeByProcessId:{type: String},
    isActive: {type: Boolean, default: true}

}]);


companyprocessgroupschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('CompanyProcessGroup', companyprocessgroupschema);