const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const paremtPositionschema = new Schema([{
    id:{ type: String, required: true }, //userid
    comEmpId:{type:String},
    deptPositionId:{type:String},
    parentPositionId:{type:String},
    createdBy:{type: String},
    isActive: {type: Boolean, default: true}

}]);


paremtPositionschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('ParentPosition', paremtPositionschema);