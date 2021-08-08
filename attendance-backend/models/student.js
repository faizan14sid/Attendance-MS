import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;
const studentSchema = new mongoose.Schema({
    stundentName: {
        type: String,
        required: true,
    },
    standard: {
        type: ObjectId,
        ref: 'class'
    },
    roll_no: {
        type: Number,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

var StudentModel = mongoose.model('student', studentSchema);


export default StudentModel;