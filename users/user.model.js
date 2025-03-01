const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // id:{type: String,  unique: true,required: true},
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role:{type:String, required:true},
    createdDate: { type: Date, default: Date.now },
    //audit
    // application Status
    isActive: {type: Boolean, default: true}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);