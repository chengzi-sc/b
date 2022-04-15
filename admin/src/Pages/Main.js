import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login.js'
import AdminIndex from './AdminIndex'
function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/index/*" element={<AdminIndex />} />
            </Routes>
        </Router>
    )
}
export default Main