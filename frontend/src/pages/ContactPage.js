import NavigationBar from "../components/NavigationBar";
import { YellowBannerWhyEdusight } from "../sections/YellowBanner"
import ContactAndDevelopmentInfo from "../sections/ContactAndDevelopmentInfo";
import Footer from '../sections/Footer';
import '../App.css';

function ContactPage() {
  return (
    <>
      <NavigationBar />
      <ContactAndDevelopmentInfo />
      <YellowBannerWhyEdusight hasCTAButton={false} />
      <Footer />
    </>
  );
}

export default ContactPage;
