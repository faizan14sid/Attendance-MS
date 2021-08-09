import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types
const classSchema = new mongoose.Schema({
    standard: {
        type: String,
        required: true,
        unique: true,
    },
    classTeacher: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});


var ClassModel = mongoose.model('class', classSchema);

export default ClassModel;