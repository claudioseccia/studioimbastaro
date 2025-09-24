import { motion } from 'framer-motion';
// import { motion } from 'framer-motion/dist/framer-motion';
import styled from 'styled-components';
import { FlexColumnContainer, FlexRowContainer } from '../GlobalElements';
export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const CartContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  width: 40%;
  max-width: 450px;
  right: 0;
  height: 100vh;
  top: 0;
  background: white;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  /* Initially move the cart outside the screen */

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CartHead = styled(FlexRowContainer)`
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem;
`;
export const CartFooter = styled.div`
  margin-top: auto;
  padding: 1rem 2rem;
  box-shadow: 0px -25px 20px -20px rgba(0, 0, 0, 0.45);

  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  background: black;
  color: white;
  border: 1px solid black;
  height: 70px;
  font-weight: 700;
  font-size: 1rem;
  @media screen and (max-width: 800px) {
    height: 50px;
  }
`;
export const ArticleCard = styled(FlexRowContainer)`
  padding: 2rem 0rem 2rem 0;
  gap: 2rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const Minitature = styled.img`
  width: 150px;
  height: 100px;
`;
export const ArticleInfoContainer = styled(FlexColumnContainer)`
  height: 100%;
  justify-content: space-between;
`;
export const ArticleNane = styled.p`
  font-size: 0.8rem;
`;
export const ArticlePrice = styled.p`
  font-size: 0.8rem;
  color: #787878;
`;

export const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid;
  padding: 0;
  color: #787878;
  font-weight: 600;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 1rem;
`;

export const ArticleNumber = styled(FlexRowContainer)`
  border: 1px solid #e0e0e0;
  height: 30px;
  width: 50px;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
export const BtnAdd = styled.button`
  background: none;
  border: none;
  opacity: 0.6;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

export const CartBody = styled(FlexColumnContainer)`
  height: 60%;
  overflow: auto;
`;

export const Styledp = styled.p`
  margin: auto;
  color: #787878;
  font-weight: 500;
  font-size: 1rem;
`;
