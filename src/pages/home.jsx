import React, { useRef } from "react";
import { motion } from "framer-motion";
import Banner from "../components/home/Banner";
import BrandStatement from "../components/home/BrandStatement";
import AddressCards from "../components/home/AddressCards";
import SignalisationCategory from "../components/home/SignalisationCategory";
import PanneauxRoutiersCTA from "../components/home/PanneauxRoutiersCTA";
import SEO from "../components/common/SEO";
import Testimonials from "../components/home/Testimonials";
import LicencePlateBanner from "../components/home/LicencePlateBanner";


const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Home() {
  const newArrivalsRef = useRef(null);

  return (
    <div className="relative overflow-x-hidden bg-white selection:bg-pmc-yellow/30">
      <SEO
        title="Accueil | Signalisation Routière"
        description="Bienvenue chez Signalisation Routière, votre expert en panneaux de signalisation routière, accessoires de fixation, balisage, mobilier urbain et marquage de sol au Luxembourg."
        keywords="signalisation routière, panneaux, fixation, balisage, mobilier urbain, marquage sol, Luxembourg"
      />
      <div className="relative">
        <Banner />
        <BrandStatement />
        <PanneauxRoutiersCTA />
        <SignalisationCategory />
        <LicencePlateBanner />
        <Testimonials />
        <AddressCards />
      </div>
    </div>
  );
}
