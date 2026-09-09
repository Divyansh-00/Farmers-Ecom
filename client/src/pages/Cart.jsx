import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Cart() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal
    } = useCart();

    return (
        <div>
            <Navbar />

            <main className="cart-page">
                <h1>Your Cart</h1>

                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map((item) => (
                                <div className="cart-item" key={item._id}>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>₹{item.price} each</p>
                                    </div>

                                    <div className="quantity-controls">
                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item._id)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item._id)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>

                                    <strong>
                                        ₹{item.price * item.quantity}
                                    </strong>

                                    <button
                                        onClick={() =>
                                            removeFromCart(item._id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-total">
                            <h2>Total: ₹{getCartTotal()}</h2>

                            <button>Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default Cart;