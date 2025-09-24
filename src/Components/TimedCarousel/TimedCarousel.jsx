// Add near the top with other imports
import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Dummy data for the carousel images.
// Includes a mix of portrait and landscape formats.
// const slides = [
//   {
//     id: 1,
//     src: "https://placehold.co/1200x800/1e293b/d4d4d8?text=Landscape+1",
//     alt: "A scenic landscape",
//   },
//   {
//     id: 2,
//     src: "https://placehold.co/800x1200/4c0519/d4d4d8?text=Portrait+2",
//     alt: "A portrait photo",
//   },
//   {
//     id: 3,
//     src: "https://placehold.co/1200x800/22c55e/d4d4d8?text=Landscape+3",
//     alt: "A green field",
//   },
//   {
//     id: 4,
//     src: "https://placehold.co/800x1200/1f2937/d4d4d8?text=Portrait+4",
//     alt: "A person standing",
//   },
// ];

// const duration = 5000; // Time in ms for each slide to be displayed

// Inline styles for the components
const styles = {
  appContainer: {
    padding: "2rem",
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: "#18181b",
    color: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#fff",
  },
  subtitle: {
    marginBottom: "2rem",
    color: "#a1a1aa",
  },
  carouselContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    height: "80vh",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    margin: "0 auto",
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  slideIndicatorContainer: {
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "0.75rem",
    zIndex: 10,
  },
  slideIndicator: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  },
};

const TimedCarousel = ({ images, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div style={styles.carouselContainer}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={styles.slide}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            style={styles.image}
          />
        </motion.div>
      </AnimatePresence>
      <div style={styles.slideIndicatorContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.slideIndicator,
              backgroundColor:
                index === currentIndex ? "#fff" : "rgba(255, 255, 255, 0.5)",
            }}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default TimedCarousel;

TimedCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  // If your component accepts a 'duration' prop, validate it as well:
  duration: PropTypes.number,
};

// Optional defaults (do not provide a default for a required prop)
TimedCarousel.defaultProps = {
  duration: 5000,
};
//usage: <Carousel images={slides} duration={5000} />
