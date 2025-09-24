import { useState, useContext, useRef, useEffect } from "react";
import { StateContext } from "../StateProvider";
import { /* motion, */ useInView } from "framer-motion";
//import { motion, useInView } from "framer-motion/dist/framer-motion";

import { background } from "../../data/products";

import {
  BackgroundContainer,
  BackgroundInfo,
  BackgroundLink,
  // BtnContainer,
  // RoundedBtn,
} from "./heroSectionELements";

import { Link } from "react-router-dom";

// import NavBar from "./Navbar";
const HeroSection = () => {
  const { setChangeTitle, projectsData } = useContext(StateContext);
  const [currentBackground] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs only once on mount.

  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  console.log("HERO SECTION", projectsData);
  const randProjectCategory =
    projectsData &&
    projectsData[Math.floor(Math.random() * projectsData.length)];
  console.log("HERO SECTION RANDOM PROJECT category", randProjectCategory);

  const randomProject =
    randProjectCategory?.projects &&
    randProjectCategory.projects[
      Math.floor(Math.random() * randProjectCategory.projects.length)
    ];
  console.log("HERO SECTION RANDOM PROJECT", randomProject);

  const randomProjectSlug =
    randomProject &&
    REACT_APP_API_URL +
      "/progetti/" +
      randomProject.category +
      "/" +
      randomProject.slug;
  console.log("RANDOM PROJECT SLUG ", randomProjectSlug);

  /*
  const breakpoints = [256, 384, 640, 1080, 1920, 3840];
  function joinUrl(base, path) {
    if (!base) return path || "";
    if (!path) return base;
    const b = String(base).replace(/\/+$/, "");
    const p = String(path).replace(/^\/+/, "");
    return `${b}/${p}`;
  }
  function assetLink(asset, width) {
    const base = joinUrl(REACT_APP_API_URL, asset);
    return `${base}.${width}w.jpg`;
  }
  const slides =
    (randomProject &&
      randomProject?.slides?.map(({ asset, width, height, title }) => {
        // Responsive variants
        const srcSet = breakpoints.map((bp) => ({
          src: assetLink(asset, bp),
          width: bp,
          height: Math.round((height / width) * bp),
        }));

        // Use largest breakpoint as the default src
        const largest = breakpoints[breakpoints.length - 1];

        return {
          src: assetLink(asset, largest),
          width,
          height,
          // Both libraries accept alt; keep original title too
          alt: title || "",
          title,
          srcSet,
        };
      })) ||
    [];
  const Image = () => {
  return (
      <img
        src={randomImage.src}
        srcSet={randomImage.srcSet
          .map((src) => src.src + " " + src.width + "w")
          .join(", ")}
        alt="random"
        style={{ width: "100%", height: "100%" }}
      />
    );
  };
  */
  const randomImage =
    randomProject &&
    randomProject.slides[
      Math.floor(Math.random() * randomProject.slides.length)
    ].asset;

  // const randomImage = slides[Math.floor(Math.random() * slides?.length)];
  // const randomImage =
  //   slides && slides[Math.floor(Math.random() * slides?.length)].asset;
  console.log(
    "HERO SECTION RANDOM IMAGE",
    REACT_APP_API_URL + randomImage + ".3840w.jpg"
  );

  // const moveLeft = () => {
  //   const NextIndex =
  //     currentBackground === 0 ? background.length - 1 : currentBackground - 1;
  //   setCurrentBackground(NextIndex);
  // };

  // const moveRight = () => {
  //   const NextIndex =
  //     currentBackground === background.length - 1 ? 0 : currentBackground + 1;
  //   setCurrentBackground(NextIndex);
  // };

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
        background={REACT_APP_API_URL + randomImage + ".3840w.jpg"}
        name="home"
      >
        {randomProject && (
          <BackgroundInfo>
            <p>{randomProject.name}</p>
            <BackgroundLink>
              <Link
                to={randomProjectSlug}
                spy={true}
                smooth={true}
                duration={300}
              >
                {background[currentBackground].text}
              </Link>
            </BackgroundLink>
          </BackgroundInfo>
        )}
        {/* <BtnContainer>
          <RoundedBtn onClick={() => moveLeft()}>{"<"}</RoundedBtn>
          <RoundedBtn onClick={() => moveRight()}>{">"}</RoundedBtn>
        </BtnContainer> */}
      </BackgroundContainer>
    </>
  );

  // return (
  //   <>
  //     <BackgroundContainer
  //       ref={ref}
  //       id="Hero"
  //       background={background[currentBackground].img}
  //       name="home"
  //     >
  //       <BackgroundInfo>
  //         <p>{background[currentBackground].name}</p>
  //         <BackgroundLink>{background[currentBackground].text}</BackgroundLink>
  //       </BackgroundInfo>
  //       <BtnContainer>
  //         <RoundedBtn onClick={() => moveLeft()}>{"<"}</RoundedBtn>
  //         <RoundedBtn onClick={() => moveRight()}>{">"}</RoundedBtn>
  //       </BtnContainer>
  //     </BackgroundContainer>
  //   </>
  // );
};
export default HeroSection;
