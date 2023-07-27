import React from "react";
import SquareButton from "../components/SquareButton";

const IntroHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 text-midnight">
      <div className="w-7/12 max-w-[1140px] text-center lg:w-8/12 xl:w-9/12 mb-2">
        <div>
          <div className="mt-2 mb-2 text-7xl font-bold sm:leading-[85px] sm:text-6xl xs:text-5xl">
            {"Die Zukunft des Lernens beginnt hier."}
          </div>
          <div className="my-8 opacity-100 text-xl leading-[34px] sm:leading-[28px]">
            {
              "Edusight analysiert handschriftliche Dokumente, um individuelle Einblicke für Lehrkräfte und Schüler zu liefern."
            }
            <br />
          </div>
          <div>
              <SquareButton
                text="Kostenlose Demo Buchen"
                link={process.env.PUBLIC_URL}
                isDark={true}
                color="yellow"
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
