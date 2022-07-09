const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const inventoryLocschema = new Schema({
    id:{ type: String, required: true }, //userid
    inventoryLoctype: { type: String, required: true },
    description: { type: String, required: true },
    sellingPrice: { type: String, required: true },
    inHandQntity: { type: String, required: true },
    procedureDate: { type: Date, default: Date.now },
    deliveryQuantity: { type: String, default: Date.now },
    recieveQuantity: { type: String, required: true },inventoryMasterId: { type: String, required: true },
    // audit:[{
    //     createdBy:{type: String, default: 'User'},
    //     createdDate:{type: Date, default: Date.now}
    // }
        // createdDate:'2021-10-23T12:12:35.518+00:00'
    // ]
    //adderess
    //contacts
    //application Statis
    ipPlantid: {type:String},
    isActive: {type: Boolean, default: true},
    isActive: {type: Boolean, default: true}
});


inventoryLocschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

inventoryLocschema.pre('save', function (next) {
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

module.exports = mongoose.model('inventoryLoc', inventoryLocschema);