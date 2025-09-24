import { styled } from "styled-components";
import { Link } from "react-scroll";
export const FooterWrapper = styled.div`
  background: white;
  /* padding-top: 2%; */
  font-family: Arial, Helvetica, sans-serif;
`;
export const LinkToTopContainer = styled.div`
  text-align: center;
  padding-bottom: 5%;
`;

export const StyledLink = styled(Link)`
  color: black;
  border: none;
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Outfit", sans-serif;

  cursor: pointer;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px black;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const FooterFlexContainer = styled.div`
  display: flex;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding-left: 2rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const AddressContainer = styled.div`
  width: 90%;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
  text-align: left;
`;

export const FooterLink = styled.div`
  width: 50%;
  padding: 3rem 4rem;
  font-size: 0.8rem;
  font-family: "Outfit", sans-serif;
  letter-spacing: 0.1rem;
  /* @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0;
  } */
  a,
  a:link,
  a:visited {
    color: #666;
  }
  a:hover {
    color: #ccc;
    transition: all 250ms ease-in-out;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    padding: 2rem 0rem;
    border: none;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  line-height: 2.3rem;
  padding-left: 0;
`;

export const StyledLi = styled.li`
  cursor: pointer;
  font-family: "Outfit", sans-serif;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  text-align: left;
  @media screen and (max-width: 900px) {
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #e0e0e0;
  font-size: 1rem;
  padding: 1rem 0;
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1rem;
  padding: 1rem 0;
  width: 70%;
  height: 200px;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const BtnSend = styled.button`
  background: black;
  color: white;
  width: 17rem;
  height: 3rem;
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid;
  margin-top: 5px;
  &:hover {
    background: transparent;
    color: black;
    transition: all 250ms ease-in-out;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20%;
`;

export const Title = styled.h2`
  text-align: left;
  margin-bottom: 1.6rem;
`;

export const InfoText = styled.p`
  margin-left: 0;
  text-align: left;
`;

export const SubscribeContainer = styled.div`
  padding: 3rem 4rem;
  width: 50%;
  display: flex;
  justify-items: flex-start;
  flex-direction: column;
  font-size: 0.8rem;
  font-family: "Outfit", sans-serif;
  letter-spacing: 0.1rem;
  border-left: 1px solid #e0e0e0;
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    padding: 2rem 0rem;
    border: none;
  }
`;

export const InfoContainer = styled.div`
  line-height: 10px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const PaymentInfoContainer = styled.div`
  display: flex;
  gap: 3px;
  opacity: 0.7;
`;
export const LastFooterContainer = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-family: 'Outfit', serif;
  font-weight: bold; */
  a,
  a:link,
  a:visited {
    color: #000;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding: 1.5rem 2rem;
    align-items: flex-start;
    gap: 1rem;
  }
`;
