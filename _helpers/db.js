const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Auth: require('../userAuth/userAuth.model'),
    Company: require('../company/company.model'),
    CompanyProcess: require('../companyProcess/companyProcess.model'),
    RoleGroup: require('../roleGroup/roleGroup.model'),
    AppStatus: require('../appProcess/appProcess.model'),
    Branch: require('../branches/branches.model'),
    Department: require('../departments/departments.model'),
    Audit: require('../audit/audit.model'),
    BusinessService: require('../businessServices/businessService.model'),
    CompanyEmployes: require('../companyEmployes/companyEmployes.model'),
};