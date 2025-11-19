import { HashRouter, Route, Routes, Link } from 'react-router';
import { Container, Row, Col, Nav } from 'react-bootstrap';

import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';


export default function Sidebar() {
    return (
        <Col
            className="bg-dark text-white px-3 py-4 border-end overflow-auto text-start"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: 'fit-content',
                textAlign: 'left'
            }}
        >
            <Nav className="flex-column gap-3" variant="pills">
                <Nav.Link as={Link} to="/home" className="text-white"><h1 style={{fontSize: "1rem"}}>em.portfolio</h1></Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-white"><p style={{fontSize: "1rem"}}>About Me</p></Nav.Link>
                <Nav.Link as={Link} to="/experience" className="text-white"><p style={{fontSize: "1rem"}}>Experience</p></Nav.Link>
                <Nav.Link as={Link} to="/projects" className="text-white"><p style={{fontSize: "1rem"}}>Projects</p></Nav.Link>
            </Nav>
        </Col>

    )
}