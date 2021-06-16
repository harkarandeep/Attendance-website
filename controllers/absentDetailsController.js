const attendanceDetails= require('../data/data')
function absentDetails(req,res){
    res.send('Absent Details'+attendanceDetails.absentNo_ofDays) 
}
module.exports.absentDetails=absentDetails