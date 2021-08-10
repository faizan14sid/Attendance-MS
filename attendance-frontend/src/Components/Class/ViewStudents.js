import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Class } from './Class';

export const ViewStudents = () => {

    const location = useLocation();
    const list = location.state.detail;
    const [student, setStudent] = useState([]);
    useEffect(() => {

        fetch(`/student/view/${list._id}`)
            .then(res => res.json())
            .then(data => {
                setStudent(data.result);

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
                        <th>Student Name</th>
                        <th>Registration No</th>
                    </tr>
                </thead>
                <tbody>
                    {student && student.map((item, index) => {
                        return (

                            <tr>
                                <td>{index}</td>
                                <td>{item.studentName}</td>
                                <td>{item.registration_no}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>


        </div>
    )
}
