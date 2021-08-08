import StudentModel from '../models/student.js';
import bcrypt from 'bcrypt';


// Registation of student will be done by the admin

export const registerStudent = (req, res) => {
    try {
        StudentModel.findOne({ roll_no: req.body.roll_no })
            // checking if registration no. is already exist

            .exec((newStudent, existStudent) => {
                if (existStudent) {
                    return res.json({
                        message: 'Student already registered...'
                    });
                }
                else {
                    StudentModel.create({
                        // then register the student in database

                        studentName: req.body.studentName,
                        roll_no: req.body.roll_no,
                        password: bcrypt.hashSync(req.body.password, 8) //Protect password
                    },
                        (error, result) => {
                            if (!error) { // if no error
                                return res.json({
                                    status: true,
                                    message: 'Student Registered Successfully',
                                    result
                                });
                            }
                            else { // if error
                                return res.json({
                                    status: false,
                                    message: 'Registration failed...',
                                    error
                                });
                            }
                        })
                }
            })
    }
    catch (err) {
        return res.json('error' + err);
    }
}

// view all student

export const viewAllStudents = async (req, res) => {
    try {
        await StudentModel.find({}, (error, result) => {
            if (!error) { //if no error
                return res.json({
                    result
                })
            }
        })
    }
    catch (err) {
        return res.send('error' + err);
    }
}



// view all students in a class 

export const viewClassStudents = async (req, res) => {
    try {
        await StudentModel.find({ standard: req.params.standard }, (error, result) => {
            if (!error) {
                return res.json({
                    result
                })
            }
        }).sort("studentName").select("-password")
    }
    catch (err) {
        return res.send('error' + err);
    }
}

// add student to a class

export const addStudent = async (req, res) => {
    try {
        await StudentModel.findOneAndUpdate({ roll_No: req.body.roll_No }, {
            standard: req.body.standard
        }, (error, result) => {
            if (!error) {
                return res.json({
                    message: 'Student added successfully',
                    result
                })
            }
        }).select("-password")
    }
    catch (err) {
        return res.send('error' + err);
    }
}