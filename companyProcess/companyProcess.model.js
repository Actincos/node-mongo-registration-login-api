const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const companyprocessschema = new Schema([{
    id:{ type: String, required: true }, 
    code:{type: String},
    description: { type: String },
    // tablename:{type: String, default: true},
    isrootprocess: { type: Boolean, default: true },
    stepnumber:{type: String, default:'1'},
    ismandatory: { type: String, default: true },
    //audit
    //applicationStatus
    companyid:{type: String, required:true},
    appProcessId:{type: String},
    // parentCompanyProcessId:{type: String},
    roleGroupId:{type: String},
    isActive: {type: Boolean, default: true}

}]);


companyprocessschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('CompanyProcess', companyprocessschema);