import React from "react";

import { useLocation, Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { AddStudent } from "./AddStudent";


export const Class = () => {

    // const { classid } = useParams();
    const location = useLocation();
    const list = location.state.detail;

    // const [classData, setClassData] = useState([]);


    return (

        <div>
            <div style={{ display: 'flex', justifyContent: "space-evenly", margin: "5px" }}>
                <h3>Class: {list.standard} Dashboard</h3>
                <h5 >ClassTeacher: {list.classTeacher}</h5>
                <Button variant="danger">Take Attendance</Button>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Students
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><AddStudent list={list} /> </Dropdown.Item>
                        <Dropdown.Item as={Link} to={{ pathname: "/viewstudents", state: { detail: list } }}>View Students in class</Dropdown.Item>


                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Teachers
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >Add Teacher in class</Dropdown.Item>
                        <Dropdown.Item >Class Teachers in class</Dropdown.Item>


                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
