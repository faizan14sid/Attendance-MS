import ClassModel from '../models/class.js';

//view class controller
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

// add class controller
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
            res.status(422).send({
                message: "Class already exist"
            })

        }
    })
}

// view one class

export const viewOneClass = async (req, res) => {
    try {
        await Class.find({ _id: req.params._id }, (error, result) => {
            return res.json({
                result: result
            });
        })
    }
    catch (err) {
        return res.send('error' + err);
    }
}