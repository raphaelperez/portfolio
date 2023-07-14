"use client";

import { useState } from "react";
import styles from "./images.module.css";
import ToggleImage from "./toggle-image";

export default function Images() {
  const [imagePos, setImagePos] = useState(0);

  const avancarImagePosHandler = () => {
    if (imagePos < 5) {
      setImagePos(imagePos + 1);
    }
  };

  const voltarImagePosHandler = () => {
    if (imagePos > 0) {
      setImagePos(imagePos - 1);
    }
  };

  const images = [
    "/2001/V01.jpg",
    "/2001/V02.jpg",
    "/2001/V03.jpg",
    "/2001/V04.jpg",
    "/2001/V05.jpg",
    "/2001/V06.jpg",
  ];

  const windowWidth = window.innerWidth;
  const windowHeigth = window.innerHeight - 48;

  let imageWidth = 100;
  let imageHeight = 100;

  if (windowWidth / windowHeigth > 0.8) {
    imageHeight = windowHeigth;
    imageWidth = windowHeigth * 0.8;
  } else {
    imageWidth = windowWidth;
    imageHeight = windowWidth * 1.25;
  }

  return (
    <div className={styles["images"]}>
      <ToggleImage
        voltarImagePosHandler={voltarImagePosHandler}
        avancarImagePosHandler={avancarImagePosHandler}
      />
      <img
        src={images[imagePos]}
        width={imageWidth}
        height={imageHeight}
        alt="apto 2001"
      />
    </div>
  );
}
