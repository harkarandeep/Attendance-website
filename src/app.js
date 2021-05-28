const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app=express()

const port = process.env.PORT || 3000

// Define paths for express config
const dirpath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Ssetup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewspath)      //Handle bars declaration
hbs.registerPartials(partialsPath)

// setup static directory to server
app.use(express.static(dirpath))

app.get('',(req,res)=>{      //It is used to use  the handlebars
    res.render('index',{      // index is the view name
        title:'Weather App',
        name:'Harkarandeep Singh Sidhu'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'harkarandeep Singh SIdhu'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Hi this the help page',
        name:'Harkarandeep Singh Sidhu'
    })
})

// app.get('/help',(req,res)=>{            //res=response  and req=request
//     res.send([{
//         name:'Harkarandeep'},{                  // array and json format
//             name:'Aman'
//     }])
// })


// app.get('/about',(req,res)=>{
//     res.send('<title>Welcome to the about page</title><h1> welcome to about</h1>')    //handler  HTML format
// })

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location}={}) =>{     //we have used ={} only to remove the error that will occur if we use ! on the site
        if(error) {
            return res.send({
                error:error
            })
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                res.send({
                    error:error 
                })
            }
            res.send({
                forecast: forecastData,
                location,
                address:req.query.address
            })
        })
    })
})



app.get('/products',(req,res)=>{

    if(!req.query.search){
        return res.send({                         // In this we used return just to stop the code from ruuning after the if statement
            error:'You must provide a search item'
        })
    }
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        title:'404',
        name:'Harkarandeep',
        errorMessage:'Help Article not found'
    })
})

app.get('*',(req,res)=>{         // the * sign is used to show th emessage for alll those sites which are not declared
    res.render('error',{
        title:'404',
        name:'Harkarandeep',
        errorMessage:'Page not found'
    })
})
//app.com
//app.com/help
//app.com/about

app.listen(port, ()=>{                          // to open th esite we need to use (localhost:3000)
    console.log('server is on port 3000' + port)       //listen is used to start the server
})
       


// app.get('',(req,res)=>{                //res=response  and req=request
//     res.send('<h1>Hello express!</h1>')         
// })