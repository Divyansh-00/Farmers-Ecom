function Categories() {
    return (
        <section className="categories-section">
            <h2>Shop by Category</h2>

            <p>
                Everything you need for successful farming.
            </p>

            <div className="categories-container">
                <div className="category-card">
                    <div className="category-icon">🌾</div>
                    <h3>Seeds</h3>
                    <p>Quality seeds for different crops.</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">🧪</div>
                    <h3>Fertilizers</h3>
                    <p>Improve crop growth and soil health.</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">🛠️</div>
                    <h3>Farming Tools</h3>
                    <p>Essential tools for everyday farming.</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">💧</div>
                    <h3>Irrigation</h3>
                    <p>Products for efficient water management.</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">🌱</div>
                    <h3>Crop Protection</h3>
                    <p>Protect your crops from pests and diseases.</p>
                </div>
            </div>
        </section>
    );
}

export default Categories;