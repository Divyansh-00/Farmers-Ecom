import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <h2>🌾 Farmer's Mart</h2>
                </Link>
            </div>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/recommendations">Recommendations</Link>
                <Link to="/cart">🛒 Cart</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;