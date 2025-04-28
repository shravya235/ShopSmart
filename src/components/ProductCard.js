export default function ProductCard({ product }) {
    const addToCart = (name, price, image) => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProduct = cart.find(item => item.name === name);
  
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1, image });
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} added to cart!`);
    };
  
    return (
      <div className="product-item" data-name={product.name.toLowerCase()}>
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <p><strong>{product.name}</strong></p>
          <p className="price">{product.price}</p>
          <button className="add-to-cart-btn" onClick={() => addToCart(product.name, product.price, product.image)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  