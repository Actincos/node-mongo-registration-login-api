const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ipplantschema = new Schema({
    id:{ type: String, required: true }, //userid
    description: { type: String, required: true },
    companyBranchesId: [{ type: String, required: true }],
    empsalesmgrid: { type: String, required: true },
    planttype: { type: String, required: true },
    empinventorymgrid: { type: String, required: true },
    empProductionmgrid: { type: String, required: true },
    companyId: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    // audit:[{
    //     createdBy:{type: String, default: 'User'},
    //     createdDate:{type: Date, default: Date.now}
    // }
        // createdDate:'2021-10-23T12:12:35.518+00:00'
    // ]
    //adderess
    //contacts
    branchesid: {type:String},
    isActive: {type: Boolean, default: true}
});


ipplantschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

ipplantschema.pre('save', function (next) {
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

module.exports = mongoose.model('Ipplant', ipplantschema);