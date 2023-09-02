import { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import IntroHeader from "../sections/IntroHeader";
import {
  YellowBannerOurMission,
  YellowBannerWhyEdusight,
} from "../sections/YellowBanner";
import Walkthrough from "../sections/Walkthrough";
import Footer from "../sections/Footer";
import "../App.css";
import SignInModal from "../components/SignInModal";

function LandingPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleLogin = (email, password) => {
    // Perform API call to login
    // If successful, close modal and navigate to App page
    console.log("LOGIN", email, password);
  };

  const handleRegister = (email, password) => {
    // Perform API call to register
    // If successful, close modal and navigate to App page
    console.log("REGISTER", email, password);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/hello-world")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <NavigationBar setShowSignInModal={setShowSignInModal} />
      {showSignInModal && (
        <SignInModal
          setShow={setShowSignInModal}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
        />
      )}
      <IntroHeader />
      {data && <div>{JSON.stringify(data)}</div>}
      <YellowBannerOurMission />
      <Walkthrough />
      <YellowBannerWhyEdusight />
      <Footer />
    </>
  );
}

export default LandingPage;
