import React from "react";
import Image from "next/image";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <Image src={banner} alt="banner" width={378} height={278} quality={100} />
    </div>
  );
};

export default Banner;
