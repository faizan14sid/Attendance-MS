import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export const ShowAttendance = () => {
    const [allStudent, setAllStudent] = useState([]);
    const location = useLocation();
    const list = location.state.detail;

    useEffect(() => {

        fetch(`/attendance/viewAttendance/${list._id}`)
            .then(res => res.json())
            .then(data => {
                setAllStudent(data.result);

            }).catch(err => {
                console.log(err);
            })
    }, [list])


    return (
        <>
            {allStudent && allStudent.map((item, index) => {
                return (
                    <div>
                        <h4>Teacher Name : {item.teacher}</h4>
                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    <th>Present</th>
                                    <th>Absent</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr>
                                    <td>{item.present}</td>
                                    <td>{item.absent}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                )
            })}

        </>
    )
};