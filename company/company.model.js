const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const companyschema = new Schema({
    userid:{ type: String, required: true }, //userid
    businessname: { type: String, required: true },
    businessnature: { type: String, required: true },
    industry: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    // audit:[{
    //     createdBy:{type: String, default: 'User'},
    //     createdDate:{type: Date, default: Date.now}
    // }
        // createdDate:'2021-10-23T12:12:35.518+00:00'
    // ]
    //adderess
    //contacts
    //application Statis
    branchesid: {type:String},
    isActive: {type: Boolean, default: true}
});


companyschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

companyschema.pre('save', function (next) {
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

module.exports = mongoose.model('Company', companyschema);