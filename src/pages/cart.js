import { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const sanitizedCart = storedCart.map((item) => {
      const cleanPrice =
        typeof item.price === "string"
          ? parseFloat(item.price.replace(/[^\d.]/g, ""))
          : parseFloat(item.price);

      return {
        ...item,
        price: isNaN(cleanPrice) ? 0 : cleanPrice,
        quantity: parseInt(item.quantity) || 1,
      };
    });

    setCart(sanitizedCart);
  }, []);

  const formatPrice = (price) => {
    const num = parseFloat(price);
    return isNaN(num) ? "₹0.00" : `₹${num.toFixed(2)}`;
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    showToast("Item removed");
  };

  const updateQuantity = (index, value) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = parseInt(value);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    showToast("Quantity updated");
  };

  const renderCart = () => {
    if (!cart || cart.length === 0) {
      return (
        <div className={styles.empty}>
          <img src="/images/empty-cart.png" alt="Empty Cart" />
          <p><strong>Your cart is empty</strong></p>
          <a href="/" className={styles.checkoutBtn}>Continue Shopping</a>
        </div>
      );
    }

    let grandTotal = 0;

    return (
      <>
        {cart.map((item, index) => {
          const itemTotal = item.price * item.quantity;
          grandTotal += itemTotal;

          return (
            <div className={styles.cartItem} key={index}>
              <img src={item.image} alt={item.name} />
              <div className={styles.itemInfo}>
                <p><strong>{item.name}</strong></p>
                <p>Price: {formatPrice(item.price)}</p>
                <p>Quantity:
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, e.target.value)}
                    className={styles.quantitySelect}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </p>
                <p>Total: {formatPrice(itemTotal)}</p>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(index)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          );
        })}
        <div className={styles.cartTotal}>
          <strong>Grand Total: {formatPrice(grandTotal)}</strong><br />
          <a href="/payment" className={styles.checkoutBtn}>Proceed to Checkout</a>
        </div>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>ShopSmart</h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.cartItems}>
          <h1>Your Cart</h1>
          <div id="cart-container">{renderCart()}</div>
        </section>
      </main>

      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="/customer-service">Customer Service</a> |
          <a href="/terms">Terms of Use</a> |
          <a href="/privacy">Privacy Policy</a> |
          <a href="/returns">Returns & Refunds</a>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
