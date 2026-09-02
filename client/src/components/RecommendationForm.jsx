function RecommendationForm() {
    return (
        <section className="recommendation-section">
            <h2>Find the Right Products for Your Crop</h2>

            <p>
                Select your crop and location to get personalized farming
                recommendations.
            </p>

            <div className="recommendation-form">
                <div>
                    <label>Crop</label>
                    <select>
                        <option>Select a crop</option>
                        <option>Wheat</option>
                        <option>Rice</option>
                        <option>Maize</option>
                        <option>Potato</option>
                        <option>Tomato</option>
                        <option>Cotton</option>
                    </select>
                </div>

                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        placeholder="Enter your city or location"
                    />
                </div>

                <button>🌱 Get Recommendations</button>
            </div>
        </section>
    );
}

export default RecommendationForm;