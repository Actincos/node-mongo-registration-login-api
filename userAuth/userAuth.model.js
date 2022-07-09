const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userauthschema = new Schema([{
    id:{ type: String, required: true }, 
    accessLevel:{type: String},
    user_id:{ type: String, required: true },
    // company_process_id:{ type: String, required: true },
    // isActive: {type: Boolean, default: true}
}]);


userauthschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Auth', userauthschema);