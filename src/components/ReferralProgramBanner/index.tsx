"use client";
import React from "react";
import Banner from "./Banner";
import Program from "./Program";

const ReferralProgramBanner = () => {
  return (
    <section
      className="mx-auto border border-l-0 border-r-0 border-t-0 border-b-secondary-30"
      style={{
        background:
          "linear-gradient(90deg, rgba(62, 162, 244, 0) -100%, rgba(66, 62, 244, 0.1) 103.18%)"
      }}
    >
      <div className="flex justify-center md:justify-between items-center p-10 flex-wrap md:flex-nowrap">
        <Program />
        <Banner />
      </div>
    </section>
  );
};

export default ReferralProgramBanner;
