import { styled } from "styled-components";
import { FlexRowContainer } from "../GlobalElements";

export const InfoSectionContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 10%;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
export const FactContainer = styled(FlexRowContainer)`
  display: flex;
  margin-bottom: 10%;
  flex-direction: ${(props) =>
    props.imgleft === "true" ? "row-reverse" : "row"};
  align-items: flex-start;
  justify-content: space-evenly;
  @media screen and (max-width: 700px) {
    flex-direction: ${(props) =>
      props.imgleft === "true" ? "column-reverse" : "column"};
  }
`;

export const TextContainer = styled.div`
  width: 90%;
  padding: 1rem;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
  }
`;

export const TextContainerFull = styled.div`
  width: 100%;
  padding: 1rem;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-align: left;
  @media screen and (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

export const StyledP = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 27px;
  text-align: justify;
  span {
    color: #999;
    font-size: 1rem;
    text-transform: uppercase;
  }
  a {
    color: #999;
    text-transform: uppercase;
  }
`;

export const StyledClient = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
