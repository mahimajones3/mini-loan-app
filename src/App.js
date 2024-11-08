// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import LoanApplication from './LoanApplication';
import Repayment from './Repayment';

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/loan-application">Apply for Loan</Link>
        <Link to="/repayment">Make Repayment</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/loan-application" element={auth ? <LoanApplication auth={auth} /> : <Navigate to="/login" />} />
        <Route path="/repayment" element={auth ? <Repayment auth={auth} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
