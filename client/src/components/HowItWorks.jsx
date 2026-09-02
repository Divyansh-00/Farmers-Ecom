function HowItWorks() {
    return (
        <section className="how-it-works">
            <h2>How Farmer's Mart Works</h2>

            <p>
                Get farming products suited to your crop and local conditions.
            </p>

            <div className="steps-container">
                <div className="step-card">
                    <div className="step-icon">🌾</div>
                    <h3>1. Select Your Crop</h3>
                    <p>
                        Choose the crop you are planning to grow.
                    </p>
                </div>

                <div className="step-card">
                    <div className="step-icon">📍</div>
                    <h3>2. Enter Your Location</h3>
                    <p>
                        Tell us where you are farming.
                    </p>
                </div>

                <div className="step-card">
                    <div className="step-icon">🌦️</div>
                    <h3>3. Check Weather</h3>
                    <p>
                        We check the weather conditions for your location.
                    </p>
                </div>

                <div className="step-card">
                    <div className="step-icon">💡</div>
                    <h3>4. Get Recommendations</h3>
                    <p>
                        Receive products suitable for your crop and conditions.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;