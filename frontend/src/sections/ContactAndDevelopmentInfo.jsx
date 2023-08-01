import React from "react";
import SquareButton from "../components/SquareButton";

const ContactAndDevelopmentInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-36 text-midnight">
      <div className="max-w-[1140px] text-left w-10/12 md:w-8/12">
        <div>
          <div className="my-9 text-3xl leading-tight md:leading-tight font-bold">
            Vielen Dank für Ihr Interesse an Edusight!
          </div>
          <img
            src={process.env.PUBLIC_URL + "Sparkles.svg"}
            className="w-32"
            alt="Danke"
          />
          <div className="my-6 text-l leading-loose">
            Edusight ist derzeit aktiv in Kooperation mit ausgewählten Schulen
            in der Entwicklungsphase. Wir arbeiten eng mit Pädagoginnen und
            Fachleuten zusammen, um eine Plattform zu schaffen, die den
            Bedürfnissen von Lehrkräften und Schülerinnen gerecht wird.
          </div>
          <div className="my-2 text-3xl leading-tight md:leading-tight font-bold">
            Möchten Sie mehr erfahren?
          </div>
          <div className="my-6 text-l leading-loose">
            Wir freuen uns, von Ihnen zu hören! Ob Sie Fragen zu unserer
            Plattform haben oder Interesse an einem Zugang zu Edusight haben,
            wir stehen Ihnen gerne zur Verfügung.
          </div>
          <div className="my-2 text-3xl leading-tight md:leading-tight font-bold">
            So erreichen Sie uns:
          </div>
          <div className="my-6 text-l leading-loose">
            <ul className="list-disc m-5">
              <li>
                E-Mail:{" "}
                <a href="mailto:info@edusight.com">info@edusight.com</a>
              </li>
              <li>Telefon: +49 176 43810 790</li>
            </ul>
            Wir freuen uns auf Ihre Nachricht und bedanken uns für Ihre
            Unterstützung bei der Gestaltung der Bildung der Zukunft.
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + "Young Plants Doodle.svg"}
          className="w-96 max-w-[75vw]"
          alt="Doodle"
        />
      </div>
    </div>
  );
};

export default ContactAndDevelopmentInfo;
