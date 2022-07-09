const appStatusService = require('./appStatus.service');

module.exports ={
    appProcessCreation
};

function appProcessCreation(params) {
    appStatusService.create(params) 
        // .then((res) => res.json({
        //     // console("here is response", res);
        // }))
        .then()
        .catch(err => console.log(err));
};