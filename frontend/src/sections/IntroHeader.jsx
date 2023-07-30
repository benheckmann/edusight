import React from "react";
import SquareButton from "../components/SquareButton";

const IntroHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40 text-midnight">
      <div className="max-w-[1140px] text-center w-10/12 md:w-8/12 mb-2">
        <div>
          <div className="mt-2 mb-2 text-4xl leading-tight md:leading-tight md:text-5xl font-bold">
            {"Die Zukunft des Lehrens beginnt hier."}
          </div>
          <div className="my-8 opacity-100 text-xl leading-loose">
            {
              "Edusight analysiert handschriftliche Dokumente, um individuelle Einblicke für Lehrkräfte und Schüler zu liefern."
            }
          </div>
          <div className="my-10">
            <SquareButton text="Demo Buchen" color="yellow" />
            <SquareButton text="Kontakt" />
          </div>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/Landing Page Header Graphic.png"}
        className="w-full md:w-10/12 max-w-[1440px]"
        alt="Overview UI"
      />
    </div>
  );
};

export default IntroHeader;
