import * as React from "react";

import Lightbox from "yet-another-react-lightbox";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

// import slides from "@/data/slides";

/* eslint-disable-next-line */
export default function Gallery({ slides }) {
  console.log("slides", slides);
  const [index, setIndex] = React.useState(-1);
  return (
    <>
      <RowsPhotoAlbum
        photos={slides}
        targetRowHeight={250}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
