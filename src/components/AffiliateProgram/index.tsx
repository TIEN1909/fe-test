import Link from "next/link";
import React from "react";

const AffiliateProgram = () => {
  return (
    <section className="mx-auto p-4">
      <div className="flex flex-col justify-center items-center h-[177px] bg-primary-10">
        <div className="w-[303px] text-center">
          <p className="text-base font-bold">
            Apply{" "}
            <span
              className="inline-block"
              style={{
                background:
                  "linear-gradient(90deg, #ABECA2 -90%, #2FB3FE 30.38%, #6A8EEA 65.09%, #A185F4 99.55%)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Copin Affilate Program
            </span>{" "}
            to get more benefits!
          </p>
          <Link href="#" className="text-blue-10 text-[13px] font-semibold">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProgram;
