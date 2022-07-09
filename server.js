require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/company', require('./company/company.controller'));
app.use('/branches', require('./branches/branches.controller'));
app.use('/department', require('./departments/departments.controller'));
app.use('/businessService', require('./businessServices/businessService.controller'));
app.use('/companyProcess', require('./companyProcess/companyProcess.controller'));
// app.use('/comEmployes', require('./companyEmployes/companyEmployes.controller'));
// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
