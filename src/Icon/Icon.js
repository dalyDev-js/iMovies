import Lottie from "lottie-react";
import React from "react";
import animationData from "./iconData.json";
function Icon() {
  const options = {
    loop: false,
    autoplay: true,
    animationData: {
      ...animationData,
      fr: animationData.fr * 5,
    },
  };

  return <Lottie {...options} />;
}

export default Icon;
