import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Checkout() {
    const { cart, getCartTotal } = useCart();

    return (
        <div>
            <Navbar />

            <main className="checkout-page">
                <h1>Checkout</h1>

                <form className="delivery-form">
                    <h2>Delivery Details</h2>

                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                    />

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                    />

                    <label>Address</label>
                    <textarea
                        placeholder="Enter your delivery address"
                    ></textarea>

                    <label>City</label>
                    <input
                        type="text"
                        placeholder="Enter your city"
                    />

                    <label>PIN Code</label>
                    <input
                        type="text"
                        placeholder="Enter your PIN code"
                    />

                    <button type="submit">
                        Place Order
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
}

export default Checkout;