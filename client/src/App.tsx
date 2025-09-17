import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import NavBar from "./components/NavBar";

// Import pages
import Home from './pages/Home/Home.tsx';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from './pages/Cart';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
