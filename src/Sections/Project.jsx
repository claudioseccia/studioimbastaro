import { useContext } from "react";
import { /* useLocation, */ useParams, Link } from "react-router-dom";
import { StateContext } from "@/Components/StateProvider";
// import Carousel from "@/Components/Carousel/Carousel";
import Gallery from "@/Components/Gallery/Gallery";
import styled from "styled-components";

import ParallaxImage from "../Components/ParallaxImage/ParallaxImage";
import { StyledP } from "../Components/InfoSection/InfoSectionElements";
import { useEffect } from "react";

export const ProjectsSectionContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 10%;
  position: relative;
  text-align: left;

  @media screen and (max-width: 700px) {
    width: 90%;
    margin-top: 30%;
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
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: left;
  text-transform: uppercase;
  span {
    color: #999;
    font-size: 1rem;
  }
  @media screen and (max-width: 700px) {
    margin-top: 10%;
    font-size: 1rem;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 2% auto;
  background-color: #fff;
`;

// Helper to safely join URL parts (avoids double slashes)
function joinUrl(base, path) {
  if (!base) return path || "";
  if (!path) return base;
  const b = String(base).replace(/\/+$/, "");
  const p = String(path).replace(/^\/+/, "");
  return `${b}/${p}`;
}

const Project = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs only once on mount.

  const params = useParams();
  const { projectsData } = useContext(StateContext);

  // const location = useLocation();
  const projectsDataCategory =
    projectsData && projectsData.find((el) => el.slug === params.id);

  const project = projectsDataCategory?.projects.find(
    (el) => el.slug === params.project
  );

  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  // Use ascending breakpoints for better browser selection (small -> large)
  const breakpoints = [256, 384, 640, 1080, 1920, 3840];
  // 3840 x 2160
  // 1920 x 1080
  // 1080 x 608
  // 640 x 360
  // 384 x 216
  // 256 x 144

  // 128 x 72

  function assetLink(asset, width) {
    const base = joinUrl(REACT_APP_API_URL, asset);
    return `${base}.${width}w.jpg`;
  }

  // Build slides suitable for react-photo-album (photos) and YARL (slides)
  const slides =
    project?.slides?.map(({ asset, width, height, title }) => {
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
    }) || [];

  return (
    <>
      <ProjectsSectionContainer>
        {project ? (
          <>
            <Title>{project.name}</Title>
            <CategoryTitle>
              <span>Cliente: </span>
              {project.client}
            </CategoryTitle>
            {/* <CategoryTitle>
              <span>categoria: </span>
              <Link
                style={{ color: "#999" }}
                to={{
                  pathname: `/progetti/${params.id}/`,
                }}
              >
                {params.id}
              </Link>
            </CategoryTitle> */}
            {project && (
              <>
                <StyledP>
                  <span>categoria: </span>
                  <Link
                    style={{ color: "#999" }}
                    to={{
                      pathname: `/progetti/${params.id}/`,
                    }}
                  >
                    {params.id.replace("-", " ")}
                  </Link>
                </StyledP>
                <StyledP>
                  <span>Incarico: </span>
                  {project.job}
                </StyledP>
                <StyledP>
                  <span>Descrizione: </span>
                  {project.about}
                </StyledP>
                <StyledP>
                  <span>Località: </span>
                  {project.site}
                </StyledP>
                <StyledP>
                  <span>Anno: </span>
                  {project.year}
                </StyledP>
                <StyledP>{project.description}</StyledP>

                <br />
                <CarouselContainer>
                  {/* If you want to use the older Carousel, plug it in here */}
                  {slides.length > 0 && <Gallery slides={slides} />}
                </CarouselContainer>
                <StyledP>
                  Torna alle {"  "}
                  <Link
                    to={{
                      pathname: `/progetti/${params.id}/`,
                    }}
                  >
                    {params.id.replace("-", " ")}
                  </Link>
                </StyledP>
              </>
            )}
          </>
        ) : (
          <Title>Progetto non trovato</Title>
        )}
      </ProjectsSectionContainer>
      <ParallaxImage
        // Fallback to project picture for the parallax image
        src={project?.picture}
        alt="Studio Imbastaro"
      ></ParallaxImage>
    </>
  );
};

export default Project;
