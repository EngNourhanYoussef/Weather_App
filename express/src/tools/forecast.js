const request = require('request')
const forecast = (latitude,longtiude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=4689211093d8912e79bd336ac3e6bfdc&query=' + latitude + ',' + longtiude
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect weather service',undefined)
        }
        else if(response.body.error){
            callback('Unable to find location',undefined)

        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees. ')
        }
    })

}
module.exports = forecast