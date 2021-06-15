const express=require('express')
const request= require('request')
const router= express.Router()

const absentDaysController = require('../controllers/absentDaysController')
const absentDetailsController = require('../controllers/absentDetailsController')
const leaveBalanceController = require('../controllers/leaveBalanceController')
const holidayCalenderController = require('../controllers/holidayCalenderController')

router.get('',(req,res)=>{      
    res.render('index',{     
        title:'Attendance App',
        name:' Harkarandeep Singh Sidhu'
    })
})

router.get('/absentDays',(req,res)=>{
    res.render('absentDays',{
        title:'Check number of days you were absent ',
        name:' Harkarandeep Singh Sidhu',
        absentDays: absentDaysController.absentDays
    })
})

router.get('/absentDetails',(req,res)=>{
    res.render('absentDetails',{
        title:'here are your Absent details',
        name:' Harkarandeep Singh Sidhu',
        absentDetails: absentDetailsController.absentDetails
    })
})

router.get('/leaveBalance',(req,res)=>{
    
    res.render('leaveBalance',{
        title:'Check your leaveBalance Here',
        name:' Harkarandeep',
        leaveBalance: leaveBalanceController.leaveBalance
    })
})

router.get('/holidayCalander',(req,res)=>{   
    
    res.render('holidayCalander',{
        title:'Welcome to Holiday section',
        name:' Harkarandeep',
        holidayCalander: holidayCalenderController.holidayCalander
    })
})

module.exports=router
