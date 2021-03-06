const request = require('request');

var geoaddress = (argv_address, getResultCallback) => {
    console.log('argv', argv_address);

    var encodedURI = encodeURIComponent(argv_address);
    console.log('encodedURI', encodedURI);

    let myUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        encodedURI + '&key=AIzaSyDWXdZTjxVO_HaafgXm3L1jB--3N09ll1k';
    console.log('url', myUrl);

    request({
        url: myUrl,
        //dynamically passing the address from argument
        json: true //This line of code is for ->  "accept": "application/json"
        //Telling we want JSON data back 
    }, (error, response, body) => {
        //It is a call back function
        console.log(JSON.stringify(body, undefined, 2));
        console.log(JSON.stringify(response, undefined, 2));

        if (error) {
            //console.log('error happend , unable to connect to google server');
            getResultCallback('error happend , unable to connect to google server');
        } else if (body.status === 'ZERO_RESULTS') {
            // console.log('unable to find the address')
            getResultCallback('unable to find the address', undefined)
        } else if (body.status === 'OK') {
            getResultCallback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });

        } else {
            getResultCallback('some error has occured which even developer is not aware of !!');
            //  console.log('some error has occured which even developer is not aware of !!')
        }

    });


} //end of anonymous 

module.exports = {
    geoaddress
};