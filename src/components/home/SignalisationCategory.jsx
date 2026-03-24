import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
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
      className="absolute right-0 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-all duration-300 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:scale-110 drop-shadow-lg group"
      onClick={onClick}
      title="Suivant"
    >
      {/* Outer ring simulates the metal sign border */}
      <div className="w-full h-full rounded-full bg-pmc-blue flex items-center justify-center border-[3px] border-[#fff] shadow-[0_0_0_1.5px_#264796] relative group-hover:opacity-80 transition-all">
        <TiArrowRightThick className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10" />
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-all duration-300 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:scale-110 drop-shadow-lg group"
      onClick={onClick}
      title="Précédent"
    >
      <div className="w-full h-full rounded-full bg-pmc-blue flex items-center justify-center border-[3px] border-[#fff] shadow-[0_0_0_1.5px_#264796] relative group-hover:opacity-80 transition-all">
        <TiArrowLeftThick className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10" />
      </div>
    </div>
  );
};

export default function SignalisationCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    dots: false,
    infinite: isMobile ? categories.length > 1 : categories.length > 4,
    speed: 600,
    slidesToShow: isMobile ? 1.5 : Math.min(4, Math.max(1, categories.length)),
    slidesToScroll: 1,
    autoplay: !isMobile,
    autoplaySpeed: 4000,
    arrows: !isMobile,
    nextArrow: !isMobile ? <NextArrow /> : undefined,
    prevArrow: !isMobile ? <PrevArrow /> : undefined,
    swipeToSlide: true,
    centerMode: false,
  };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-2 md:px-4 lg:px-14 relative">
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
          <div className="category-slider-container   relative z-0" dir="rtl">
            <Slider {...sliderSettings} className="pb-12 px-4" dir="rtl">
              {categories.map((cat) => (
                <div key={cat.id} className="p-4 outline-none ">
                  <Link
                    to={`/boutique/signalisation/${slugify(cat.name)}`}
                    className="block bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 flex flex-col group min-h-[420px] rounded-lg"
                  >
                    <div className="h-56 overflow-hidden bg-white border-b border-neutral-100 relative flex items-center justify-center ">
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

                    <div className="p-8 flex-1 flex flex-col relative bg-white">
                      <h3 className="text-md md:text-xl font-semibold text-black mb-3 group-hover:text-neutral-600 transition-colors line-clamp-2 uppercase tracking-wide">
                        {cat.name}
                      </h3>
                      {/* {cat.description ? (
                        <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed font-light">
                          {getPlainText(cat.description)}
                        </p>
                      ) : (
                        <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed font-light">
                          Découvrez notre catalogue de {cat.name.toLowerCase()} disponible immédiatement en livraison.
                        </p>
                      )} */}

                      <div className="mt-auto">
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
