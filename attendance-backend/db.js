const mongoose = require('mongoose');

const DB_URI = "mongodb+srv://faizan14sid:sidfaizan@cluster0.avrr8.mongodb.net/attendance?retryWrites=true&w=majority"

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true }, (err) => {

    if (err) {
        console.log('DB Connection fails' + err);
    }

    else {
        console.log('Databse Connected....');
    }
});