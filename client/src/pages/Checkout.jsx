import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Checkout() {
    const { cart, getCartTotal, clearCart } = useCart();

    const [deliveryDetails, setDeliveryDetails] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        pinCode: ""
    });

    const handleChange = (e) => {
        setDeliveryDetails({
            ...deliveryDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
        customer: deliveryDetails,
        products: cart.map((item) => ({
            productId: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        totalAmount: getCartTotal()
    };

    try {
        const response = await fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to place order");
        }

        clearCart();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

    return (
        <div>
            <Navbar />

            <main className="checkout-page">
                <h1>Checkout</h1>

                <form
                    className="delivery-form"
                    onSubmit={handleSubmit}
                >
                    <h2>Delivery Details</h2>

                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={deliveryDetails.fullName}
                        onChange={handleChange}
                    />

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={deliveryDetails.phone}
                        onChange={handleChange}
                    />

                    <label>Address</label>
                    <textarea
                        name="address"
                        placeholder="Enter your delivery address"
                        value={deliveryDetails.address}
                        onChange={handleChange}
                    ></textarea>

                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={deliveryDetails.city}
                        onChange={handleChange}
                    />

                    <label>PIN Code</label>
                    <input
                        type="text"
                        name="pinCode"
                        placeholder="Enter your PIN code"
                        value={deliveryDetails.pinCode}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Place Order
                    </button>
                </form>

                <h2>Total: ₹{getCartTotal()}</h2>
            </main>

            <Footer />
        </div>
    );
}

export default Checkout;