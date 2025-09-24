// import { useContext } from 'react';
// import Cart from './Components/cartSection/Cart';

// import InfoSection from "@/Components/InfoSection/InfoSection";
// import ProductPresentation from "@/Components/ProductsPresentation/ProductsPrensentation";
//import ReviewsSection from "@/Components/ReviewsSection/ReviewsSection"; <--------------------------------------
// import ShopSection from "@/Components/ShopSection/ShopSection";
// import { StateContext } from './Components/StateProvider';
// import VideoSection from "@/Components/VideoSection/VideoSection";
import "@/styles.scss";
// import HeroSection from "../Components/HeroSection/HeroSection";
// import Theme from "@/Theme";

import { clients } from "../data/fact";
import {
  InfoSectionContainer,
  // FactContainer,
  // TextContainer,
  Title,
  StyledP,
  TextContainerFull,
  StyledClient,
} from "../Components/InfoSection/InfoSectionElements";
import { CustomImg, BorderBottomLink } from "../Components/GlobalElements";

export default function Home() {
  // const { showCart } = useContext(StateContext);
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const client = clients[0];
  return (
    <>
      {/* <ReviewsSection></ReviewsSection> */}
      <InfoSectionContainer>
        <TextContainerFull>
          <Title>{client.title}</Title>
          {client.text.map((text, i) => (
            <StyledP key={i}>{text}</StyledP>
          ))}
          <StyledClient>
            {client.clients.map((text, i) => (
              <StyledP key={i}>{text}</StyledP>
            ))}
          </StyledClient>
          <BorderBottomLink>{client.link}</BorderBottomLink>
          <CustomImg
            width={"100%"}
            src={`${REACT_APP_API_URL}/assets/images/studio/${client.img}`}
          ></CustomImg>
        </TextContainerFull>
      </InfoSectionContainer>
    </>
  );
}
