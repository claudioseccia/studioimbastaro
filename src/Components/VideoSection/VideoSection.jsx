import {React} from 'react'
import { Wrapper, VideoContainer, Iframe } from "./VideoSectionElements";

const VideoSection = () => {
  return (
    <>
      <Wrapper>
        <VideoContainer>
          <Iframe
            // src="https://www.youtube.com/embed/oK3NW_x2bjE?controls=0&rel=0&showinfo=0&autoplay=1&loop=1&mute=1&iv_load_policy=3&playlist=oK3NW_x2bjE"
            // src="https://www.youtube.com/embed/asjvXG5vG24?si=KapdHrJ8ArsPglH0?controls=0&rel=0&showinfo=0&autoplay=1&loop=1&mute=1&iv_load_policy=3"
            src="https://www.youtube.com/embed/NmBs4dpbrjo?si=Ty-NtGoti2kx85zD?si=KapdHrJ8ArsPglH0?controls=0&rel=0&showinfo=0&autoplay=1&loop=1&mute=1&iv_load_policy=3"
            title="Impianto fotovoltaico"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
        </VideoContainer>
      </Wrapper>
    </>
  );
};

export default VideoSection;
