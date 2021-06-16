const attendanceDetails= require('../data/data')
function leaveBalance(req,res){
    res.send('Leave Balance '+ attendanceDetails.leavebalanceRemain)
}

module.exports.leaveBalance=leaveBalance