import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

import visa from "../../assets/footer/visa.png";
import mastercard from "../../assets/footer/mastercard.png";
import paypal from "../../assets/footer/paypal.png";
import madeInLuxembourg from "../../assets/footer/made-in-luxembourg.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-neutral-100 md:py-20 pt-16 pb-8 print:hidden relative overflow-hidden">
      {/* Subtle luxury background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f2b823]/5 rounded-full blur-[120px] pointer-events-none -mt-40 -mr-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* ===== Company Info ===== */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-black tracking-[0.25em] uppercase text-[#001233]">
              Contact & Siège
            </h4>
            <div className="text-[14px] text-neutral-500 space-y-4 leading-relaxed font-normal">
              <p className="flex items-start gap-3">
                <span className="font-bold text-[#001233] uppercase text-[11px] tracking-wider pt-1">Siège:</span>
                <span>30, rue Jos Kieffer<br />L-4146 Esch-sur-Alzette</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-[#001233] uppercase text-[11px] tracking-wider">Tel:</span>
                <a href="tel:+35226561197" className="hover:text-[#f2b823] transition-colors text-neutral-600 font-medium">+352 26 56 11 97</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-[#001233] uppercase text-[11px] tracking-wider">Email:</span>
                <a href="mailto:info@pmc.lu" className="hover:text-[#f2b823] transition-colors text-neutral-600 font-medium">info@pmc.lu</a>
              </p>
            </div>

            {/* Socials */}
            <div className="flex space-x-3 pt-4">
              {[
                { href: "https://www.facebook.com/pmcluxembourg", label: "Facebook", svg: <FaFacebook className="w-4 h-4" /> },
                { href: "https://www.instagram.com/pmc.luxembourg", label: "Instagram", svg: <FaInstagram className="w-4 h-4" /> },
                { href: "#", label: "Tiktok", svg: <FaTiktok className="w-4 h-4" /> },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 text-[#001233] hover:bg-[#001233] hover:text-white hover:border-[#001233] transition-all duration-300 shadow-sm"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* ===== Navigation ===== */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-black tracking-[0.25em] uppercase text-[#001233]">
              Navigation
            </h4>
            <ul className="space-y-3 text-[14px] font-medium text-neutral-500">
              {[
                { label: "Accueil", to: "/" },
                { label: "Boutique", to: "/boutique" },
                { label: "Signalisation", to: "/boutique/signalisation" },
                { label: "Prestations", to: "/services" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-[#001233] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#f2b823] transition-all group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Juridique ===== */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-black tracking-[0.25em] uppercase text-[#001233]">
              Information
            </h4>
            <ul className="space-y-3 text-[14px] font-medium text-neutral-500">
              {[
                { label: "Nous contacter", to: "/contact" },
                { label: "Mentions Légales", to: "/terms-of-service" },
                { label: "Politique de Cookies", to: "/privacy-policy" },
                { label: "Livraisons & Retours", to: "/returns-refunds" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-[#001233] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#f2b823] transition-all group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Newsletter / Trust ===== */}
          <div className="space-y-5">
            <h4 className="text-[12px] font-black tracking-[0.25em] uppercase text-[#001233]">
              Notre Mission
            </h4>
            <p className="text-[13px] text-neutral-500 font-normal leading-relaxed">
              Leader au Luxembourg pour la signalisation et les plaques d'immatriculation homologuées. Qualité certifiée depuis plus de 20 ans.
            </p>

            <div className="pt-5 border-t border-neutral-100 mt-6 space-y-5">
              <div className="flex items-center">
                <img src={madeInLuxembourg} alt="Made in Luxembourg" className="h-14 w-auto object-contain drop-shadow-sm" />
              </div>

              <div>
                <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-black">Paiement 100% sécurisé</span>
                <div className="flex gap-4 mt-3 mix-blend-multiply opacity-70">
                  <img src={visa} alt="Visa" className="h-4 w-12 object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                  <img src={mastercard} alt="Mastercard" className="h-4 w-12 object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                  <img src={paypal} alt="Paypal" className="h-4 w-12 object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="mt-16 border-t border-neutral-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-widest font-bold">
          <div>&copy; {new Date().getFullYear()} PMC Luxembourg. TOUS DROITS RÉSERVÉS.</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#001233] transition-colors cursor-pointer border-b border-transparent hover:border-[#001233] pb-0.5">Luxembourg</span>
            <span className="hover:text-[#001233] transition-colors cursor-pointer border-b border-transparent hover:border-[#001233] pb-0.5">Français</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
