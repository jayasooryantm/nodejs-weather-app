const request = require('request')

const forecast = (latitude, longitude, callback) =>{
//fetching weather data using weatherstack api

    const url = 'http://api.weatherstack.com/current?access_key=f4619a04693f76da9ff718c20c919e70&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({url: url, json: true},(error, response) => {
        if(error){
            callback('Unable to connect Weatherstack API!', undefined)
        }else if(response.body.success === false){
            callback('Weather location not found!', undefined)
        }else{
            callback(undefined, {
                weather: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature
            })
        }
    })
}

module.exports = forecast