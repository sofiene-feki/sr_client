import React from "react";
import SEO from "../components/common/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImg from "../assets/services.png";
import {
  MapPinIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  TruckIcon,
  LightBulbIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const servicesList = [
    {
      title: "Signalisation Routière",
      description:
        "Retrouvez notre large gamme d’articles de signalisation routière comprenant une quantité de panneaux, de supports et d’accessoires conformes aux normes. Vos demandes sont traitées dans les plus brefs délais par notre équipe.",
      icon: <CheckBadgeIcon className="w-10 h-10 text-pmc-blue" />,
    },
    {
      title: "Signalétique",
      description:
        "Que vous soyez particulier ou membre d’une administration, notre offre en signalétique vous intéressera par sa diversité. Pour des usages en intérieur ou extérieur, nous fabriquons sur mesure pour répondre à vos attentes.",
      icon: <LightBulbIcon className="w-10 h-10 text-pmc-blue" />,
    },
    {
      title: "Balisage de chantier",
      description:
        "Découvrez notre gamme complète de balisage de chantier. Disposez de tous les accessoires nécessaires à la visibilité et à la sécurisation absolue de vos zones de travaux.",
      icon: <ShieldCheckIcon className="w-10 h-10 text-pmc-blue" />,
    },
    {
      title: "Panneau de chantier",
      description:
        "Nous vous aidons à annoncer les travaux à venir par le biais d'impressions de panneaux sur mesure. Livrés rapidement et compatibles avec une variété de supports disponibles chez nous.",
      icon: <WrenchScrewdriverIcon className="w-10 h-10 text-pmc-blue" />,
    },
    {
      title: "Industrie",
      description:
        "Notre grand choix d'articles facilite la protection des sites industriels, des zones de passage ou des quais de chargement. Vous pouvez également délimiter les hauteurs d'accès et gérer les parkings.",
      icon: <BuildingOfficeIcon className="w-10 h-10 text-pmc-blue" />,
    },
    {
      title: "Mobilier Urbain",
      description:
        "Nous passons par nos meilleurs fournisseurs pour garantir une excellente qualité et un large choix. Nous nous adaptons en proposant des versions transformées de produits pour vos projets.",
      icon: <MapPinIcon className="w-10 h-10 text-pmc-blue" />,
    },
    {
      title: "Outillage et Accessoires",
      description:
        "Nous vous proposons de l'outillage professionnel provenant de nos fournisseurs. Disponibles en magasin et consultables dans notre catalogue, livrables par notre équipe.",
      icon: <TruckIcon className="w-10 h-10 text-pmc-blue" />,
    },
    {
      title: "Marquage au sol",
      description:
        "Marquages permanents pour fortes contraintes et trafic intense avec une très haute visibilité de nuit. Nouveaux marquages, entretien, ou repassage de lignes expertes.",
      icon: <WrenchScrewdriverIcon className="w-10 h-10 text-pmc-blue" />,
    },
  ];

  return (
    <>
      <SEO
        title="Nos Services | PMC Luxembourg"
        description="Découvrez nos services d'experts en signalisation routière, balisage, marquage au sol et mobilier urbain au Luxembourg."
        keywords="services, signalisation routière, marquage sol, PMC Luxembourg"
      />
      <div className="bg-neutral-50 min-h-screen pb-24">
        
        {/* Services Banner */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden mt-20 md:mt-28">
          <img
            src={bannerImg}
            alt="Nos services - PMC Luxembourg"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
          >
            {servicesList.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-20 h-20 bg-pmc-blue/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pmc-blue transition-colors duration-500">
                  {React.cloneElement(service.icon, { className: "w-10 h-10 text-pmc-blue group-hover:text-white transition-colors duration-500" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-pmc-blue mb-4 tracking-tight group-hover:text-pmc-red transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="w-12 h-1 bg-pmc-red/20 mb-6 rounded-full group-hover:w-24 group-hover:bg-pmc-red transition-all duration-500"></div>
                <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-5xl mx-auto px-6 mt-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fed000] border-4 border-black rounded-[2rem] p-10 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden"
          >
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">
              Besoin d'une solution personnalisée ?
            </h2>
            <p className="text-black/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
              Notre équipe d'experts est prête à vous accompagner. Obtenez un devis gratuit et rapide pour tous vos projets de signalisation.
            </p>
            <Link
              to="/devis"
              className="inline-block px-10 py-5 bg-black hover:bg-neutral-800 text-white font-bold uppercase tracking-widest rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Demander un devis
            </Link>
          </motion.div>
        </section>

      </div>
    </>
  );
}
