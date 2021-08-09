import AttendanceRecordModel from '../models/attendance.js';


exports.newAttendance = (req, res) => {
    Attendance.create({
        Class: req.body.Class,
        Subject: req.body.Subject,
        Teacher: req.body.Teacher
    }, (error, result) => {
        if (!error) {
            return res.json({
                message: 'Now you can take attendance',
                result
            })
        }
    })
}

// get all attendance record of a specific class

exports.viewAttendance = async (req, res) => {
    try {
        await Attendance.find({ Class: req.params.Class }, (error, result) => {
            if (!error) {
                return res.json({
                    result
                })
            }
        })
    }
    catch (err) {
        console.log('error' + err);
    }
}

// mark present 

exports.markPresent = async (req, res) => {
    try {
        await Attendance.findOne({ _id: req.params._id }, (error, result) => {
            if (result.Present.includes(req.body._id)) {
                return res.json({
                    message: 'Already Marked',
                    result
                })
            }

            else {
                Attendance.findByIdAndUpdate({ _id: req.params._id }, {
                    $push: { Present: req.body._id }
                }, { new: true }).exec((err, result) => {
                    if (err) {        // executing the query
                        return res.json(err);
                    }
                    else {
                        return res.json({
                            message: 'Marked Present',
                            result
                        });
                    }
                })
            }

        })

    }

    catch (err) {
        console.log(err);
    }
}

exports.markAbsent = async (req, res) => {
    try {
        await Attendance.findOne({ _id: req.params._id }, (error, result) => {
            if (result.Absent.includes(req.body._id)) {
                return res.json({
                    message: 'Already Marked',
                    result
                })
            }

            else {
                Attendance.findByIdAndUpdate({ _id: req.params._id }, {
                    $push: { Absent: req.body._id }
                }, { new: true }).exec((err, result) => {
                    if (err) {        // executing the query
                        return res.json(err);
                    }
                    else {
                        return res.json({
                            message: 'Marked Absent',
                            result
                        });
                    }
                })
            }

        })

    }
    catch (err) {
        console.log(err);
    }
}