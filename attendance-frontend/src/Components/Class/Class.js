import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { Attendance } from "./Attendance";


export const Class = () => {


    const location = useLocation();
    const list = location.state.detail;


    return (

        <div>
            <div style={{ display: 'flex', justifyContent: "space-evenly", margin: "5px" }}>
                <h3>Class: {list.standard} Dashboard</h3>
                <h5 >ClassTeacher: {list.classTeacher}</h5>
                <Attendance list={list} />
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
                        <Dropdown.Item ><AddTeacher list={list} /></Dropdown.Item>
                        <Dropdown.Item as={Link} to={{ pathname: "/viewteachers", state: { detail: list } }}>View Teachers in class</Dropdown.Item>


                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
