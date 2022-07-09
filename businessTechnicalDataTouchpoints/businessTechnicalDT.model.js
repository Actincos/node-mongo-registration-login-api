const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const businesstechnicalDTschema = new Schema([{
    id:{ type: String, required: true }, //procedureID
    nationalSystem:{type: String},
    businessFunction:{type: String},
    businessProcessId:{type: String},
    businessProcess:{type: String},
    accounts:{type: String}, //master, vender
    transactionData:{type: String}, //master data, transaction data
    interface:{type: String}, //transaction flow between system
    sourceSystem:{type: String},
    TargetSystem:{type: String},
    //other fields to be set later from excel file
    isActive: {type: Boolean, default: true}
}]);


businesstechnicalDTschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('BusinessTechnicalDT', businesstechnicalDTschema);