import NavigationBar from "../components/NavigationBar";
import { Datenschutz } from "../sections/LegalInfo";
import Footer from "../sections/Footer";
import "../App.css";

function DatenschutzPage() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col min-h-screen">
        <Datenschutz />
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </>
  );
}

export default DatenschutzPage;
