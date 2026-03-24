import React from "react";
import { motion } from "framer-motion";
import kayl from "../../assets/kayl.webp";
import esch from "../../assets/esch.webp";
import sandweiler from "../../assets/sandweiler.webp";
import strassen from "../../assets/strassen.webp";
import {
  PiPhoneCallThin,
  PiClockCountdownLight,
  PiMapPinLine,
} from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const addresses = [
  {
    title: "Esch-sur-Alzette",
    address: "30, rue Jos Kieffer, L-4146 Esch-sur-Alzette",
    phone: "+352 26 56 11 97",
    email: "esch@pmc.lu",
    hours: "Lun - Ven: 07:30 - 18:00 | Sam: 07:30 - 17:00",
    image: esch,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.6159338076554!2d5.969443276200838!3d49.51064645458507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479535d44f26c871%3A0xa10d55e2e4e8c786!2sPLAQUES%20MOINS%20CHERES%20S.A.R.L%20(SITE%20DE%20PRODUCTION%20ESCH%20SUR%20ALZETTE)!5e0!3m2!1sfr!2stn!4v1770726014427!5m2!1sfr!2stn",
  },
  {
    title: "Kayl",
    address: "53, rue de Noertzange, L-3670 Kayl",
    phone: "+352 26 56 15 46",
    email: "kayl@pmc.lu",
    hours: "Lun - Ven: 08:00 - 18:00 | Sam: Fermé",
    image: kayl,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.6887814312768!2d6.0432404761996485!3d49.49038555602429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795342af4f182bd%3A0x25787ab11ebf5a94!2sPLAQUES%20MOINS%20CHERES%20S.A.R.L%20(SITE%20DE%20PRODUCTION%20kAYL)!5e0!3m2!1sfr!2stn!4v1770726459602!5m2!1sfr!2stn",
  },
  {
    title: "Sandweiler",
    address: "rue de Luxembourg 'Op der Hokault', L-5230 Sandweiler",
    phone: "+352 26 56 15 46",
    email: "sandweiler@pmc.lu",
    hours: "Lun - Ven: 08:00 - 17:00 | Sam: Fermé",
    image: sandweiler,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.07635557867!2d6.203485576206889!3d49.615165147153625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479547008d062fbb%3A0x673ef4d8517b6bba!2sPLAQUES%20MOINS%20CHERES%20S.A.R.L%20(SITE%20DE%20PRODUCTION%20SANDWEILER)!5e0!3m2!1sfr!2stn!4v1770726252173!5m2!1sfr!2stn",
  },
  {
    title: "Strassen",
    address: "216 route d'Arlon L-8010 Strassen",
    phone: "+352 26 56 15 46",
    email: "strassen@pmc.lu",
    hours: "Lun - Ven: 08:00 - 17:00 | Sam: Fermé",
    image: strassen,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.7318416910693!2d6.060730976207268!3d49.62165994669161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954dc185a2d19b%3A0xad4ea5ac814531c!2sPlaques%20Moins%20Cheres%20Sarl%20site%20de%20production%20Strassen!5e0!3m2!1sfr!2stn!4v1770726393262!5m2!1sfr!2stn",
  },
];

export default function AddressCards() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16 space-y-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 md:space-x-4 px-4 py-1.5 md:py-2 rounded-full bg-white border-2 border-neutral-100 shadow-sm mb-4"
          >
            <span className="text-[10px] md:text-[11px] font-black tracking-[0.25em] text-neutral-800 uppercase pt-[2px]">
              Nos Boutiques
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tight uppercase font-heading"
          >
            Points de <span className="text-[#001233]">Retrait</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed font-light max-w-xl mx-auto"
          >
            Retrait gratuit dans toutes nos boutiques au Luxembourg. Choisissez
            le point le plus proche de chez vous.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {addresses.map((addr, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="group relative bg-white border border-neutral-200 shadow-md p-0 rounded-2xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden h-full"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-42  overflow-hidden bg-neutral-100 flex items-center justify-center border-b border-neutral-100">
                <img
                  src={addr.image}
                  alt={addr.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* SMALL MAP OVERLAY (ALWAYS DISPLAYED) */}
                <div className="absolute bottom-3 right-3 w-[84px] h-[64px] bg-white rounded-lg overflow-hidden shadow-lg border-[3px] border-white transition-transform duration-300 z-20 hover:scale-110 cursor-pointer">
                  <iframe
                    title={`Carte de retrait ${addr.title}`}
                    src={addr.map}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* INFO */}
              <div className="p-6 md:p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-lg md:text-xl font-semibold text-[#001233] tracking-wide uppercase mb-6 group-hover:text-[#f2b823] transition-colors">
                  {addr.title}
                </h3>

                <div className="space-y-4 flex-1">
                  <div className="flex items-start text-sm text-neutral-600 space-x-3">
                    <PiMapPinLine className="text-xl text-[#001233] flex-shrink-0 mt-0.5" />
                    <span className=" text-black leading-snug">{addr.address}</span>
                  </div>

                  <div className="flex items-center text-sm text-neutral-600 space-x-3">
                    <PiPhoneCallThin className="text-xl text-[#001233] flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{addr.phone}</span>
                  </div>

                  <div className="flex items-center text-sm text-neutral-600 space-x-3">
                    <TfiEmail className="text-xl text-[#001233] flex-shrink-0" />
                    <span className="text-neutral-700">{addr.email}</span>
                  </div>

                  <div className="flex items-start text-sm text-neutral-500 space-x-3 pt-3 border-t border-neutral-50">
                    <PiClockCountdownLight className="text-xl text-[#f2b823] flex-shrink-0 mt-0.5" />
                    <span className="text-[12px] leading-relaxed font-semibold">
                      {addr.hours}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
