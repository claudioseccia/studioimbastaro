import { styled } from "styled-components";
import { FlexColumnContainer, FlexRowContainer } from "../GlobalElements";
export const ShopSectionContainer = styled.div`
  width: 100%;
  background: white;
`;
export const GridProductsContainer = styled.div`
  width: 90%;

  margin: auto;
  display: grid;
  margin-top: 10%;
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

export const Title = styled.p`
  padding-top: 5%;
  font-size: 0.8rem;
  color: red;
  text-align: center;
  color: gray;
  font-family: "Outfit", sans-serif;
  font-weight: 600;
`;

export const ProductCard = styled.div`
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  height: 60%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 700px) {
  }
`;

export const InfoProductContainer = styled(FlexColumnContainer)`
  height: 50%;
  position: relative;
  gap: 0px;
  line-height: 0px;
`;

export const Name = styled.p``;

export const Artist = styled.p``;

export const Price = styled.p`
  opacity: 0.5;
`;

export const PiecesNumber = styled.p`
  opacity: 0.5;
  margin-left: auto;
`;
export const AddToCart = styled.button`
  font-weight: 600;
`;

export const RightContainer = styled(FlexColumnContainer)`
  margin-left: auto;
  width: 40%;
  justify-content: space-between;
`;
export const ProductTextContainer = styled(FlexRowContainer)`
  font-size: 0.6rem;
`;
