import React from 'react';
import './css/app.css';
// import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import ChatPage from './components/Page/Chat';
import Login from './components/Page/Signin';
import Signup from './components/Page/Signup';

function App() {


  return (

    <Router>
      <div>

        <Routes>

          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
