import { styled } from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  max-width: 100%;
  height: 600px;
  background: white;
  @media screen and (max-width: 700px) {
    height: 400px;
  }
`;
export const VideoContainer = styled.div`
  overflow: hidden;

  pointer-events: none;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  width: 300%; /* enlarge beyond browser width */
  left: -100%; /* center */
`;

export const Iframe = styled.iframe`
  /* Extend it beyond the viewport... */

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
