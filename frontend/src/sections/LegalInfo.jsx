import React from "react";
import SquareButton from "../components/SquareButton";

const LegalInfo = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center my-36 text-midnight">
      <div className="max-w-[1140px] text-left w-10/12 md:w-8/12 text-l leading-loose">
        <div>
          <div className="my-9 text-3xl leading-tight md:leading-tight font-bold">
            {title}
          </div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export const Impressum = () => (
  <LegalInfo
    title="Impressum"
    text={
      <p>
        Angaben gem. § 5 TMG:
        <br />
        <br />
        Ben Heckmann
        <br />
        Amalienstraße 49a
        <br />
        80799 München
        <br />
        Deutschland
        <br />
        <br />
        Kontaktaufnahme:
        <br />
        E-Mail:{" "}
        <a href="mailto:ben@edusight.de" className="underline">
          ben@edusight.de
        </a>
        <br />
        Tel: 017643810790
        <br />
        <br />
        Haftungsausschluss - Disclaimer:
        <br />
        Haftung für Inhalte: Alle Inhalte unseres Internetauftritts wurden mit
        größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
        Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
        eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
        zu überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
        Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
        ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung
        möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir
        diese Inhalte unverzüglich entfernen.
        <br />
        Haftungsbeschränkung für externe Links: Unsere Webseite enthält Links
        auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder
        indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können
        wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der
        Inhalte übernehmen. Für die Inhalte der externen Links sind die
        jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.
        Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle
        Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von
        rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der
        externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung
        nicht möglich. Bei direkten oder indirekten Verlinkungen auf die
        Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen,
        würde eine Haftungsverpflichtung ausschließlich in dem Fall nur
        bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns
        technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger
        Inhalte zu verhindern. Diese Haftungsausschlusserklärung gilt auch
        innerhalb des eigenen Internetauftrittes „Name Ihrer Domain“ gesetzten
        Links und Verweise von Fragestellern, Blogeinträgern, Gästen des
        Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte
        und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung
        solcherart dargestellten Informationen entstehen, haftet allein der
        Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige,
        der über Links auf die jeweilige Veröffentlichung lediglich verweist.
        Werden uns Rechtsverletzungen bekannt, werden die externen Links durch
        uns unverzüglich entfernt.
        <br />
        <br />
        Urheberrecht:
        <br />
        Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen
        dem deutschen
        Urheberrecht(http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf).
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung des geistigen Eigentums in ideeller und materieller Sicht des
        Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der
        vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d.
        Urhebergesetzes(http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf
        ). Downloads und Kopien dieser Seite sind nur für den privaten und nicht
        kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite
        nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu
        beachten. Die Inhalte Dritter werden als solche kenntlich gemacht.
        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
        bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.
      </p>
    }
  />
);
export const Datenschutz = () => (
  <LegalInfo
    title="Datenschutzerklärung"
    text={
      <p>
        Verantwortlicher im Sinne der Datenschutzgesetze:
        <br />
        <br />
        Ben Heckmann
        <br />
        Amalienstraße 49a
        <br />
        80799 München
        <br />
        Deutschland
        <br />
        <br />
        Kontaktaufnahme:
        <br />
        E-Mail:{" "}
        <a href="mailto:ben@edusight.de" className="underline">
          ben@edusight.de
        </a>
        <br />
        Tel: 017643810790
        <br />
        <br />
        Die Nutzung unserer Website edusight.de ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unserer Seite
        personenbezogene Daten (beispielsweise Name, Anschrift, E-Mail-Adressen,
        im Rahmen einer Warenbestellung, Eröffnung und bei Registrierung für
        unseren Newsletter) doch erhoben werden sollte, erfolgt dies, soweit es
        uns möglich ist, nur auf freiwilliger Basis (vgl. § 13 TMG). Die
        sensiblen Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
        Dritte weitergegeben. Wir weisen darauf Aufmerksam machen, dass die
        Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
        dem Zugriff durch Dritte ist nicht möglich. Die Übersendung von nicht
        ausdrücklich angeforderter Werbung und Informationsmaterialien durch die
        Benutzung der Kontaktdaten, die im Rahmen der Erfüllung der
        Impressumspflicht gem. § 5 TMG preisgegeben werden, wird hiermit
        ausdrücklich widersprochen. Wir behalten uns ausdrücklich rechtliche
        Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
        etwa durch Spam-Mails (insbesondere Newsletter), vor.
        <br />
        <br />
        Ihre Betroffenenrechte:
        <br /> Unter den angegebenen Kontaktdaten unseres
        Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
        Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,
        Berichtigung unrichtiger personenbezogener Daten, Löschung Ihrer bei uns
        gespeicherten Daten, Einschränkung der Datenverarbeitung, sofern wir
        Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,
        Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und
        Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt
        haben oder einen Vertrag mit uns abgeschlossen haben. Sofern Sie uns
        eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung
        für die Zukunft widerrufen. Sie können sich jederzeit mit einer
        Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden. Ihre
        zuständige Aufsichtsbehörde richtet sich nach dem Bundesland Ihres
        Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung.
        <br />
        <br />
        Zwecke der Datenverarbeitung durch die verantwortliche Stelle und
        Dritte:
        <br />
        Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser
        Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer
        persönlichen Daten an Dritte zu anderen als den genannten Zwecken findet
        nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter,
        wenn: Sie Ihre ausdrückliche Einwilligung dazu erteilt haben, die
        Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,
        die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung
        erforderlich ist.
        <br />
        <br />
        Löschung bzw. Sperrung der Daten:
        <br />
        Wir halten uns an die Grundsätze der Datenvermeidung und
        Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur
        so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich
        ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen
        Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw.
        Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und
        entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
        <br />
        <br />
        Änderung unserer Datenschutzbestimmungen:
        <br />
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
        stets den aktuellen rechtlichen Anforderungen entspricht oder um
        Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
        z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt
        dann die neue Datenschutzerklärung.
        <br />
        <br />
        Fragen an den Datenschutzbeauftragten:
        <br />
        Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
        E-Mail oder wenden Sie sich direkt an die für den Datenschutz
        verantwortliche Person in unserer Organisation: <br />
        <br />
        Ben Heckmann
        <br />
        E-Mail: ben@edusight.de
        <br />
      </p>
    }
  />
);
