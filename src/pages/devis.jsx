import React, { useState } from "react";
import SEO from "../components/common/SEO";
import { toast } from "react-toastify";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Devis() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    communeName: "",
    address: "",
    zipCode: "",
    city: "",
    vatNumber: "",
    projectDescription: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Data Submitted:", formData);
    console.log("File:", file);
    toast.success("Votre demande de devis a été envoyée avec succès. Notre équipe vous contactera dans les plus brefs délais.");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      communeName: "",
      address: "",
      zipCode: "",
      city: "",
      vatNumber: "",
      projectDescription: "",
    });
    setFile(null);
  };

  return (
    <>
      <SEO
        title="Demander un Devis | PMC Luxembourg"
        description="Formulaire de demande de devis dédié aux communes et administrations pour la signalisation routière au Luxembourg."
        keywords="devis, signalisation routière, commune, administration, PMC Luxembourg"
      />

      <div className="bg-neutral-50 min-h-screen py-16 mt-20 md:mt-24">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-pmc-blue/5 rounded-full mb-6">
            <DocumentTextIcon className="w-10 h-10 text-pmc-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-pmc-blue mb-4 tracking-tight">
            Demander un <span className="text-pmc-yellow">Devis</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Espace dédié aux communes et administrations publiques. Remplissez ce formulaire pour nous faire part de vos projets d'aménagement et de signalisation routière.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-100 mb-16">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Informations Personnelles */}
                <div>
                  <h2 className="text-xl font-bold text-pmc-blue mb-6 border-b border-neutral-100 pb-3 flex items-center gap-2">
                    <span className="w-2 h-6 bg-pmc-yellow rounded-sm block"></span>
                    Vos Coordonnées
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Prénom <span className="text-pmc-red">*</span></label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Nom <span className="text-pmc-red">*</span></label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Email <span className="text-pmc-red">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="nom@administration.lu" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Téléphone <span className="text-pmc-red">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="+352 ..." />
                    </div>
                  </div>
                </div>

                {/* Administration Details */}
                <div>
                  <h2 className="text-xl font-bold text-pmc-blue mb-6 border-b border-neutral-100 pb-3 flex items-center gap-2">
                    <span className="w-2 h-6 bg-pmc-yellow rounded-sm block"></span>
                    Informations de l'Administration
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Nom de la Commune / Administration <span className="text-pmc-red">*</span></label>
                      <input type="text" name="communeName" value={formData.communeName} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="Ex: Administration Communale de ..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Votre Fonction <span className="text-pmc-red">*</span></label>
                      <input type="text" name="position" value={formData.position} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="Ex: Responsable Technique, Bourgmestre..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Numéro de TVA (optionnel)</label>
                      <input type="text" name="vatNumber" value={formData.vatNumber} onChange={handleChange} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="LU..." />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h2 className="text-xl font-bold text-pmc-blue mb-6 border-b border-neutral-100 pb-3 flex items-center gap-2">
                    <span className="w-2 h-6 bg-pmc-yellow rounded-sm block"></span>
                    Localisation
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-3">
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Adresse Complète <span className="text-pmc-red">*</span></label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="Numéro, Rue..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Code Postal <span className="text-pmc-red">*</span></label>
                      <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="Ex: L-1010" />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Localité <span className="text-pmc-red">*</span></label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all" placeholder="Ville" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h2 className="text-xl font-bold text-pmc-blue mb-6 border-b border-neutral-100 pb-3 flex items-center gap-2">
                    <span className="w-2 h-6 bg-pmc-yellow rounded-sm block"></span>
                    Votre Projet
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Description détaillée de la demande <span className="text-pmc-red">*</span></label>
                      <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} required rows="6" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pmc-blue/20 focus:border-pmc-blue transition-all resize-none" placeholder="Décrivez votre projet, vos quantités estimées, les contraintes particulières (délais, installation requise, etc.)..."></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Pièces jointes, Plans ou Cahier des charges (optionnel)</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-200 border-dashed rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer" onClick={() => document.getElementById('file-upload').click()}>
                        <div className="space-y-1 text-center">
                          <svg className="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="flex text-sm text-neutral-600 justify-center mt-2">
                            <span className="relative rounded-md font-bold text-pmc-blue hover:text-pmc-red focus-within:outline-none">
                              <span>Téléverser un fichier</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-2">
                            {file ? <span className="text-green-600 font-bold">Fichier sélectionné : {file.name}</span> : "PDF, DOCX, PNG, JPG jusqu'à 10MB"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-8">
                  <button type="submit" className="w-full px-10 py-4 bg-pmc-blue text-white rounded-xl font-bold uppercase tracking-widest hover:bg-pmc-yellow hover:text-pmc-blue transition-all duration-300 shadow-xl flex items-center justify-center mx-auto hover:-translate-y-1">
                    Envoyer la demande de devis
                  </button>
                  <p className="text-center text-xs text-neutral-400 mt-4">
                    Vos données personnelles seront utilisées pour traiter votre demande conformément à notre politique de confidentialité.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
