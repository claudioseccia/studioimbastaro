import { useState, useContext, useRef, useEffect } from "react";
import { StateContext } from "../StateProvider";
import { /* motion, */ useInView } from "framer-motion";
//import { motion, useInView } from "framer-motion/dist/framer-motion";

import { background } from "../../data/products";

import {
  BackgroundContainer,
  BackgroundInfo,
  BackgroundLink,
  BtnContainer,
  RoundedBtn,
} from "./heroSectionELements";

// import NavBar from "./Navbar";
const HeroSection = () => {
  const { setChangeTitle } = useContext(StateContext);
  const [currentBackground, setCurrentBackground] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs only once on mount.

  const moveLeft = () => {
    const NextIndex =
      currentBackground === 0 ? background.length - 1 : currentBackground - 1;
    setCurrentBackground(NextIndex);
  };

  const moveRight = () => {
    const NextIndex =
      currentBackground === background.length - 1 ? 0 : currentBackground + 1;
    setCurrentBackground(NextIndex);
  };

  useEffect(() => {
    if (isInView) {
      setChangeTitle(false);
    }
  }, [isInView]);

  return (
    <>
      <BackgroundContainer
        ref={ref}
        id="Hero"
        background={background[currentBackground].img}
        name="home"
      >
        <BackgroundInfo>
          <p>{background[currentBackground].name}</p>
          <BackgroundLink>{background[currentBackground].text}</BackgroundLink>
        </BackgroundInfo>
        <BtnContainer>
          <RoundedBtn onClick={() => moveLeft()}>{"<"}</RoundedBtn>
          <RoundedBtn onClick={() => moveRight()}>{">"}</RoundedBtn>
        </BtnContainer>
      </BackgroundContainer>
    </>
  );
};
export default HeroSection;
