import { styled } from "styled-components";
import { keyframes } from "styled-components";
import { FlexRowContainer } from "../GlobalElements";

export const InfiniteTextContainer = styled.div`
  height: 100px;
  width: 100%;
  left: 0px;

  overflow: hidden;
`;

export const scrollingleft1 = keyframes`
  0% {
    transform: translateX(0%);
    -webkit-transform: translateX(0%);
  }

  100% {
    transform: translateX(-200%);
    -webkit-transform: translateX(-200%);
  }


`;
export const InfiniteText = styled.p`
  width: 100%;
  padding-top: 20px;
  margin: 0 auto;
  font-size: 4rem;
  font-weight: 600;
  white-space: nowrap;
  display: inline-block;
  animation-delay: 10s;
  -webkit-animation: scrollingleft1 40s linear infinite;
  animation: ${scrollingleft1} 40s linear infinite;
`;
export const ReviewsIconsContainer = styled(FlexRowContainer)`
  justify-content: space-evenly;
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledReviewIcon = styled.img`
  max-width: 150px;
  max-height: 70px;
  margin-bottom: 5%;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s ease-in;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const IconReviewResponsive = styled(StyledReviewIcon)`
  display: none;
  opacity: 1;
  margin: auto;

  height: 50px;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const RoundBtnContainer = styled.div`
  width: 100%;
  height: 9rem;
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const RoundBtn = styled.button`
  height: 15px;
  width: 15px;
  padding: 2px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  &:focus {
    background: black;
    transition: all 250ms ease-in-out;
  }
`;
