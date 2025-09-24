import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion/dist/framer-motion';
export const CustomP = styled.p`
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineheight};
  font-weight: ${(props) => props.weight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

export const CustomBtn = styled.button`
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const CustomImg = styled.img`
  width: ${(props) => props.width};
  @media screen and (max-width: 700px) {
    width: 90%;
    margin: auto;
  }
`;

export const BorderBottomLink = styled.a`
  display: inline-block;
  &:after {
    display: block;
    content: '';
    border-bottom: solid 2px black;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const FlexRowContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export const FlexColumnContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
