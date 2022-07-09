const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const inventroyItemschema = new Schema({
    id:{ type: String, required: true }, //userid
    inventoryLocId: { type: String, required: true },
    inventoryMasterId: { type: String, required: true },
    inHandQuantity: { type: String, required: true },
    purchasePrice: { type: String, required: true },
    purchaseDate: { type: Date, default: Date.now },
    sellPrice: { type: String, required: true },
    evaluatedPrice: { type: String, required: true },
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

inventroyItemschema.pre('save', function (next) {
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

module.exports = mongoose.model('InventoryItems', inventroyItemschema);