import "../App.css";
import Navbar from "../components/Navbar";
import RecommendationForm from "../components/RecommendationForm";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Navbar />

            <main className="hero">
                <h1>Smart Farming Starts Here</h1>

                <p>
                    Find the right products for your crops
                    and get recommendations based on your weather.
                </p>

                <button>🌱 Get Recommendations</button>
            </main>

            <RecommendationForm />

            <Categories />

            <FeaturedProducts />

            <HowItWorks />

            <Footer />
        </div>
    );
}

export default Home;