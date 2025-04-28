import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductCard from '../components/ProductCard';
import MotionBanner from '../components/MotionBanner';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const productsData = [
      { name: 'Smart Watch', image: '/images/product1.jpg', price: '₹1,599', description: 'Smart Watch with fitness tracker.' },
      { name: 'Apple MacBook Air M1 Chip', image: '/images/product2.jpg', price: '₹62,500', description: 'Apple MacBook Air with M1 chip.' },
      { name: 'Zebronics Jet Pro Gaming Headphone', image: '/images/product3.jpg', price: '₹1,499', description: 'Wired Gaming Headphones with Mic.' },
      { name: 'Amazon Echo Dot', image: '/images/product4.jpg', price: '₹5,499', description: 'Alexa Smart Speaker with Bluetooth.' },
      { name: 'Apple MagSafe Battery Pack', image: '/images/product5.jpg', price: '₹4,199', description: 'Power Bank Compatible with iPhone.' },
      { name: 'ivoler Ergonomic Laptop Stand', image: '/images/product6.jpg', price: '₹1,899', description: 'Portable Adjustable Aluminum Laptop Stand.' },
    ];
    setProducts(productsData);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <Head>
        <title>ShopSmart - Home</title>
      </Head>

      <Header onSearch={handleSearch} />

      <MotionBanner />

      <section className="product-list">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Products</h1>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
