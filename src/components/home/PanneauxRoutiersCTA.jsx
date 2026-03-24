import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import roadSignImg from "../../assets/roadSign.png";
import { TiArrowRightThick } from "react-icons/ti";

export default function PanneauxRoutiersCTA() {
  return (
    <section className="relative w-full min-h-auto flex flex-col md:flex-row overflow-hidden bg-white shadow-md border border-neutral-200">
      {/* Visual Side */}
      <div className="relative md:w-2/4 w-full h-auto flex items-center justify-center  bg-white overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src={roadSignImg}
          alt="Assortiment de panneaux de signalisation routière au Luxembourg"
          className="w-full h-auto object-contain max-h-[500px]"
        />
      </div>

      {/* Content Side */}
      <div className="md:w-2/4 w-full flex items-center justify-center p-8 md:p-16 z-10 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left "
        >
          <div className="inline-flex items-center space-x-3 md:space-x-4 px-4 py-1.5 pl-5 rounded-full bg-white border-2 border-neutral-100 shadow-[0_8px_20px_rgba(0,0,0,0.06)] mb-8">
            <span className="text-[10px] md:text-[11px] font-black tracking-[0.25em] text-neutral-800 uppercase pt-[2px]">
              Catalogue Complet
            </span>
            {/* Traffic Light Container */}
            <div className="flex items-center space-x-1.5 md:space-x-2 bg-neutral-900 px-2 md:px-2.5 py-1.5 rounded-full border border-neutral-800 shadow-inner">
              {/* Red Dot */}
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
              </span>
              {/* Orange Dot */}
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"
                  style={{ animationDelay: '0.3s' }}
                ></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
              </span>
              {/* Green Dot */}
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
                  style={{ animationDelay: '0.6s' }}
                ></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tight uppercase font-heading">
            Panneaux de <br />
            Signalisation Routière
          </h2>

          <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed font-light">
            Découvrez notre gamme complète de <strong className="font-semibold text-black">panneaux routiers homologués</strong>.
            Équipez vos voiries, parkings et chantiers au Luxembourg avec la meilleure qualité aux prix les plus compétitifs, livrés directement chez vous ou sur site.
          </p>

          <div className="flex w-full mt-6 justify-start">
            <Link
              to="/boutique/signalisation/panneaux-routiers"
              className="relative flex items-center justify-center w-full max-w-[420px] h-[64px] md:h-[72px] bg-white border-2 border-gray-100 group hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-lg shadow-xl p-1"
            >
              <span
                className="flex items-center justify-center w-full h-full font-bold text-[16px] md:text-[21px] tracking-[0.02em] md:tracking-[0.04em] text-black border-[3px] md:border-4 border-black rounded-[4px] pt-[2px]"
                style={{ fontFamily: "'Inter', Arial, sans-serif" }}
              >
                VOIR TOUS LES PANNEAUX <TiArrowRightThick className="ml-2 w-10 h-10" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
