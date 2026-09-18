import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Recommendations from "./pages/Recommendations";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/recommendations"
                        element={<Recommendations />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;