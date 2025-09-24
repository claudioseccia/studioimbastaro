import { useContext } from "react";
import { /* useLocation, */ useParams, Link } from "react-router-dom";
import { StateContext } from "@/Components/StateProvider";
// import Carousel from "@/Components/Carousel/Carousel";
import Gallery from "@/Components/Gallery/Gallery";
import styled from "styled-components";

import ParallaxImage from "../Components/ParallaxImage/ParallaxImage";

export const ProjectsSectionContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 10%;
  position: relative;
  text-align: left;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: left;
  @media screen and (max-width: 700px) {
    margin-top: 30%;
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: left;
  text-transform: uppercase;
  @media screen and (max-width: 700px) {
    margin-top: 30%;
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 2% auto;
  background-color: #fff;
`;
// import data from '../assets/data.json';
const Project = () => {
  const params = useParams();
  const { projectsData } = useContext(StateContext);

  // const location = useLocation();
  const projectsDataCategory =
    projectsData && projectsData.find((el) => el.slug === params.id);

  const project = projectsDataCategory?.projects.find(
    (el) => el.slug === params.project
  );
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  /* const slides = project.slides.reduce(
    (el) => ({
      asset: `${REACT_APP_API_URL}/${el.asset}`,
      width: `${el.width}`,
      height: `${el.height}`,
    }),
    []
  ); */
  // const slides = project.slides.reduce((acc, { asset, width, height }) => {
  //   acc.push({ asset: `${REACT_APP_API_URL}/${asset}`, width, height });
  //   return acc;
  // }, [])
  //const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];
  const breakpoints = [3840, 1920, 1080, 640, 384, 256];

  function assetLink(asset, width) {
    console.log("width ------------- ", width);
    return `${REACT_APP_API_URL}/${asset}.${width}w.jpg`;
    //return `${REACT_APP_API_URL}/${asset}`;
  }

  const slides = project?.slides.map(({ asset, width, height, title }) => ({
    src: assetLink(asset, width),
    // src: breakpoints.map((breakpoint) => ({
    //   src: assetLink(asset, breakpoint),
    //   width: breakpoint,
    //   height: Math.round((height / width) * breakpoint),
    // })),
    width,
    height,
    title,
    srcSet: breakpoints.map((breakpoint) => ({
      src: assetLink(asset, breakpoint),
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
  }));
  console.log("slides", slides);
  return (
    <>
      <ProjectsSectionContainer>
        {project ? (
          <>
            <Title>{project.name}</Title>
            <CategoryTitle>
              <Link
                style={{ color: "#999" }}
                to={{
                  pathname: `/progetti/${params.id}/`,
                }}
              >
                {params.id}
              </Link>
            </CategoryTitle>
            {project && (
              <>
                <p>{project.about}</p>
                <br />
                {/* <h2>{project.email}</h2>
              <p>{project.greeting}</p> */}
                {/* <img src={project.picture} alt={project.name} /> */}
                <CarouselContainer>
                  {/* 
                  {slides && <Carousel slides={slides} />}
                   */}
                  {slides && <Gallery slides={slides} />} {/* */}
                </CarouselContainer>
                <p>
                  Torna alle {"  "}
                  <Link
                    to={{
                      pathname: `/progetti/${params.id}/`,
                    }}
                  >
                    {params.id}
                  </Link>
                </p>
              </>
            )}
          </>
        ) : (
          <Title>Progetto non trovato</Title>
        )}
      </ProjectsSectionContainer>
      <ParallaxImage
        //src={slides[slides.length - 1].src}
        src={project?.picture}
        alt="Studio Imbastaro"
      ></ParallaxImage>
    </>
  );
};

export default Project;
