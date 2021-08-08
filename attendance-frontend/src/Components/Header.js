import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

export const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Attendance</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <NavDropdown title="Students" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Rohit</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">faizan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Naman</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Add Stundent</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Teachers" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Mr. Saurabh</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Miss. Manila</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mr. Sanjya</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Add Teacher</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
