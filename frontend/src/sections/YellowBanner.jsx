import React from "react";
import SquareButton from "../components/SquareButton";

const YellowBanner = () => {
  return (
    <div className="bg-bg-yellow flex items-center justify-center text-midnight">
      <div className="w-10/12 max-w-[1440px] my-16">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="text-4xl font-bold my-6 md:my-0 md:mr-16">
            {"Unsere Mission"}
          </div>
          <div className="text-2xl w-8/12 leading-10">
            {
              "Durch den Einsatz moderner Technologien ermöglichen wir Lehrkräften, auf Einzigartigkeit zu reagieren und den Lernprozess individuell und effizient zu gestalten. Durch die genaue Analyse der Stärken und Schwächen jedes Schülers ermöglichen wir Lehrkräften, zielgerichtet und effektiv zu intervenieren. So wird Bildungserfolg mit Edusight messbar und greifbar."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowBanner;
