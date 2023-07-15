"use client";

import { useState, useEffect } from "react";
import styles from "./images.module.css";
import ToggleImage from "./toggle-image";

export default function Images() {
  const [imagePos, setImagePos] = useState(0);
  const [imageSize, setImageSize] = useState([0, 0]);

  useEffect(() => {
    console.log(document.querySelector(".toggle-image"));
    const handleImageResize = () => {
      if (window.innerWidth / (window.innerHeight - 100) > 0.8) {
        setImageSize([
          (window.innerHeight - 100) * 0.8,
          window.innerHeight - 100,
        ]);
      } else {
        setImageSize([window.innerWidth, window.innerWidth * 1.25]);
      }
    };

    handleImageResize();
    window.addEventListener("resize", handleImageResize);

    return () => {
      window.removeEventListener("resize", handleImageResize);
    };
  }, []);

  const avancarImagePosHandler = () => {
    if (imagePos < 5) {
      setImagePos(imagePos + 1);
    } else {
      setImagePos(0);
    }
  };

  const voltarImagePosHandler = () => {
    if (imagePos > 0) {
      setImagePos(imagePos - 1);
    } else {
      setImagePos(5);
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

  return (
    <div className={styles["images"]}>
      <ToggleImage
        voltarImagePosHandler={voltarImagePosHandler}
        avancarImagePosHandler={avancarImagePosHandler}
      />
      <img
        src={images[imagePos]}
        width={imageSize[0]}
        height={imageSize[1]}
        alt="apto 2001"
      />
    </div>
  );
}
