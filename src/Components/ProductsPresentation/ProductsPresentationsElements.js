import { styled } from "styled-components";
import { FlexRowContainer } from "../GlobalElements";

export const ProductsPresentationContainer = styled.div`
  width: 90%;
  cursor: grab;
  background: url(${(props) => props.background}) center no-repeat;
  background-size: cover;
  height: 700px;
  transition: background 0.3s ease-in;
  margin-bottom: 10%;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 700px) {
    justify-content: flex-start;
    height: 500px;
  }
`;

export const ProductInfoContainer = styled.div`
  background: ${(props) => props.background};
  width: 20%;
  height: 20%;
  padding: 3rem;
  transition: background 0.3s ease-in;

  @media screen and (max-width: 700px) {
    justify-content: flex-start;
    width: 80%;
    padding: 2rem;
  }
`;

export const PriceAndLinkContainer = styled(FlexRowContainer)`
  justify-content: space-between;
`;
