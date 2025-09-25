import { Link /* , useParams */ } from "react-router-dom";
import { StateContext } from "@/Components/StateProvider";
import { useContext } from "react";
import styled from "styled-components";
import ParallaxImage from "../Components/ParallaxImage/ParallaxImage";
import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
// import data from "../assets/data.json";
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

export const ProjectCategoriesGrid = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ProjectCategory = styled.div`
  padding: 0;
  text-transform: uppercase;
  // font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  display: inline-block;
  text-align: left;
  padding: 1rem;
  background: #eee;
  border-radius: 0.6rem;
  &:hover {
    background: #ddd;
  }
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  padding-left: 1rem;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
  svg {
    margin-right: 1rem;
  }
`;

// export const ProjectCategory = styled.div`
//   background: #606060;
//   color: #fff;
//   padding: 4rem 1rem;
//   border-radius: 10px;
//   font-size: 1.2rem;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;
//   position: relative;
//   display: inline-block;

//   a,
//   a:link,
//   a:visited {
//     position: absolute;
//     inset: 0;
//     display: block;
//     text-decoration: none;
//     color: inherit;
//     padding: 1rem 0;
//   }
//   a:hover {
//     color: #ddd;
//   }
// `;

export const Title = styled.h2`
  font-size: 2.2rem;

  text-align: left;
  @media screen and (max-width: 700px) {
    margin-top: 30%;
    font-size: 1.8rem;
  }
`;
export const SubTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: left;
  font-weight: normal;
  color: #999;
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
`;
const Projects = () => {
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs only once on mount.

  const { projectsData } = useContext(StateContext);
  // const params = useParams();
  // console.log("PROJECTS PAGE");
  // console.log("params", params);
  // console.log("data", data);
  {
    /* <ProjectCategory key={id}>
                <AiOutlineArrowRight />
                <Link
                  to={{
                    pathname: `../progetti/${item.slug}`,
                    state: item,
                  }}
                >
                  {item.name}
                </Link>
              </ProjectCategory> */
  }
  return (
    <>
      <ProjectsSectionContainer>
        <Title>Progetti</Title>
        <SubTitle>Sfoglia categorie progetti</SubTitle>
        <ProjectCategoriesGrid>
          {projectsData &&
            projectsData.map((item) => (
              <ProjectCategory
                key={item.slug}
                as={Link}
                to={{
                  pathname: `../progetti/${item.slug}`,
                  state: item,
                }}
              >
                <AiOutlineArrowRight />
                {item.name}
              </ProjectCategory>
            ))}
        </ProjectCategoriesGrid>
      </ProjectsSectionContainer>
      <ParallaxImage
        src={`${REACT_APP_API_URL}/assets/images/projects/grand-hotel-radisson-milano/011.1920w.jpg`}
        alt="Studio Imbastaro"
      ></ParallaxImage>
    </>
  );
};

export default Projects;
