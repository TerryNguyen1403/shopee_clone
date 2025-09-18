import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import NavbarWrapper from "./components/NavComponents/NavbarWrapper";

// Import pages
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from './pages/Cart';
import AllProducts from './pages/AllProducts'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavbarWrapper />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/all-products" element={<AllProducts />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
