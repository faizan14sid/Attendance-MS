import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export const AllStudent = () => {
    const [allStudent, setAllStudent] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/student/viewAllStudents")
            .then((response) => {
                setAllStudent(response.data)
                console.log(response.data)

            })
            .catch(error => console.error(`Error: ${error}`));
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No:</th>
                        <th>Student Name</th>
                        <th>Registration No</th>
                    </tr>
                </thead>
                <tbody>
                    {allStudent && allStudent.map((list, index) => {
                        return (

                            <tr>
                                <td>{index}</td>
                                <td>{list.studentName}</td>
                                <td>{list.registration_no}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>


        </div>
    )
}
