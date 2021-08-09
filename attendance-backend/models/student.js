import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;
const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true

    },
    standard: {
        type: ObjectId,
        ref: 'standard'
    },
    registration_no: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var StudentModel = mongoose.model('student', studentSchema);


export default StudentModel;