import { useState, useContext, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
// import { motion, useInView } from "framer-motion/dist/framer-motion";
import { reviews } from "../../data/products";
import { StateContext } from "../StateProvider";
import {
  ReviewsIconsContainer,
  StyledReviewIcon,
  InfiniteText,
  InfiniteTextContainer,
  RoundBtnContainer,
  RoundBtn,
  IconReviewResponsive,
} from "./ReviewsElements";
import { CustomP } from "../GlobalElements";

const ReviewsSection = () => {
  const infiniteText =
    "STUDIO DI INGEGNERIA IMBASTARO - PESCARA - PROGETTAZIONE GRANDI OPERE - RISTRUTTURAZIONI - EDILIZIA PUBBLICA.".repeat(
      20
    );

  const [currReviewIndex, setCurrReviewIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { setChangeTitle, setNavbarOver } = useContext(StateContext);

  useEffect(() => {
    if (isInView) {
      setChangeTitle(true);
      setNavbarOver(true);
    }
  }, [isInView]);

  return (
    <>
      <InfiniteTextContainer>
        <InfiniteText>{infiniteText}</InfiniteText>
      </InfiniteTextContainer>
      <CustomP
        size={"1.6rem"}
        lineheight={"2rem"}
        weight={"500"}
        width={"50%"}
        height={"250px"}
        margin={"10% auto 0"}
        ref={ref}
        align={"center"}
      >
        {reviews[currReviewIndex].review}
      </CustomP>
      <ReviewsIconsContainer>
        {reviews.map((review, i) => (
          <StyledReviewIcon
            key={i}
            opacity={currReviewIndex === i ? "1" : " 0.4"}
            onClick={() => setCurrReviewIndex(i)}
            src={review.img}
          ></StyledReviewIcon>
        ))}
        <IconReviewResponsive
          src={reviews[currReviewIndex].img}
        ></IconReviewResponsive>
      </ReviewsIconsContainer>
      <RoundBtnContainer>
        {reviews.map((ele, i) => (
          <RoundBtn key={i} onClick={() => setCurrReviewIndex(i)}></RoundBtn>
        ))}
      </RoundBtnContainer>
      {/* */}
    </>
  );
};

export default ReviewsSection;
