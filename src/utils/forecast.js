const request=require('request')
const forecast=((longitude,latitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=c01a8fb4985f143f82a79f61c00122d7&query=' + latitude+','+longitude+'&units=m'
    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect to weather',undefined)
        }
        else if(body.error)
        {
            callback('Unable to find the location',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.location.lat,
                longitude:body.location.lon,
                forecast:body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out.'
            })
        }
    })

})
module.exports=forecast