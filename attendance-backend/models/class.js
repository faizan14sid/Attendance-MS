const mongoose = require('mongoose');
// const {ObjectId} = mongoose.Schema.Types
const classSchema = new mongoose.Schema({
    Class: {
        type: String,
        required: true,
    },
    ClassTeacher: {
        type: String,
        required: true,
    },

});

// creating class model
mongoose.model('class', classSchema);  // defines collection name where we will insert this all data

// exporting the model
module.exports = mongoose.model('class');