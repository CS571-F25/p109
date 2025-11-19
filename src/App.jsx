import { HashRouter, Route, Routes, Link } from 'react-router';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './App.css';

import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter>
      <Container fluid className="h-100 w-100">
        <Row>
          <Sidebar />
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App
