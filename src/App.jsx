import React from "react";

// components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Ads from "./Components/Ads";
import TopCollection from "./Components/TopCollection";
import Collection from "./Components/Collection";
import Member from "./Components/Member";
import Discover from "./Components/Discover";
import Footer from "./Components/Footer";
import MobileNav from "./Components/MobileNav";

const App = () => {
  return (
    <>
      <Navbar />
      <MobileNav />
      <Hero />
      <Ads />
      <TopCollection />
      <Collection />
      <Member />
      <Discover />
      <Footer />
    </>
  );
};

export default App;
