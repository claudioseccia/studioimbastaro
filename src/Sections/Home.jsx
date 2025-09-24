// import { useContext } from 'react';
// import Cart from './Components/cartSection/Cart';
// import { StateContext } from './Components/StateProvider';

import InfoSection from "@/Components/InfoSection/InfoSection";
// import ProductPresentation from "@/Components/ProductsPresentation/ProductsPrensentation";
// import ReviewsSection from "@/Components/ReviewsSection/ReviewsSection";
// import ShopSection from "@/Components/ShopSection/ShopSection";
// import VideoSection from "@/Components/VideoSection/VideoSection";
import "@/styles.scss";
import HeroSection from "../Components/HeroSection/HeroSection";
import ParallaxImage from "../Components/ParallaxImage/ParallaxImage";
import { useEffect } from "react";
// import Theme from "@/Theme";

export default function Home() {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs only once on mount.
  // const { showCart } = useContext(StateContext);
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  return (
    <>
      <HeroSection />
      {/* <ReviewsSection></ReviewsSection> */}
      <InfoSection></InfoSection>
      <ParallaxImage
        src={`${REACT_APP_API_URL}/assets/images/studio/foto3.jpg`}
        alt="Studio Imbastaro"
      ></ParallaxImage>
      {/* 
      <ProductPresentation></ProductPresentation>
      <ShopSection></ShopSection>
      <VideoSection></VideoSection> 
      */}
    </>
  );
}
