const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appstatusschema = new Schema([{
    // id:{ type: String, required: true }, //userid
  
    previousStatus:{type: String},
    previousStatusDate: { type: Date, default: Date.now },
    currentStatus:{type: String},
    currentStatusDate: { type: Date, default: Date.now },
    nextStatus:{type: String},
    nextStatusDate: { type: Date, default: Date.now },
    processCode:{type: String},
    // changeByProcessId:{type: String}
    isActive: {type: Boolean, default: true}
}]);


appstatusschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('AppStatus', appstatusschema);