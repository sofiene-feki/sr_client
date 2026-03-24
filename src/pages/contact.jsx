import React from "react";
import SEO from "../components/common/SEO";
import AddressCards from "../components/home/AddressCards";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | PMC Luxembourg"
        description="Contactez PMC Luxembourg pour toute question sur nos produits de signalisation routière, balisage, mobilier urbain ou marquage au sol."
        keywords="contact, PMC Luxembourg, service client, signalisation, Luxembourg"
      />

      <div className="bg-neutral-50 min-h-screen mt-20 md:mt-24">
        {/* Intro Section */}
        <section className="bg-white border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-pmc-blue tracking-tight mb-6">
              Contactez <span className="text-pmc-yellow">PMC Luxembourg</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
              Une question sur notre gamme de signalisation, mobilier urbain ou de marquage au sol ? Besoin de renseignements avant de passer commande ? L’équipe <strong>PMC Luxembourg</strong> est à votre écoute pour vous accompagner et répondre à toutes vos demandes.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
            <h2 className="text-2xl font-bold text-pmc-blue mb-8 border-b border-neutral-100 pb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-pmc-yellow rounded-sm block"></span>
              Envoyez-nous un message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Nom Complet <span className="text-pmc-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom complet"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Email <span className="text-pmc-red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre@email.com"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">
                  Message <span className="text-pmc-red">*</span>
                </label>
                <textarea
                  required
                  placeholder="Comment pouvons-nous vous aider ?"
                  rows="5"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="px-10 py-4 bg-pmc-blue text-white rounded-xl font-bold uppercase tracking-widest hover:bg-pmc-yellow hover:text-pmc-blue transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Addresses Section */}
        <AddressCards />
      </div>
    </>
  );
}
