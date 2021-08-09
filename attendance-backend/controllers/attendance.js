import AttendanceRecordModel from '../models/attendance.js';


export const newAttendance = (req, res) => {
    AttendanceRecordModel.create({
        standard: req.body.standard,
        teacher: req.body.teacher
    }, (error, result) => {
        if (!error) {
            return res.json({
                message: 'Now you can take attendance',
                result
            })
        }

    })
}

// view attendance record of a specific class

export const viewAttendance = async (req, res) => {
    try {
        await AttendanceRecordModel.find({ standard: req.params.standard }, (error, result) => {
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

export const Present = async (req, res) => {
    try {
        await AttendanceRecordModel.findOne({ _id: req.params._id }, (error, result) => {
            if (result.Present.includes(req.body._id)) {
                return res.json({
                    message: 'Already present',
                    result
                })
            }

            else {
                AttendanceRecordModel.findByIdAndUpdate({ _id: req.params._id }, {
                    $push: { Present: req.body._id }
                }, { new: true }).exec((err, result) => {
                    if (err) {
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

// Mark absent

export const Absent = async (req, res) => {
    try {
        await AttendanceRecordModel.findOne({ _id: req.params._id }, (error, result) => {
            if (result.Absent.includes(req.body._id)) {
                return res.json({
                    message: 'Already absent',
                    result
                })
            }

            else {
                AttendanceRecordModel.findByIdAndUpdate({ _id: req.params._id }, {
                    $push: { Absent: req.body._id }
                },
                    { new: true })
                    .exec((err, result) => {
                        if (err) {
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