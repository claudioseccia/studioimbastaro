import { useContext, useMemo } from "react";
import { StateContext } from "@/Components/StateProvider";
import { Link } from "react-router-dom";

import "@/styles.scss";

import { clients } from "../data/fact";
import {
  InfoSectionContainer,
  Title,
  StyledP,
  TextContainerFull,
  StyledClient,
} from "../Components/InfoSection/InfoSectionElements";
import { CustomImg, BorderBottomLink } from "../Components/GlobalElements";
import ParallaxImage from "../Components/ParallaxImage/ParallaxImage";

export default function Clienti() {
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { clientsData } = useContext(StateContext);
  const client = clients[0];

  // Memoized splits: clients with image vs without image
  const clientsWithImage = useMemo(
    () =>
      Array.isArray(clientsData)
        ? clientsData.filter((el) => Boolean(el?.image))
        : [],
    [clientsData]
  );

  const clientsWithoutImage = useMemo(
    () =>
      Array.isArray(clientsData) ? clientsData.filter((el) => !el?.image) : [],
    [clientsData]
  );

  return (
    <>
      {/* <ReviewsSection></ReviewsSection> */}
      <InfoSectionContainer>
        <TextContainerFull>
          <Title>{client.title}</Title>
          {/* {client.text.map((text, i) => (
            <StyledP key={i}>{text}</StyledP>
          ))} */}
          <StyledP>{client.text}</StyledP>
          {/* Clients with images (link + image when link is present, else fall back to text like before) */}
          <StyledClient>
            {clientsWithImage.map((el) => {
              if (el?.link && el.image) {
                return (
                  <Link
                    key={`img-${el.company}`}
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
              }
              // Preserve prior behavior: if image but no link, render company name as text
              return (
                <StyledP key={`img-fallback-${el.company}`}>
                  {el.company}
                </StyledP>
              );
            })}
          </StyledClient>

          {/* Clients without images */}
          <StyledP>{client.text2}</StyledP>
          <StyledClient>
            {clientsWithoutImage.map((el) => (
              <StyledP key={`noimg-${el.company}`}>{el.company}</StyledP>
            ))}
          </StyledClient>

          <BorderBottomLink>{client.link}</BorderBottomLink>
        </TextContainerFull>
      </InfoSectionContainer>
      <ParallaxImage
        src={`${REACT_APP_API_URL}/assets/images/studio/foto3.jpg`}
        alt="Studio Imbastaro"
      ></ParallaxImage>
    </>
  );
}
