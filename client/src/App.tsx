import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import NavBar from "./components/NavBar";

// Import pages
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
