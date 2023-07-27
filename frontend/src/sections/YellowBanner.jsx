import React from "react";
import SquareButton from "../components/SquareButton";

const YellowBanner = () => {
  return (
    <div className="bg-yellow flex items-center justify-center text-midnight">
      <div className="w-10/12 max-w-[1440px] my-16 text-center md:text-left">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="text-4xl font-bold my-6 md:my-0 md:mr-16">
            {"Unsere Mission"}
          </div>
          <div className="text-2xl w-8/12 leading-10">
            {
              "Durch den Einsatz moderner Technologien ermöglichen wir Lehrkräften, auf Einzigartigkeit jedes Schülers zu reagieren und den Lernprozess individuell zu gestalten. Durch die genaue Analyse der Stärken und Schwächen wird Bildungserfolg mit Edusight messbar und effektiv."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowBanner;
