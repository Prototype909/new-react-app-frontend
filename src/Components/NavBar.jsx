import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'

export const NavBar = () => (
    <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">Steve's Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/recipes/new">Add A Recipe</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
)