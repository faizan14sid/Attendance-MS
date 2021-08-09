import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

export const AllStudent = () => {
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/student/viewAllStudents")
            .then((response) => {
                setStudentList(response.data)
                console.log(response.data)
                console.log(studentList)
            })
            .catch(error => console.error(`Error: ${error}`));
    }, [])

    return (
        <div>
            {studentList && studentList.map((list, index) => {
                return (
                    <ListGroup>
                        <ListGroup.Item>{list.studentName}</ListGroup.Item>
                    </ListGroup>

                )
            })}


        </div>
    )
}
