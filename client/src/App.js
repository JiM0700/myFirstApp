import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/homepage/Homepage';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/notFound/Notfound';
import SignUp from './components/signup/Signup';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={[<Home />]} />
          <Route path="/about" element={[<About />]} />
          <Route path="/contact" element={[<Contact />]} />
          <Route path="/signup" element={[<SignUp />]} />
          <Route path="/login" element={[<Login />]} />
          <Route path="*" element={[<NotFound />]} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
