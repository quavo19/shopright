import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<HomePage/>} />
        <Route path="/about" element={<HomePage/>} />
        <Route path="/contact" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
