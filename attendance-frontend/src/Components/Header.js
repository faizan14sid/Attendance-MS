import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ViewAttendance } from './Attendance/ViewAttendance';
import { Student } from './Student/Student';
import { Teacher } from './Teacher/Teacher';

export const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Brand><ViewAttendance /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav >
                        <NavDropdown title="Students" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/addnewstudent"><Student /></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/viewallstudents" >View All Students</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Teachers" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/addnewteacher"><Teacher /> </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/viewallteachers">View All Teachers</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
