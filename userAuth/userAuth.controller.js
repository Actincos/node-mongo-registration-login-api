
const userAuthService = require('./userAuth.service');

module.exports ={
    registerAuth
}
function registerAuth(userAuth) {
    userAuthService.create(userAuth) 
        // .then((res) => res.json({
        //     // console("here is response", res);
        // }))
        .then()
        .catch(err => console.log(err));
};