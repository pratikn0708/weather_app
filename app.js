const yargs = require('yargs');
const _ = require('lodash');
const argv = yargs.argv;

const geocode = require('./geocode/geocode');
geocode.geoaddress(argv.a, (errorMess, result) => { // 2nd argum is callback fun

    if (errorMess) {
        console.log(errorMess);
    } else {
        console.log(JSON.stringify(result, undefined, 2))
        fetchTemp(result.latitude, result.longitude);
    }
});
//geoaddress will be invoked first then when response is recieved, it will execute the 
//callback fun present @second argum


//http://developer.forecast.io
//35bbdd4de745d47674f0848737bba883  -> api key of developer.forecast.io    or   https://darksky.net/dev
//https://api.darksky.net/forecast/35bbdd4de745d47674f0848737bba883/18.9635751,72.825885
//https://api.darksky.net/forecast/key/latitude,longitude


const getWeatherInfo = require('./weather/weather');

var fetchTemp = (latitude, longitude) => {

    //console.log(latitude) //It is empty, bcoz latitude and longitude is not updated to value its still 
    //empty string bcoz the we are not waiting to fetch latitude and longitude value from google api
    //we are just continuing with remaining code by considering the lat & lng value as empty str
    // console.log(longitude)  
    getWeatherInfo.getWeather(latitude, longitude, (errorMess, result) => {
        if (errorMess) {
            console.log(errorMess)
        } else {
            console.log(result)
        }
    });

} //end of fetchTemp() annonym fun

// fetchTemp(12.9081357, 77.64760799999999)