import StudentModel from '../models/student.js';
import bcrypt from 'bcryptjs';


// Registation of student will be done by the admin

export const registerStudent = (req, res) => {
    let registration_no = req.body.registration_no

    StudentModel.findOne({ registration_no }, (err, register) => {
        if (err) return res.send({ message: err.message });
        if (!register) {
            const newStudent = new StudentModel({
                studentName: req.body.studentName,
                registration_no: req.body.registration_no,
                password: bcrypt.hashSync(req.body.password, 8) //Protect password
            });

            newStudent
                .save()
                .then(async (doc) => {
                    return res.status(200).send({
                        message: "student register successfully"
                    })
                })
                .catch((err) => {
                    res.status(500).json({ message: err.message })
                })
        }
        else {
            res.status(422).send({
                message: "student already register"
            })
        }
    })
}

// view all student

export const viewAllStudents = async (req, res) => {
    StudentModel.find()
        .sort("studentName")
        .select(
            "studentName registration_no"
        )
        .exec()
        .then((data) => {

            res.send(data)
        })
        .catch((er) => {
            res.status(500).json({
                message: er.message,
            });
        });
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
        await StudentModel.findOneAndUpdate({ registration_no: req.body.registration_no }, {
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