function FeaturedProducts() {
    return (
        <section className="products-section">
            <h2>Featured Products</h2>

            <p>
                Popular farming products selected for you.
            </p>

            <div className="products-container">

                <div className="product-card">
                    <div className="product-image">🌾</div>
                    <h3>Premium Wheat Seeds</h3>
                    <p>High-quality wheat seeds for better yield.</p>
                    <strong>₹499</strong>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image">🌱</div>
                    <h3>Organic Vegetable Seeds</h3>
                    <p>Collection of seeds for vegetable farming.</p>
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
        </section>
    );
}

export default FeaturedProducts;