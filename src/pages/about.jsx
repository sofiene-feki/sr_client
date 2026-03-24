import React from "react";
import SEO from "../components/common/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  TruckIcon,
  LightBulbIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import AddressCards from "../components/home/AddressCards";

export default function About() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    {
      title: "Signalisation Routière",
      description:
        "Parmi nos services de signalisation, retrouvez notre large gamme d’articles de signalisation routière comprenant une quantité de panneaux, de supports et d’accessoires conformes aux normes et législations. Vos demandes sont traitées dans les plus brefs délais par notre équipe expérimentée et attentive qui vous conseille avec professionnalisme et s’adapte à vos besoins.",
      icon: <CheckBadgeIcon className="w-8 h-8 text-pmc-blue" />,
    },
    {
      title: "Signalétique",
      description:
        "Que vous soyez particulier ou membre d’une administration, notre offre en termes de signalétique vous intéressera par la diversité et la qualité de la marchandise proposée. Pour des usages en intérieur ou en extérieur, notre savoir-faire nous permet de fabriquer sur mesure et donc de répondre au mieux à vos attentes. Nous sommes également disposés à venir placer nous-mêmes la signalétique qu’il vous faut.",
      icon: <LightBulbIcon className="w-8 h-8 text-pmc-blue" />,
    },
    {
      title: "Balisage de chantier",
      description:
        "Si vous souhaitez vous tourner du côté de la sécurité, nous vous proposons de découvrir notre gamme complète de balisage de chantier. Disposez de tous les accessoires nécessaires à la visibilité et à la sécurisation de vos chantiers.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-pmc-blue" />,
    },
    {
      title: "Panneau de chantier",
      description:
        "Grâce à ce secteur développé depuis de nombreuses années, nous vous aidons à annoncer les travaux à venir par le biais d'impressions de panneaux sur mesure. Ces derniers, livrés dans un délai rapide et compatibles avec une variété de supports disponibles chez nous, conviennent pour tout type d'utilisation.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-pmc-blue" />,
    },
    {
      title: "Industrie",
      description:
        "Nos services de signalisation nous permettent de vous présenter ce qui convient le mieux pour le secteur de l'industrie. Notre grand choix d'articles facilite la protection des sites industriels, des zones de passage ou des quais de chargement. Vous pouvez également délimiter les hauteurs d'accès dans certains lieux et gérer les parkings avec des portiques de hauteur ou mobiles.",
      icon: <BuildingOfficeIcon className="w-8 h-8 text-pmc-blue" />,
    },
    {
      title: "Mobilier Urbain",
      description:
        "Nous passons exclusivement par nos meilleurs fournisseurs pour vous garantir une excellente qualité et un large choix en termes de mobilier urbain. En plus de cette offre complète, nous nous adaptons en vous proposant des versions transformées de ces produits, dans le but de vous apporter ce que vous recherchez pour vos projets.",
      icon: <MapPinIcon className="w-8 h-8 text-pmc-blue" />,
    },
    {
      title: "Outillage et Accessoires",
      description:
        "Afin de répondre aux demandes de chacun, nous vous proposons de l'outillage et des accessoires professionnels provenant de nos fournisseurs. Disponibles en magasin et consultables dans notre catalogue, les articles peuvent être livrés par notre propre service de livraison.",
      icon: <TruckIcon className="w-8 h-8 text-pmc-blue" />,
    },
    {
      title: "Marquage au sol",
      description:
        "Marquages permanents pour fortes contraintes et trafic intense avec une très haute visibilité de nuit par temps de pluie. Utilisé pour les nouveaux marquages, les marquages d’entretien (repassage) et les marquages de lignes.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-pmc-blue" />,
    },
  ];

  return (
    <>
      <SEO
        title="À propos | PMC Luxembourg"
        description="Entreprise familiale, fondée au Luxembourg en 2016, spécialisée dans la signalisation routière, la signalétique, le balisage de chantier et le marquage au sol."
        keywords="à propos, PMC Luxembourg, signalisation routière, signalétique, balisage chantier, marquage au sol"
      />
      <div className="bg-neutral-50 min-h-screen pb-20">

        {/* Intro Section */}
        <section className="bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-black text-pmc-blue mb-8 tracking-tight"
              >
                Notre <span className="text-pmc-red">Histoire</span> & Notre Mission
              </motion.h1>

              <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed text-justify md:text-center">
                <motion.p variants={fadeInUp}>
                  <strong className="font-semibold text-pmc-blue">Nous sommes une entreprise familiale, fondée au Luxembourg en 2016</strong>, avec un fort engagement à offrir des produits et services de haute qualité.
                  Nous disposons aujourd’hui d’une équipe de professionnels hautement qualifiés, qui se consacrent à garantir l’excellence à chaque étape de notre travail.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  Equipés d’une technologie et de machines de pointe, nous garantissons une qualité maximale, des prix compétitifs et une très grande agilité dans vos livraisons.
                  Notre mission absolue est d’offrir des solutions personnalisées qui dépassent vos attentes, en mettant l’accent sur <strong className="font-medium text-pmc-blue">l’innovation, l’efficacité et l’engagement total envers la satisfaction de notre clientèle.</strong>
                </motion.p>

                <motion.p variants={fadeInUp}>
                  Nous vous invitons à découvrir notre large gamme complète de produits et services, que ce soit à travers notre boutique en ligne, où vous trouverez tout l'essentiel pour projeter et concrétiser vos projets, ou bien dans l'un de nos magasins physiques situés à :
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 pt-4 pb-2">
                  <AddressCards />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services & Expertises Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-pmc-blue mb-4">
              Notre <span className="text-pmc-red">Expertise</span> & Nos Domaines
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Nous adaptons notre savoir-faire à vos exigences, offrant des solutions robustes, normées et créatives pour chaque secteur.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-pmc-blue/5 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-pmc-blue mb-4">{service.title}</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-pmc-blue rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light">
              Contactez-nous ! Nous serons ravis de vous servir en vous offrant tout l’accompagnement stratégique et logistique nécessaire pour développer et réaliser vos objectifs avec excellence.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-pmc-red hover:bg-white hover:text-pmc-red text-white font-bold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-pmc-red/20"
            >
              Contactez-notre équipe
            </Link>
          </motion.div>
        </section>

      </div>
    </>
  );
}
