import { facts } from "../../data/fact";
import { CustomImg, BorderBottomLink } from "../GlobalElements";

import {
  InfoSectionContainer,
  FactContainer,
  TextContainer,
  Title,
  StyledP,
} from "./InfoSectionElements";

const InfoSection = () => {
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  return (
    <InfoSectionContainer>
      {facts.map((fact, i) => (
        <FactContainer
          key={i}
          imgleft={fact.imgLeft === true ? "true" : ""}
          name={fact.internalLink}
        >
          <TextContainer>
            <Title>{fact.title}</Title>
            {fact.text.map((text, i) => (
              <StyledP key={i}>{text}</StyledP>
            ))}
            <BorderBottomLink>{fact.link}</BorderBottomLink>
          </TextContainer>
          {/* <CustomImg width={"50%"} src={fact.img}></CustomImg> */}
          <div>
            <CustomImg
              width={"75%"}
              src={`${REACT_APP_API_URL}/assets/images/studio/${fact.img}`}
            ></CustomImg>
          </div>
        </FactContainer>
      ))}
    </InfoSectionContainer>
  );
};

export default InfoSection;
