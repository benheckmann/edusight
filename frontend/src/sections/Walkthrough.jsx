import React from "react";
import RoundNumbering from "../components/RoundNumbering";

const Walkthrough = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 text-midnight">
      <div className="w-7/12 max-w-[1140px] text-center lg:w-8/12 xl:w-9/12 mb-2">
        <div>
          <div className="my-12 text-4xl font-bold">
            {"Wie Sie mit Edusight mehr aus Ihrem Unterricht heraus holen"}
          </div>
        </div>
      </div>
      <div className="w-10/12 max-w-[600px] mb-12 flex items-center flex-col text-center">
        <RoundNumbering number={1} />
        <p className="my-4 text-2xl font-bold">Prüfungen Hochladen</p>
        <p className="text-xl">Laden Sie benotete Prüfungen Ihrer Schüler*innen als Scan oder Foto in die Edusight Web-App hoch.</p>
      </div>
      <div className="w-10/12 max-w-[600px] mb-12 flex items-center flex-col text-center">
        <RoundNumbering number={2} />
        <p className="my-4 text-2xl font-bold">Analyse & Einsichten</p>
        <p className="text-xl">Unsere fortschrittliche Handschrifterkennung und LLM-Technologie analysiert die hochgeladenen Dokumente vollautomatisch und erstellt detaillierte Schülerprofile.</p>
      </div>
      <div className="w-10/12 max-w-[600px] mb-12 flex items-center flex-col text-center">
        <RoundNumbering number={3} />
        <p className="my-4 text-2xl font-bold">Entwicklung verfolgen</p>
        <p className="text-xl">Behalten Sie den Fortschritt Ihrer Schüler*innen im Blick und identifizieren Sie individuelle Stärken und Schwächen.</p>
      </div>
      <div className="w-10/12 max-w-[600px] mb-12 flex items-center flex-col text-center">
        <RoundNumbering number={4} />
        <p className="my-4 text-2xl font-bold">Dokumente digital sichern</p>
        <p className="text-xl">Sichern Sie alle Prüfungen in der Cloud. Lehrerinnen und Schülerinnen können Dokumente jederzeit herunterladen und haben so alles an einem Ort.</p>
      </div>
    </div>
  );
};

export default Walkthrough;