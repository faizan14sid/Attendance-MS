import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Class } from './Class';

export const ViewTeachers = () => {

    const location = useLocation();
    const list = location.state.detail;
    const [teacher, setTeacher] = useState([]);
    useEffect(() => {

        fetch(`/teacher/view/${list._id}`)
            .then(res => res.json())
            .then(data => {
                setTeacher(data.result);

            }).catch(err => {
                console.log(err);
            })
    }, [list])

    return (
        <div>
            <Class />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No:</th>
                        <th>Teacher Name</th>
                        <th>Registration No</th>
                    </tr>
                </thead>
                <tbody>
                    {teacher && teacher.map((item, index) => {
                        return (

                            <tr>
                                <td>{index}</td>
                                <td>{item.teacherName}</td>
                                <td>{item.registration_no}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>


        </div>
    )
}
