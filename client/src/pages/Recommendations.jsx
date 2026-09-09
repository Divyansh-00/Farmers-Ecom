import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Recommendations() {
    const [crop, setCrop] = useState("");
    const [location, setLocation] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { addToCart } = useCart();

    const getRecommendations = async () => {
        if (!crop) {
            setError("Please select a crop.");
            return;
        }

        setLoading(true);
        setError("");
        setRecommendations([]);

        try {
            const response = await fetch(
                `http://localhost:5000/api/products/recommend/${crop}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch recommendations");
            }

            const data = await response.json();
            setRecommendations(data);
        } catch (error) {
            setError("Unable to get recommendations.");
        }

        setLoading(false);
    };

    return (
        <div>
            <Navbar />

            <main className="recommendations-page">
                <h1>Smart Farming Recommendations</h1>

                <p>
                    Tell us about your crop and location to get
                    personalized farming recommendations.
                </p>

                <div className="recommendations-form">
                    <div className="form-group">
                        <label>Crop</label>

                        <select
                            value={crop}
                            onChange={(e) => setCrop(e.target.value)}
                        >
                            <option value="">Select your crop</option>
                            <option value="Wheat">Wheat</option>
                            <option value="Rice">Rice</option>
                            <option value="Maize">Maize</option>
                            <option value="Potato">Potato</option>
                            <option value="Tomato">Tomato</option>
                            <option value="Cotton">Cotton</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Location</label>

                        <input
                            type="text"
                            placeholder="Enter your city or location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <button onClick={getRecommendations}>
                        🌱 Get Recommendations
                    </button>
                </div>

                {loading && <p>Loading recommendations...</p>}

                {error && <p>{error}</p>}

                {recommendations.length > 0 && (
                    <div className="recommendations-results">
                        <h2>Recommended Products</h2>

                        <div className="product-grid">
                            {recommendations.map((product) => (
                                <div
                                    className="product-card"
                                    key={product._id}
                                >
                                    <div className="product-image">
                                        {product.category === "Seeds"
                                            ? "🌱"
                                            : product.category === "Fertilizers"
                                            ? "🧪"
                                            : "🛠️"}
                                    </div>

                                    <h3>{product.name}</h3>

                                    <p>{product.description}</p>

                                    <p>₹{product.price}</p>

                                    <button
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="recommendation-info">
                    <h2>How will we recommend products?</h2>

                    <div className="recommendation-steps">
                        <div>
                            <span>🌾</span>
                            <h3>Your Crop</h3>
                            <p>
                                We identify the requirements of your selected
                                crop.
                            </p>
                        </div>

                        <div>
                            <span>📍</span>
                            <h3>Your Location</h3>
                            <p>
                                Your location helps us understand local
                                conditions.
                            </p>
                        </div>

                        <div>
                            <span>🌦️</span>
                            <h3>Weather</h3>
                            <p>
                                Weather data will be used to understand
                                current conditions.
                            </p>
                        </div>

                        <div>
                            <span>💡</span>
                            <h3>Products</h3>
                            <p>
                                We suggest products that match your farming
                                needs.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Recommendations;