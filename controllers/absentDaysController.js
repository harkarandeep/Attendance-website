const attendanceDetails= require('../data/data')
function absentDays(req,res){
    res.send('Absent Days ' + attendanceDetails.absentDaysCount)
}
module.exports.absentDays=absentDays