const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appstatusschema = new Schema([{
    _id:{ type: String, required: true }, //userid
    code:{type: String},
    description: { type: String },
    // tablename:{type: String},
    stepNumber: { type: String },
    // parentProcessId:{type: String},
    // isrootProcess: { type: Boolean},  
    //  processCode:{type: String},
    // changeByProcessId:{type: String}
    isActive: {type: Boolean, default: true},
    roleGroupId:{type: String}
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