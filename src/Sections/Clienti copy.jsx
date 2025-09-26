import { useContext } from "react";
import { StateContext } from "@/Components/StateProvider";
import { Link } from "react-router-dom";
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
import ParallaxImage from "../Components/ParallaxImage/ParallaxImage";

export default function Home() {
  // const { showCart } = useContext(StateContext);
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { clientsData } = useContext(StateContext);
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
            {clientsData &&
              clientsData.map((el) => {
                if (el?.link && el.image) {
                  return (
                    <Link
                      key={el.company}
                      style={{ color: "#999" }}
                      to={el.link}
                      target="_blank"
                    >
                      <CustomImg
                        width={"200px"}
                        src={`${REACT_APP_API_URL}/assets/images/clients-logos/${el.image}`}
                        alt={el.company}
                      ></CustomImg>
                    </Link>
                  );
                } else {
                  return <StyledP key={el.company}>{el.company}</StyledP>;
                }
              })}
          </StyledClient>
          {/* <StyledClient>
            {client.clients.map((text, i) => (
              <StyledP key={i}>{text}</StyledP>
            ))}
          </StyledClient> */}
          <BorderBottomLink>{client.link}</BorderBottomLink>
          {/* <CustomImg
            width={"100%"}
            src={`${REACT_APP_API_URL}/assets/images/studio/${client.img}`}
          ></CustomImg> */}
        </TextContainerFull>
      </InfoSectionContainer>
      <ParallaxImage
        src={`${REACT_APP_API_URL}/assets/images/studio/foto3.jpg`}
        alt="Studio Imbastaro"
      ></ParallaxImage>
    </>
  );
}
