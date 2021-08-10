import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export const Class = () => {

    const { classid } = useParams();
    const [classData, setClassData] = useState([]);

    useEffect(() => {
        fetch(`/class/view/${classid}`)
            .then(res =>
                res.json()
            ).then(data => {
                setClassData(data.result);

            }).catch(err => {
                console.log(err);
            })
    }, [classData]);


    return (
        <div className="class">
            <div className="class_header">
                {
                    classData && classData.map((item) => {
                        return (
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <h3>Class:{item && item.standard} Dashboard</h3>
                                    <h6 style={{ marginLeft: '650px', marginTop: '10px' }}>ClassTeacher:{item && item.classTeacher}</h6>
                                </div>
                            </div>

                        )
                    })

                }

            </div>
        </div >
    )
}
