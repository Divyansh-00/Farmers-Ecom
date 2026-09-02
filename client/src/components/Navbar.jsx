function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>🌾 Farmer's Mart</h2>
            </div>

            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/recommendations">Recommendations</a>
                <a href="/cart">🛒 Cart</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}

export default Navbar;