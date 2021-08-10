import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export const AllTeacher = () => {
    const [allTeacher, setAllTeacher] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/teacher/viewAllTeachers")
            .then((response) => {
                setAllTeacher(response.data)
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
                        <th>Teacher Name</th>
                        <th>Registration No</th>
                    </tr>
                </thead>
                <tbody>
                    {allTeacher.map((list, index) => {
                        return (

                            <tr>
                                <td>{index}</td>
                                <td>{list.teacherName}</td>
                                <td>{list.registration_no}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>


        </div>
    )
}
