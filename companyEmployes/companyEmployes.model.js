const { now } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const companyEmployesschema = new Schema({
    companyEmpid:{ type: String, required: true }, //userid
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    userName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    //address, audit, application status, contact
    // foreignKeys: company, dept, branch, employetax no. businessTitle
    // audit:[{
    //     createdBy:{type: String, default: 'User'},
    //     createdDate:{type: Date, default: Date.now}
    // }
        // createdDate:'2021-10-23T12:12:35.518+00:00'
    // ]
    companyid:{ type: String, required: true},
    departmentid: {type:String},
    branchid:[{type: String}],
    empTaxNumber:{type: String},
    isActive: {type: Boolean, default: true}
});


companyEmployesschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

companyEmployesschema.pre('save', function (next) {
    let _this = this;
    let audit = mongoose.model('Audit');
    console.log("here i am ", audit)
    let defaultValues = new audit();
        defaultValues = JSON.parse(JSON.stringify(defaultValues));
        // delete defaultValues._id;
        // audit = _.extend(audit, defaultValues);
        next();
        // audit.save();
  });

module.exports = mongoose.model('CompanyEmployes', companyEmployesschema);