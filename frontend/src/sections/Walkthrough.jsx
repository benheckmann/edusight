const WalkthroughStep = ({
  number,
  headline,
  description,
  imageFileName,
  marginBottom = true,
}) => (
  <div
    className={
      "w-10/12 max-w-[800px] flex items-center flex-col text-center" +
      (marginBottom ? " mb-12" : "")
    }
  >
    <div className="w-10 h-10 flex items-center justify-center text-2xl rounded-full font-sans border-midnight border-2">
      {number}
    </div>
    <div className="mb-12">
      <p className="my-4 text-2xl font-bold">{headline}</p>
      <p className="text-xl">{description}</p>
    </div>
    <img
      src={process.env.PUBLIC_URL + imageFileName}
      className=""
      alt="Overview UI"
    />
  </div>
);

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
      <WalkthroughStep
        number={1}
        headline="Prüfungen Hochladen"
        description="Laden Sie benotete Prüfungen Ihrer Schüler*innen als Scan oder Foto in die Edusight Web-App hoch."
        imageFileName="/Walkthrough - Prüfungen Hochladen.svg"
        marginBottom={false}
      />
      <WalkthroughStep
        number={2}
        headline="Analyse & Einsichten"
        description="Unsere fortschrittliche Handschrifterkennung und LLM-Technologie analysiert die hochgeladenen Dokumente vollautomatisch und erstellt detaillierte Schülerprofile."
        imageFileName="/Walkthrough - Analyse & Einsichten v2.svg"
      />
      <WalkthroughStep
        number={3}
        headline="Individuelle Empfehlungen"
        description="Auf Basis der Analysen empfielt Edusight gezielt Themen und Aufgabentypen für einzelne Schüler und die ganze Klasse."
        imageFileName="/Walkthrough - Individuelle Empfehlungen.svg"
      />
      <WalkthroughStep
        number={4}
        headline="Schüler-Feedback einholen"
        description="Mit Edusight können Sie direkt Feedback von Ihren Schüler*innen einholen, um Ihren Unterricht noch besser an die individuellen Bedürfnisse Ihrer Schüler*innen anzupassen."
        imageFileName="/Walkthrough - Schüler-Feedback.svg"
      />
      <WalkthroughStep
        number={5}
        headline="Dokumente digital sichern"
        description="Sichern Sie alle Prüfungen in der Cloud. Lehrerinnen und Schülerinnen können Dokumente jederzeit herunterladen und haben so alles an einem Ort."
        imageFileName="/Walkthrough - Dokumente digital sichern.svg"
      />
    </div>
  );
};

export default Walkthrough;
