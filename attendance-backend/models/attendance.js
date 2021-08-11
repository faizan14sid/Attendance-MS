import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types
const attendanceSchema = new mongoose.Schema({
    standard: {
        type: ObjectId,
        ref: 'standard'
    },
    teacher: {
        type: String
    },
    Present: [
        {
            type: ObjectId,
            ref: 'student'
        }
    ],
    Absent: [
        {
            type: ObjectId,
            ref: 'student'
        }
    ]


}, {
    timestamps: true
});


var AttendanceRecordModel = mongoose.model('attendanceRecord', attendanceSchema);

export default AttendanceRecordModel;