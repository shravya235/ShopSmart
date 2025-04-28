// pages/_app.js
import '../styles/globals.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Pages where Header and Footer should NOT appear
  const noLayoutPages =  [ '/' , '/login', '/signup', '/payment', '/cart'];

  const isNoLayout = noLayoutPages.includes(router.pathname);
  const isHomePage = router.pathname === '/';

  // Search handler
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Implement search logic, like navigating or filtering
    router.push(`/?search=${encodeURIComponent(searchTerm)}`); // This updates the URL with the search query
  };

  return (
    <>
      {!isNoLayout && (
        <Header
          showSearch={isHomePage}
          openModal={openModal}
          onSearch={handleSearch}
        />
      )}

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
