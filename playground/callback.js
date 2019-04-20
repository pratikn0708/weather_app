var getUser = (id, callback) => {

    console.log('in getUser func'); // op1
    var user = {
        id: id,
        name: 'Tejas'
    };
    // setTimeout(() => {
    //     callback(user);
    // }, 2000)

    // callback(user);


    console.log('out getUser func') //op2
};


getUser(12, (userObj) => {
    console.log('in getUser callbackfun'); //op3
    console.log(userObj); // op4
    console.log('out getUser callbackfun'); //op5

})