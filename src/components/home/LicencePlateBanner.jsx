import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import pmcLogo from "../../assets/pmcLogo.png";
import { FiTruck, FiMapPin, FiShield } from "react-icons/fi";

export default function LicencePlateBanner({ title, subtitle, triggerRef }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4 md:py-6 bg-white">
      <section className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row overflow-hidden bg-white rounded-2xl shadow-lg border border-neutral-200 group">

        {/* Visual Side */}
        <div className="relative w-full md:w-[630px] h-[232px] md:h-auto shrink-0 overflow-hidden bg-neutral-100">
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={hero}
            alt="Plaques d'immatriculation"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        </div>

        {/* Content Side */}
        <div className="flex-1 flex flex-col justify-center p-5 md:p-6 lg:p-8 z-10 bg-white relative">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start text-left relative z-20"
          >
            {/* Header row with Logo and Tagline */}
            <div className="flex justify-between items-center w-full mb-2">
              <span className="px-2 py-0.5 bg-[#f2b823]/20 text-[#001233] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] rounded border border-[#f2b823]/40">
                Plaques Moins Chères
              </span>
              <img src={pmcLogo} alt="PMC Logo" className="w-20 md:w-24 h-auto object-contain" />
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#001233] mb-2 leading-[1.15] tracking-tight font-heading">
              Besoin d’une plaque d’immatriculation auto <br className="hidden md:block" />
              <span className="text-[#f2b823]">homologuée ?</span>
            </h2>

            <p className="text-[13px] md:text-sm text-neutral-600 mb-4 leading-relaxed font-light max-w-xl">
              Commandez vos plaques d’immatriculation AUTO ST-1, moto, scooter et accessoires pour la fixation de vos plaques d’immatriculation et plus.
            </p>

            {/* Compact Custom CTA Button answering the explicit question */}
            <div className="flex w-full justify-start">
              <a
                href="https://dev-env-pmc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-full max-w-[300px] h-[46px] md:h-[50px] bg-[#001233] hover:bg-black transition-colors duration-300 cursor-pointer rounded-lg shadow-md p-1 group"
              >
                <span
                  className="relative flex items-center justify-center w-full h-full font-bold text-[12px] md:text-[13px] tracking-[0.05em] text-[#f2b823] border-[1.5px] border-[#f2b823]/20 rounded z-10"
                  style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                >
                  Commander maintenant
                  <svg className="ml-2 w-4 h-4 text-[#f2b823] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Features below CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-5 mt-4 space-y-2 sm:space-y-0 text-[12px] md:text-[13px] font-medium text-neutral-600 pt-1">
              <div className="flex items-center space-x-2">
                <FiTruck className="text-[#f2b823] w-4 h-4 shrink-0" />
                <span>Expédition sous 48 heures</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <FiMapPin className="text-[#f2b823] w-4 h-4 shrink-0" />
                <span>Retrait gratuit</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiShield className="text-[#f2b823] w-4 h-4 shrink-0" />
                <span>SNCA agréé</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
