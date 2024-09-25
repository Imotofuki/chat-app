import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import ChatPage from './components/Page/Chat';
import AddFriend from './components/Page/AddFriend';
import Friend from './components/Page/Friend';
import Login from './components/Page/signin';

function App() {


  return (

    <Router>
      <div>

        <Routes>

          <Route path="/" element={<ChatPage />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/add_friend" element={<AddFriend />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
