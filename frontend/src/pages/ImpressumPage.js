import NavigationBar from "../components/NavigationBar";
import { Impressum } from "../sections/LegalInfo";
import Footer from "../sections/Footer";
import "../App.css";

function ImpressumPage() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col min-h-screen">
        <Impressum />
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </>
  );
}

export default ImpressumPage;
