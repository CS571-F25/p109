import { HashRouter, Route, Routes, Link } from 'react-router';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <Home />
    </HashRouter>
  );
}

export default App
