const path=require('path')
const express=require('express')
const indexRouter=require('../routes/index')
const hbs=require('hbs')
const config=require('../config/config')
const app=express()


const dirpath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


app.set('view engine','hbs')
app.set('views',viewspath)      
hbs.registerPartials(partialsPath)


app.use(express.static(dirpath))
app.use('/',indexRouter)


app.listen(config.server.port, ()=>{                          
    console.log('server is on port ' + config.server.port)       
})
       