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
    
    absentDaysController.absentDays(req,res)

})

router.get('/absentDetails',(req,res)=>{
    absentDetailsController.absentDetails(req,res)
})

router.get('/leaveBalance',(req,res)=>{
    leaveBalanceController.leaveBalance(req,res)
})

router.get('/holidayCalander',(req,res)=>{   
    holidayCalenderController.holidayCalander(req,res)
})

module.exports=router
