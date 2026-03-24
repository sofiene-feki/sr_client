import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import luLogo from "../../assets/lu.png";

export default function BrandStatement() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [typedText, setTypedText] = useState("");
  const fullText = "L'Expertise en \nSignalisation Routière";

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setTypedText(fullText.slice(0, i + 1));
          i++;
          if (i >= fullText.length) {
            clearInterval(interval);
          }
        }, 80); // 80ms delay between letters
        return () => clearInterval(interval);
      }, 600); // 0.6s initial delay

      return () => clearTimeout(timeout);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const cursorVariants = {
    blinking: {
      opacity: [1, 1, 0, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const renderTextWithBreaks = (text) => {
    return text.split('\n').map((part, index, array) => (
      <React.Fragment key={index}>
        {part}
        {index < array.length - 1 && <br className="hidden md:block" />}
      </React.Fragment>
    ));
  };

  return (
    <section ref={ref} className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-5"
        >
          {/* Accent Label */}
          <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-1">
            L'Excellence depuis 2016
          </span>

          {/* Brand name — luxury/professional heading WITH TYPING EFFECT */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight uppercase font-heading min-h-[70px] md:min-h-[120px]"
          >
            {renderTextWithBreaks(typedText)}
            <motion.span
              animate="blinking"
              variants={cursorVariants}
              className="inline-block w-[3px] md:w-[6px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] bg-black ml-1 align-bottom mb-1 md:mb-2"
            />
          </motion.h2>

          {/* Main statement — editorial */}
          <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-500 leading-relaxed font-light text-justify md:text-center mt-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Votre partenaire de confiance pour la conception, la création sur-mesure et l'installation de <strong className="font-medium text-black">panneaux de signalisation</strong>, de systèmes de <strong className="font-medium text-black">balisage de sécurité</strong>, de <strong className="font-medium text-black">mobilier urbain</strong> et de <strong className="font-medium text-black">marquage au sol</strong>.
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-500 leading-relaxed font-light text-justify md:text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Guidés par l'innovation et la recherche de la qualité absolue, nous accompagnons les particuliers, les entreprises et les administrations luxembourgeoises avec exigence et professionnalisme.
            </motion.p>
          </div>

          {/* Divider & Signature */}
          <motion.div
            className="pt-2 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="w-16 h-[1px] bg-black mb-4" />
            <img src={luLogo} alt="Made in Luxembourg" className="w-10 md:w-16 h-auto object-contain mb-2" />
            <p className="text-[10px] md:text-xs font-black text-black tracking-[0.3em] uppercase">
              Fabrication 100% locale
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
