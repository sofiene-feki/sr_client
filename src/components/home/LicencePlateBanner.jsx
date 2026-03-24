import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import pmcLogo from "../../assets/pmcLogo.png";
import { Link } from "react-router-dom";

export default function LicencePlateBanner({ title, subtitle, triggerRef }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white/50">
      <section className="relative max-w-7xl mx-auto w-full min-h-auto flex flex-col md:flex-row overflow-hidden bg-white rounded-[2rem] border border-neutral-200 shadow-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,18,51,0.08)]">
        {/* Visual Side */}
        <div className="relative md:w-2/4 w-full h-auto flex items-center justify-center p-6 md:p-8 bg-white overflow-hidden">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={hero}
            alt="Plaque immatriculation Luxembourg"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content Side */}
        <div className="md:w-2/4 w-full flex items-center justify-center p-6 md:p-12 z-10 bg-white">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={pmcLogo} alt="PMC Logo" className="h-10 w-auto object-contain" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-pmc-blue mb-6 leading-tight tracking-tight">
              Plaques d'immatriculation <br />
              <span className="text-pmc-red">Premium</span>
            </h2>

            <p className="text-base md:text-lg text-neutral-600 mb-8 leading-relaxed font-light">
              Commandez maintenant vos plaques d’immatriculation sécurisées.
              <strong className="font-semibold text-pmc-blue"> La meilleure qualité</strong> et les prix les plus compétitifs au Luxembourg, produites et expédiées le jour même.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full relative z-20">
              <a
                href="https://dev-env-pmc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-pmc-blue hover:bg-pmc-red text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-pmc-blue/20 text-center tracking-wide block uppercase text-sm"
              >
                Commander sur notre site dédié
              </a>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    alt="Client satisfait"
                  />
                ))}
              </div>
              <p className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider">
                +20,000 clients satisfaits
              </p>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pmc-red/5 rounded-full blur-3xl pointer-events-none" />
      </section>
    </div>
  );
}
