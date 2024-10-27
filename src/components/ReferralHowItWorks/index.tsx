import React from "react";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { PiBoundingBoxLight } from "react-icons/pi";
import { PiUsersFourLight } from "react-icons/pi";
import { PiTreasureChest } from "react-icons/pi";
import { PiMedalMilitary } from "react-icons/pi";

const works = [
  {
    id: 1,
    icon: <PiBoundingBoxLight className="text-2xl text-secondary" />,
    title: "Two-Level Referral System",
    description:
      "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)"
  },
  {
    id: 2,
    icon: <PiUsersFourLight className="text-2xl text-secondary" />,
    title: "Earn Rebates & Commissions",
    description: "Earn rebates on your trades and commissions from F1 and F2."
  },
  {
    id: 3,
    icon: <PiTreasureChest className="text-2xl text-secondary" />,
    title: "Claim Daily Rewards",
    description:
      "Rewards are credited after trades close and claimable daily at 0:00 UTC. "
  },
  {
    id: 4,
    icon: <PiMedalMilitary className="text-2xl text-secondary" />,
    title: "Referral Tier System",
    description:
      "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days"
  }
];

const ReferralHowItWorks = () => {
  return (
    <section className="mx-auto px-4 mt-4">
      <p className="font-medium text-base flex place-items-center gap-2">
        <PiLightbulbFilamentFill className="text-2xl text-secondary-20" />
        How It Works?
      </p>
      <div className="flex justify-between items-start gap-2 flex-wrap md:flex-nowrap cursor-pointer">
        {works.map((work) => (
          <div
            key={work.id}
            className="flex flex-col items-start justify-start mt-4 w-full lg:min-w-[252px] h-[206px] rounded border border-secondary-30 p-4 hover:border-white hover:scale-105 transition-all "
          >
            <div
              className="flex items-center justify-center w-[46px] h-[46px] rounded-sm"
              style={{
                background:
                  "conic-gradient(from 124.76deg at 49.86% 37.95%, #A185F4 -5.64deg, #ABECA2 0.06deg, #2FB3FE 111.61deg, #6A8EEA 233.41deg, #A185F4 310.35deg, #ABECA2 360.06deg)"
              }}
            >
              {work.icon}
            </div>
            <div>
              <h3 className="text-base text-secondary font-medium mt-6">
                {work.id}. {work.title}
              </h3>
              <p className="text-secondary-10 mt-2 text-[13px]">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReferralHowItWorks;
