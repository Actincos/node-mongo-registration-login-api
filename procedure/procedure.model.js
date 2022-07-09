const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const procedureschema = new Schema([{
    id:{ type: String, required: true }, //procedureID
    businessFunction:{type: String},
    descriptionOfProcedure:{type: String},
    system:{type: String},
    regulation:{type: String},
    exception:{type: String},
    input:{type: String},
    output:{type: String},
    relatedProcedure:{type: String},
    benificaiaries:{type: String}, //entititesBenificiaryOfProcedure
    formAndReports:{type: String},
    duration:{type: String}, //duration to complete procedure
    procedureDepartment:{type: String},
    owner:{type: String}, //owner of procedure
    informationSystem:{type: String},
    integrationWithSystem:{type: String}, //integration with other system
    kpi:{type: String},
    authorization:{type: String}, //authorization and approval
}]);


procedureschema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Procedure', procedureschema);