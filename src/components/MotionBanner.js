// components/MotionBanner.js
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/MotionBanner.module.css";

const images = [
  "/images/banner4.png",
  "/images/banner2.jpg",
  "/images/banner3.webp",
   "/images/banner1.webp",
   "/images/banner5.jpg",
];

const MotionBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className={styles.bannerContainer}>
      <AnimatePresence custom={direction}>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className={styles.bannerImage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
        />
      </AnimatePresence>
    </div>
  );
};

export default MotionBanner;
