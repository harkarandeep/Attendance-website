const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app=express()

const port = process.env.PORT || 3000


const dirpath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


app.set('view engine','hbs')
app.set('views',viewspath)      
hbs.registerPartials(partialsPath)


app.use(express.static(dirpath))

app.get('',(req,res)=>{      
    res.render('index',{     
        title:'Attendance App',
        name:' Harkarandeep Singh Sidhu'
    })
})

app.get('/absentDays',(req,res)=>{
    var abc=9
    res.render('absentDays',{
        title:'Check number of days you were absent ',
        name:' Harkarandeep Singh Sidhu',
        absentDays: abc
    })
})

app.get('/absentDetails',(req,res)=>{
    var der=['1/6/2021','2/6/2021','3/6/2021','4/6/2021']
    res.render('absentDetails',{
        title:'here are your Absent details',
        name:' Harkarandeep Singh Sidhu',
        absentDetails: der
    })
})

app.get('/leaveBalance',(req,res)=>{
    var erd=['CL/Contingency Leave - 6 - 31/12/2021','Optional Holiday - 3 - 31/12/2021','Special Privilege Leave - 10 - 31/12/2021']
    res.render('leaveBalance',{
        title:'Check your leaveBalance Here',
        name:' Harkarandeep',
        leaveBalance: erd
    })
})

app.get('/holidayCalander',(req,res)=>{   
    var hyt=['15th August / Sunday - Independence Day ','10th September / Friday - Ganesh Chaturthi ','2nd October / Saturday - Gandhi Jayanti']
    res.render('holidayCalander',{
        title:'Welcome to Holiday section',
        name:' Harkarandeep',
        holidayCalander: hyt
    })
})

app.listen(port, ()=>{                          
    console.log('server is on port ' + port)       
})
       