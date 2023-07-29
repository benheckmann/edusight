import React from "react";
import SquareButton from "../components/SquareButton";

const YellowBannerTemplate = ({ headline, content, button }) => {
  return (
    <div className="bg-yellow flex items-center justify-center text-midnight">
      <div className="w-11/12 md:w-10/12 max-w-[1440px] my-6 md:my-12 text-center lg:text-left">
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <div className="text-3xl leading-tight md:leading-tight font-bold my-6 lg:mr-8">
            <div>{headline}</div>
            {/* Button for screen sizes lg and above */}
            {button ? (
              <div className="mt-8 lg:mt-12 hidden lg:block">{button}</div>
            ) : (
              <></>
            )}
          </div>
          <div className="text-l lg:w-8/12 leading-loose">{content}</div>
          {/* Button for screen sizes less than lg */}
          {button ? (
            <div className="mt-8 lg:mt-12 block lg:hidden">{button}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export const YellowBannerOurMission = () => (
  <YellowBannerTemplate
    headline="Unsere Mission"
    content={
      <div className="m-2 md:m-6">
        Durch den Einsatz moderner Technologien ermöglichen wir Lehrkräften, auf
        Einzigartigkeit jedes Schülers zu reagieren und den Lernprozess
        individuell zu gestalten. Durch die genaue Analyse der Stärken und
        Schwächen wird Bildungserfolg mit Edusight messbar und effektiv.
      </div>
    }
  />
);

const Benefit = ({ headline, description, iconFileName }) => (
  <div className="flex flex-col items-center text-center p-6 xl:flex-row xl:text-left">
    <img
      src={process.env.PUBLIC_URL + iconFileName}
      alt={headline}
      className="w-16 h-16 m-4 md:m-8"
    />
    <div>
      <div className="text-xl font-bold">{headline}</div>
      <div className="text-lg">{description}</div>
    </div>
  </div>
);

export const YellowBannerWhyEdusight = ({hasCTAButton = true}) => (
  <YellowBannerTemplate
    headline="Warum Edusight?"
    content={
      <div className="grid grid-flow-row grid-cols-1 gap-x-2 md:grid-cols-2">
        <Benefit
          headline="Individuelle Förderung"
          description="Durch detaillierte Analysen können Sie die Stärken und Schwächen Ihrer Schüler*innen besser erkennen und gezielt fördern."
          iconFileName="Icon Individuality.svg"
        />
        <Benefit
          headline="Zeiteffizienz"
          description="Mit Edusight sparen Sie wertvolle Zeit bei der Auswertung und Analyse der Prüfungsleistung Ihrer Schüler*innen."
          iconFileName="Icon Time.svg"
        />
        <Benefit
          headline="Einfache Handhabung"
          description="Unsere Plattform ist intuitiv und benutzerfreundlich gestaltet."
          iconFileName="Icon Easy.svg"
        />
        <Benefit
          headline="Datensicherheit"
          description="Ihre Daten sind bei uns sicher. Wir legen höchsten Wert auf Datenschutz und Datensicherheit."
          iconFileName="Icon Secure.svg"
        />
      </div>
    }
    button={
      hasCTAButton && (
        <SquareButton
          text="Jetzt starten"
          isDark={true}
          margin="mb-4"
        />
      )
    }
  />
);
