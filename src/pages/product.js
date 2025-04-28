// pages/product.js
import { useEffect, useState } from "react";
import styles from "../styles/Product.module.css";

const products = [
  {
    name: "Smart Watch",
    price: 1599,
    image: "/images/product1.jpg",
  },
  {
    name: "Apple MacBook Air M1 Chip",
    price: 62500,
    image: "/images/product2.jpg",
  },
  {
    name: "Zebronics Jet Pro Gaming Headphone",
    price: 1499,
    image: "/images/product3.jpg",
  },
    {
        name: "Amazon Echo Dot",
        price: 5499,
        image: "/images/product4.jpg",
    },
    {
        name: "Apple MagSafe Battery Pack",
        price: 4199,
        image: "/images/product5.jpg",
    },
    {
        name: "ivoler Ergonomic Laptop Stand",
        price: 1899,
        image: "/images/product6.jpg",
    }
];

const Product = () => {
  const [toastMessage, setToastMessage] = useState("");

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const price = parseFloat(product.price);
    if (isNaN(price)) {
      alert("Invalid price.");
      return;
    }

    const existingIndex = cart.findIndex((item) => item.name === product.name);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        name: product.name,
        price: price,
        quantity: 1,
        image: product.image,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    showToast("Added to cart!");
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>ShopSmart Products</h1>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h2>{product.name}</h2>
            <p className={styles.price}>₹{product.price.toFixed(2)}</p>
            <button
              className={styles.addToCartBtn}
              onClick={() => addToCart(product)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
    </div>
  );
};

export default Product;
