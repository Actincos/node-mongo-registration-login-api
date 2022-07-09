const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rolegroupschema = new Schema([{
    id:{ type: String, required: true }, //userid
    comdeptId:{type:String},
    orgpositionId:{type:String},
    createdBy:{type: String},
    isActive: {type: Boolean, default: true}

}]);


rolegroupschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('RoleGroup', rolegroupschema);