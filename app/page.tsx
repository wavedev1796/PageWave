import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WhoWeAre from "../components/WhoWeAre";
import OurServices from "../components/OurServices";
import OurProcess from "../components/OurProcess";
import WhatWeStandFor from "../components/WhatWeStandFor";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      {/* Secciones de la landing page */}
      <WhoWeAre />
      <OurProcess />
      <OurServices />
      <WhatWeStandFor />
      <ContactUs />

      <Footer />
    </div>
  );
}