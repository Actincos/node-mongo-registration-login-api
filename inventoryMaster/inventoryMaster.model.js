const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const inventoryMasterschema = new Schema({
    id:{ type: String, required: true }, //userid
    internalcode: { type: String, required: true },
    desc: { type: String, required: true },
    productcode: { type: String, required: true },
    uom: { type: String, required: true },
    inventoryType: { type: String, required: true },
    producer: { type: String, required: true },
    model: { type: String, required: true },
    procucingYear: { type: String, required: true },
    companyId: { type: String, required: true },
    valuationType: { type: String, required: true },
    depriciationRate: { type: String, required: true },
    classification: { type: String, required: true },
    childrenId: { type: String, required: true },
    inventoryKit: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    // audit:[{
    //     createdBy:{type: String, default: 'User'},
    //     createdDate:{type: Date, default: Date.now}
    // }
        // createdDate:'2021-10-23T12:12:35.518+00:00'
    // ]
    
    isActive: {type: Boolean, default: true}
});


inventoryMasterschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

inventoryMasterschema.pre('save', function (next) {
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

module.exports = mongoose.model('InventiryMaster', inventoryMasterschema);