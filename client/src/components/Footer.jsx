function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section">
                    <h2>🌾 Farmer's Mart</h2>
                    <p>
                        Smart farming products and recommendations
                        for better farming.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/recommendations">Recommendations</a>
                    <a href="/cart">Cart</a>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: support@farmersmart.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Farmer's Mart. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;