const roleGroupService = require('./roleGroup.service');


module.exports ={
    roleGroupCreation
}

function roleGroupCreation(params) {
    roleGroupService.create(params) 
        // .then((res) => res.json({
        //     // console("here is response", res);
        // }))
        .then()
        .catch(err => console.log(err));
};