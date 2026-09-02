import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
    return (
        <div>
            <Navbar />

            <main className="products-page">
                <h1>Farming Products</h1>

                <p>
                    Browse our collection of farming products.
                </p>

                <div className="products-grid">

                    <div className="product-card">
                        <div className="product-image">🌾</div>

                        <h3>Premium Wheat Seeds</h3>

                        <p>High-quality wheat seeds for better yield.</p>

                        <strong>₹499</strong>

                        <button>Add to Cart</button>
                    </div>

                    <div className="product-card">
                        <div className="product-image">🌱</div>

                        <h3>Vegetable Seeds</h3>

                        <p>Quality seeds for vegetable farming.</p>

                        <strong>₹299</strong>

                        <button>Add to Cart</button>
                    </div>

                    <div className="product-card">
                        <div className="product-image">🧪</div>

                        <h3>Organic Fertilizer</h3>

                        <p>Natural fertilizer for healthy crop growth.</p>

                        <strong>₹699</strong>

                        <button>Add to Cart</button>
                    </div>

                    <div className="product-card">
                        <div className="product-image">🛠️</div>

                        <h3>Farming Tool Kit</h3>

                        <p>Essential tools for everyday farming.</p>

                        <strong>₹899</strong>

                        <button>Add to Cart</button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Products;