import { styled } from "styled-components";
import { FlexRowContainer } from "../GlobalElements";
// import { ReactComponent as StudioLogo } from "../../assets/logo.svg";
import StudioLogo from "../../assets/logo_wh.svg";

export const StyledStudioLogo = styled(StudioLogo)`
  @media screen and (max-width: 700px) {
    height: 60px;
    margin-top: 12px;
  }
`;

export const Navbar = styled(FlexRowContainer)`
  /* color: ${(props) => (props.onover ? "black" : "white")}; */
  padding: 1.2rem;
  background: ${(props) =>
    props.onover
      ? "#eee"
      : props.scrolled
      ? "#eeee"
      : `rgba(255, 255, 255, .66)`};
  display: flex;
  /* justify-content: flex-end; */
  flex-direction: row-reverse;
  transition: background 0.4s ease-in-out;
  /* color: ${(props) => (props.onover ? "black" : "white")}; */
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  font-size: 1rem;
  color: ${(props) => (props.onover ? "black" : "white")};

  @media screen and (max-width: 700px) {
    padding: 0.2rem;
    justify-content: space-between;
  }
`;

export const Span = styled.span`
  color: black;
  font-size: 1.1rem;
  border: 2px solid white;
  padding: 10px 10px 5px 10px;
  border-radius: 100%;
  &:hover {
    border-color: #000;
    -webkit-transition: border-color 2s ease-out;
    -moz-transition: border-color 2s ease-out;
    -o-transition: border-color 2s ease-out;
    transition: border-color 2s ease-out;
  }

  @media screen and (max-width: 700px) {
    display: block;
  }
`;
export const Btn = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.onover ? "black" : "white")};
  font-size: 1.5rem;
`;
export const A = styled.a`
  color: ${(props) => (props.onover ? "black" : "white")};
  font-size: 1.5rem;
`;
export const LinkContainer = styled(FlexRowContainer)`
  gap: 2rem;
  z-index: 100;
  padding: 1rem;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const BackgroundContainer = styled(FlexRowContainer)`
  background: url(${(props) => props.background}) center;
  background-size: cover;
  transition: background 0.4s ease-in;
  width: 100vw;
  height: 100vh;
  cursor: grab;
  position: relative;
  color: white;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    height: 80vh;
  }
`;
export const Logo = styled.div`
  position: absolute;
  top: 0rem;
  left: 5%;
  @media screen and (max-width: 700px) {
    left: 0;
  }
`;
export const Title = styled.h1`
  position: absolute;
  top: ${(props) => (props.onover ? "1rem" : "5rem")};
  left: ${(props) => (props.onover ? "22%" : "5%")};
  font-size: ${(props) => (props.onover ? "1rem" : "3rem")};
  transition: font-size 0.4s ease-in-out;
  color: ${(props) => (props.onover ? "black" : "#fff")};

  @media screen and (max-width: 700px) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    font-size: ${(props) => (props.onover ? "1rem" : "6rem")};
  }
`;

export const BackgroundInfo = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  text-align: left;
  color: white;
  line-height: 22px;
  transition: 0.4s ease-in-out;
  margin: 5%;
`;

export const BackgroundLink = styled.div`
  a {
    color: white;
    border-bottom: 1px solid white;
    &:visited {
      color: white;
    }
    &:hover {
      border-bottom: none;
    }
  }
`;

export const BtnContainer = styled(FlexRowContainer)`
  gap: 10px;
  margin: 5%;
`;

export const RoundedBtn = styled.button`
  background: white;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: black;

  @media screen and (max-width: 700px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
