import { /* useLocation, */ useParams, Link } from "react-router-dom";
import { StateContext } from "@/Components/StateProvider";
import { useContext } from "react";
import styled from "styled-components";
// import { StyledP } from "../Components/InfoSection/InfoSectionElements";
import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
//import data from "../assets/data.json";

export const ProjectsSectionContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 10%;
  position: relative;
  text-align: left;

  @media screen and (max-width: 700px) {
    width: 90%;
    margin-top: 10%;
  }
`;
export const ProjectTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
  span {
    a {
      svg {
        height: 14px;
      }
      color: #000;
    }
  }
`;
export const GridProjectsContainer = styled.div`
  display: grid;
  padding-bottom: 10%;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  // @media screen and (max-width: 1000px) {
  //   grid-template-columns: repeat(2, 1fr);
  //   gap: 10px;
  //   width: 95%;
  // }
  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    width: 95%;
  }
`;

const ProjectElement = styled.div`
  border: 1px solid #eee;
  border-radius: 0.6rem;
  padding: 0 0 0.6rem 0;
`;

const NavLink = styled(Link)`
  padding: 20px 0 0 0;
  margin: 0;
  color: #888;
  text-decoration: none;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-align: left;
  @media screen and (max-width: 700px) {
    margin-top: 30%;
    font-size: 1.8rem;
    text-align: left;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1rem;
  padding: 0.5rem;
  color: #333;
  text-transform: uppercase;
  background: #eee;
  border-radius: 0.6rem 0.6rem 0 0;
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
    height: 5rem;
    padding: 0.5rem;
    text-align: left;
  }
`;

export const Img = styled.img`
  width: 100%;
  maxwidth: 900px;
  aspectratio: 3 / 2;
  margin: 0 auto;
`;
const ProjectsCategory = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs only once on mount.

  const params = useParams();
  //   const location = useLocation();
  const { projectsData } = useContext(StateContext);
  const projectsDataCategory =
    projectsData && projectsData.find((el) => el.slug === params.id);
  console.log("PROJECTS CATEGORY PAGE");
  console.log("params", params);
  console.log(projectsDataCategory);
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  return (
    <ProjectsSectionContainer>
      {projectsDataCategory ? (
        <>
          <ProjectTitleContainer>
            <Title>{projectsDataCategory.name}</Title>
            <span>
              <Link
                to={{
                  pathname: `../progetti`,
                }}
              >
                <AiOutlineArrowRight />
                Visualizza tutte le categorie
              </Link>
            </span>
          </ProjectTitleContainer>
          <GridProjectsContainer>
            {projectsDataCategory?.projects.map((item, id) => (
              <ProjectElement key={id}>
                <NavLink
                  to={{
                    pathname: `../progetti/${projectsDataCategory.slug}/${item.slug}`,
                    state: item,
                  }}
                >
                  <ProjectTitle>{item.name}</ProjectTitle>

                  <Img
                    src={`${REACT_APP_API_URL}/${item.picture}`}
                    alt={item.name}
                  />
                </NavLink>
              </ProjectElement>
            ))}
          </GridProjectsContainer>
          {/* 
          <StyledP>
            <Link
              to={{
                pathname: `../progetti`,
              }}
            >
              torna ai progetti
            </Link>
          </StyledP> 
          */}
        </>
      ) : (
        <Title>Nessuna progetto presente nella categoria</Title>
      )}
    </ProjectsSectionContainer>
  );
};

export default ProjectsCategory;
