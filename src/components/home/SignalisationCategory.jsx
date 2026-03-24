import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getEcwidCategories, slugify } from "../../functions/ecwid";
import chantier from "../../assets/chantier.png";

const getPlainText = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, '').trim();
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-all duration-300 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 drop-shadow-lg group"
      onClick={onClick}
      title="Suivant"
    >
      {/* Outer ring simulates the metal sign border */}
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-[3px] border-[#fff] shadow-[0_0_0_1.5px_black] relative group-hover:bg-neutral-800 transition-colors">
        <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 ml-1 relative z-10" fill="white" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round">
          <path d="M 18 40 L 54 40 L 60 22 L 88 50 L 60 78 L 54 60 L 18 60 Z" />
        </svg>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-all duration-300 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 drop-shadow-lg group"
      onClick={onClick}
      title="Précédent"
    >
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-[3px] border-[#fff] shadow-[0_0_0_1.5px_black] relative group-hover:bg-neutral-800 transition-colors">
        <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 mr-1 relative z-10" fill="white" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round">
          <path d="M 82 40 L 46 40 L 40 22 L 12 50 L 40 78 L 46 60 L 82 60 Z" />
        </svg>
      </div>
    </div>
  );
};

export default function SignalisationCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getEcwidCategories();
        let items = data.items || [];

        // Find "Signalisation" parent category
        const signalisationParent = items.find(c => slugify(c.name) === 'signalisation' || slugify(c.name) === 'signalisations');

        let displayedCats = [];
        if (signalisationParent) {
          // Fetch its subcategories
          displayedCats = items.filter(c => c.parentId === signalisationParent.id);
        }

        // Fallbacks if no exact logic is matched
        if (displayedCats.length === 0) {
          displayedCats = items.filter(c => !c.parentId || c.parentId === 0).slice(0, 6);
        }

        setCategories(displayedCats);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: categories.length > 4,
    speed: 600,
    slidesToShow: Math.min(4, Math.max(1, categories.length)),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, Math.max(1, categories.length)),
          infinite: categories.length > 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: categories.length > 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-neutral-50/50 overflow-hidden">
      <div className="max-w-full mx-auto px-6 relative">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-black tracking-tight uppercase font-heading mb-4"
          >
            Matériel de Signalisation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-500 font-light max-w-3xl mx-auto"
          >
            Découvrez nos sous-catégories dédiées à la voirie, au chantier et à la signalétique professionnelle.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : categories.length > 0 ? (
          <div className="category-slider-container -mx-4 relative z-0">
            <Slider {...sliderSettings} className="pb-12 px-4">
              {categories.map((cat) => (
                <div key={cat.id} className="p-4 outline-none">
                  <Link
                    to={`/boutique/signalisation/${slugify(cat.name)}`}
                    className="block bg-white rounded-[32px] border border-neutral-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 flex flex-col group min-h-[420px]"
                  >
                    <div className="h-56 overflow-hidden bg-neutral-50/50 relative flex items-center justify-center ">
                      {/* Subdued background shape effect */}
                      <div className="absolute inset-0 bg-gray-200/50 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full blur-3xl"></div>

                      {cat.imageUrl || cat.thumbnailUrl ? (
                        <img
                          src={cat.imageUrl || cat.thumbnailUrl}
                          alt={cat.name}
                          className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 p-4"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-400 font-black text-4xl uppercase relative z-10">
                          {cat.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="p-8 flex-1 flex flex-col border-t border-neutral-50 relative bg-white">
                      <h3 className="text-xl md:text-2xl font-black text-black mb-3 group-hover:text-gray-600 transition-colors line-clamp-2 uppercase tracking-wide">
                        {cat.name}
                      </h3>
                      {cat.description ? (
                        <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed font-light">
                          {getPlainText(cat.description)}
                        </p>
                      ) : (
                        <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed font-light">
                          Découvrez notre catalogue de {cat.name.toLowerCase()} disponible immédiatement en livraison.
                        </p>
                      )}

                      <div className="mt-auto pt-4">
                        <div className="flex items-center gap-3 text-sm font-bold text-black uppercase tracking-widest group-hover:gap-4 transition-all">
                          <span>Explorer</span>
                          <span className="text-xl">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="text-center py-10 text-neutral-500">
            Aucune sous-catégorie de signalisation trouvée.
          </div>
        )}
      </div>
    </section>
  );
}
