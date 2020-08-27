import React from "react";
import Header from "./Header";
import CardSection from "./CardSection";
import Navbar from "./Navbar";
import DetailSection from "./DetailSection";
import Services from "./Services";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <DetailSection />
      <Services />
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
