import NavigationBar from "../components/NavigationBar";
import IntroHeader from '../sections/IntroHeader';
import { YellowBannerOurMission, YellowBannerWhyEdusight } from "../sections/YellowBanner"
import Walkthrough from '../sections/Walkthrough';
import Footer from '../sections/Footer';
import '../App.css';

function LandingPage() {
  return (
    <>
      <NavigationBar />
      <IntroHeader />
      <YellowBannerOurMission />
      <Walkthrough />
      <YellowBannerWhyEdusight />
      <Footer />
    </>
  );
}

export default LandingPage;
