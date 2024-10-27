import React from "react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Program = () => {
  return (
    <div className="max-w-[441px]">
      <h2 className="text-2xl font-bold">
        Unlock Rewards with the Copin Referral Program{" "}
      </h2>
      <p className="text-[13px] text-secondary-10 mt-3">
        Earn rebates and commissions by inviting friends.
      </p>
      <p className="text-[13px] text-secondary-10">
        Grow your network and benefit from our 6-tier reward system.
      </p>
      <Link
        href="#"
        className="mt-3 flex items-center gap-2 text-blue-20 text-[13px] font-semibold group"
      >
        <p className="group-hover:text-white">View referral Ranking</p>{" "}
        <HiOutlineArrowRight className="text-base group-hover:text-white" />
      </Link>
    </div>
  );
};

export default Program;
