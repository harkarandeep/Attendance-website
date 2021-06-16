const attendanceDetails= require('../data/data')
function holidayCalander(req,res){
    res.send('HolidayCalander '+ attendanceDetails.holidayCalanderDays)
}
module.exports.holidayCalander=holidayCalander