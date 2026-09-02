import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Recommendations() {
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

                        <select>
                            <option>Select your crop</option>
                            <option>Wheat</option>
                            <option>Rice</option>
                            <option>Maize</option>
                            <option>Potato</option>
                            <option>Tomato</option>
                            <option>Cotton</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Location</label>

                        <input
                            type="text"
                            placeholder="Enter your city or location"
                        />
                    </div>

                    <button>
                        🌱 Get Recommendations
                    </button>

                </div>

                <div className="recommendation-info">
                    <h2>How will we recommend products?</h2>

                    <div className="recommendation-steps">

                        <div>
                            <span>🌾</span>
                            <h3>Your Crop</h3>
                            <p>
                                We identify the requirements of your selected crop.
                            </p>
                        </div>

                        <div>
                            <span>📍</span>
                            <h3>Your Location</h3>
                            <p>
                                Your location helps us understand local conditions.
                            </p>
                        </div>

                        <div>
                            <span>🌦️</span>
                            <h3>Weather</h3>
                            <p>
                                Weather data will be used to understand current conditions.
                            </p>
                        </div>

                        <div>
                            <span>💡</span>
                            <h3>Products</h3>
                            <p>
                                We suggest products that match your farming needs.
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