import React from "react";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login } />
          <Route path="/register" Component={Register} />

          <Route path="*" element={<h1>Page Not Found</h1>} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
