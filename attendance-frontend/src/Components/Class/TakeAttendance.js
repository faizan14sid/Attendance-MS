import React, { useState, useEffect } from 'react'
import { Class } from './Class';
import { Table, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';


export const TakeAttendance = () => {

    const location = useLocation();
    const history = useHistory();
    const list = location.state.detail;
    const [student, setStudent] = useState([]);
    const attData = JSON.parse(localStorage.getItem('attData'));

    useEffect(() => {

        fetch(`/student/view/${list._id}`)
            .then(res => res.json())
            .then(data => {
                setStudent(data.result);

            }).catch(err => {
                console.log(err);
            })
    }, [list])

    const handlePresent = (id) => {
        fetch(`/attendance/present/${attData.result._id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id
            })
        }).then(res => res.json())

            .catch(err => {
                console.log(err);
            })



    }

    const handleAbsent = (id) => {
        fetch(`/attendance/absent/${attData.result._id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id
            })
        }).then(res => res.json())

            .catch(err => {
                console.log(err);
            })
    }

    const handleSubmit = () => {
        localStorage.clear();
        history.push('/')
    }

    return (
        <div>
            <Class />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No:</th>
                        <th>Student Name</th>
                        <th>Mark Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {student && student.map((item, index) => {
                        return (

                            <tr>
                                <td>{index}</td>
                                <td>{item.studentName}</td>
                                <td style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Button variant="outline-success" onClick={() => handlePresent(item._id)}>Present</Button>
                                    <Button variant="outline-danger" onClick={() => handleAbsent(item._id)}>Absent</Button>
                                </td>


                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}
