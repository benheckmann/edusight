import React from 'react';
import NavigationBar from "./components/NavigationBar";
import IntroHeader from './sections/IntroHeader';
import YellowBanner from "./sections/YellowBanner"
import Walkthrough from './sections/Walkthrough';
import Footer from './sections/Footer';
import './App.css';

function LandingPage() {
  return (
    <>
      <NavigationBar />
      <IntroHeader />
      <YellowBanner />
      <Walkthrough />
      <Footer />
    </>
  );
}

export default LandingPage;
