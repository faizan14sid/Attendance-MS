import ClassModel from '../models/class.js';
// app.use(express.json());
// const Student = require('../models/student');

// export const createClass = (req, res) => {
//     try {
//         Class.findOne({ Standard: req.body.Standard })
//             // checking if class already exist

//             .exec((newClass, existClass) => {
//                 if (existClass) {
//                     return res.json({
//                         message: 'Class already exist...'
//                     });
//                 }
//                 else {
//                     Class.create({
//                         Standard: req.body.Standard,
//                         classTeacher: req.body.classTeacher,
//                     }, (error, result) => {
//                         if (!error) {
//                             return res.json({
//                                 status: true,
//                                 message: 'Class Added Successfully',
//                                 result
//                             });
//                         }
//                         else {
//                             return res.json({
//                                 status: false,
//                                 message: 'Db insert failed...',
//                                 error
//                             });
//                         }
//                     })
//                 }
//             })
//     }
//     catch (err) {
//         return res.json('error' + err);
//     }
// }

export const viewClass = (req, res) => {

    ClassModel.find()
        .select(
            "standard classTeacher"
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

export const addClass = (req, res) => {

    let standard = req.body.standard

    ClassModel.findOne({ standard }, (err, classStandard) => {
        if (err) return res.send({ message: err.message });
        if (!classStandard) {
            const newClass = new ClassModel({
                standard: req.body.standard,
                classTeacher: req.body.classTeacher,
            });

            newClass
                .save()
                .then(async (doc) => {

                    return res.status(200).send({
                        message: "class add successfully"
                    })
                })
                .catch((err) => {
                    res.status(500).json({ message: err.message })
                })

        }
        else {
            res.status(200).send({
                message: "Class already exist"
            })

        }
    })
}