import React from "react";
import SquareButton from "../components/SquareButton";

const IntroHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 text-midnight">
      <div className="w-7/12 max-w-[1140px] text-center lg:w-8/12 xl:w-9/12 mb-2">
        <div>
          <div className="mt-2 mb-2 text-7xl font-bold leading-[80px] sm:text-6xl sm:leading-[70px] xs:text-5xl xs:leading-[64px] xxs:text-3xl xxs:leading-[48px]">
            {"Build a Better Product Experience"}
          </div>
          <div className="my-8 opacity-100 text-xl leading-[34px] sm:leading-[28px]">
            {
              "Go beyond analytics and elevate your product with user insights, delivered fast."
            }
            <br />
          </div>
          <div>
              <SquareButton
                text="Kostenlose Demo Buchen"
                link={process.env.PUBLIC_URL}
                isDark={true}
                color="purple"
              />
              <SquareButton text="Kontakt" link={process.env.PUBLIC_URL} />
          </div>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/Landing Page Header Graphic.svg"}
        className="w-[90vw] max-w-[1440px]"
        alt="Overview UI"
      />
    </div>
  );
};

export default IntroHeader;
