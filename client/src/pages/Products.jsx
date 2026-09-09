import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Unable to load products");
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Navbar />

            <main className="products-page">
                <h1>Farming Products</h1>

                <p>
                    Browse our collection of farming products.
                </p>

                {loading && <p>Loading products...</p>}

                {error && <p>{error}</p>}

                <div className="products-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product._id}>
                            <div className="product-image">
                                {product.category === "Seeds"
                                    ? "🌱"
                                    : product.category === "Fertilizers"
                                    ? "🧪"
                                    : "🛠️"}
                            </div>

                            <h3>{product.name}</h3>

                            <p>{product.description}</p>

                            <strong>₹{product.price}</strong>

                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Products;