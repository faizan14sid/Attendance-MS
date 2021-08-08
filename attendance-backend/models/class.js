import mongoose from 'mongoose';
// const {ObjectId} = mongoose.Schema.Types
const classSchema = new mongoose.Schema({
    class: {
        type: String,
        required: true,
    },
    classTeacher: {
        type: String,
        required: true,
    },

});

// creating class model
var ClassModel = mongoose.model('class', classSchema);  // defines collection name where we will insert this all data

export default ClassModel;