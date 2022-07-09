const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const companyemployedetailschema = new Schema([{
    id:{ type: String, required: true }, //userid
    picLink:{type: String},
    nationalIdLink:{type: String},
    nationalIdType: ["Passpot", "IR No.","Identity Card"],
    taxId:{type: String},
    taxIdLink:{type: String},
    driverLicenseId:{type: String},
    driverLicenseLink:{type: String},
    employeeId:{type: String},
    // Audit
    isActive: {type: Boolean, default: true}

}]);


companyemployedetailschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('CompanyEmployeDetail', companyemployedetailschema);