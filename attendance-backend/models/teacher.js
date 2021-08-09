import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types
const teacherSchema = new mongoose.Schema({
    teacherName: {
        type: String,
        required: true,
    },
    registration_no: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    standard: {
        type: ObjectId,
        ref: 'standard'
    }


}, {
    timestamps: true
});


var TeacherModel = mongoose.model('teacher', teacherSchema);

export default TeacherModel;