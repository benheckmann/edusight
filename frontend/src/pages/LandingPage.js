import { useState, useEffect } from 'react';
import NavigationBar from "../components/NavigationBar";
import IntroHeader from '../sections/IntroHeader';
import { YellowBannerOurMission, YellowBannerWhyEdusight } from "../sections/YellowBanner"
import Walkthrough from '../sections/Walkthrough';
import Footer from '../sections/Footer';
import '../App.css';

function LandingPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/hello-world')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.status);
                }
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Errorsdfsdf: {error}</div>;

  return (
    <>
      <NavigationBar />
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
