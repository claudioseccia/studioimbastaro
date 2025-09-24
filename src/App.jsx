// import { useContext } from 'react';
// import Cart from '@/Components/cartSection/Cart';

import Footer from "@/Components/Footer/Footer";
import GlobalStyle from "@/Components/globalStyles";
// import HeroSection from "@/Components/HeroSection/HeroSection";
// import InfoSection from "@/Components/InfoSection/InfoSection";
// import ProductPresentation from "@/Components/ProductsPresentation/ProductsPrensentation";
// import ReviewsSection from "@/Components/ReviewsSection/ReviewsSection";
// import ShopSection from '@/Components/ShopSection/ShopSection';
// import { StateContext } from '@/Components/StateProvider';
// import VideoSection from "@/Components/VideoSection/VideoSection";
import "@/styles.scss";
import Theme from "@/Theme";

import {
  Routes,
  Route,
  /* Link,
  Navigate,
  NavLink,
  useLocation, */
} from "react-router-dom";
// import { useEffect, useState } from "react";
import Home from "@/Sections/Home";
import NoMatch from "@/Sections/NoMatch";
import Projects from "@/Sections/Projects";
import NavBar from "@/Components/HeroSection/Navbar";
import ProjectsCategory from "@/Sections/ProjectsCategory";
import Project from "@/Sections/Project";
import Clienti from "@/Sections/Clienti";
import "yet-another-react-lightbox/styles.css";
import { MapWithAddress } from "@/Components/Map/MapWithAddress";
export default function App() {
  // const { showCart } = useContext(StateContext);
  /* return (
    <Theme>
      <GlobalStyle />
      <HeroSection></HeroSection>
      <ReviewsSection></ReviewsSection>
      <InfoSection></InfoSection>
      <ProductPresentation></ProductPresentation>
      <VideoSection></VideoSection>
      <Footer></Footer>
    </Theme>
  ); */

  return (
    <Theme>
      <GlobalStyle />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progetti" element={<Projects />} />
        <Route path="/progetti/:id" element={<ProjectsCategory />} />
        <Route path="/progetti/:id/:project" element={<Project />} />
        <Route path="/clienti" element={<Clienti />} />
        {/* <Route path="/clienti" element={<Contatti />} /> */}
        <Route path="/contatti" element={<MapWithAddress />} />
        {/* nomatch */}
        <Route path="*" element={<NoMatch />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> alternative redirect to basepath*/}
      </Routes>
      {/* <Home /> */}
      <Footer></Footer>
    </Theme>
  );
}
