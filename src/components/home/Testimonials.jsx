import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Antoine Marchand",
        text: "Impeccable! Rapide, sympa, efficace. Merci.",
        rating: 5,
        color: "bg-[#4285F4]" // Google Blue
    },
    {
        name: "Romain Eiffers",
        text: "Très rapide et efficace. Ils peuvent faire aussi bien les plaques LU mais aussi des certificats provisoires FR (plaques WW).",
        rating: 5,
        color: "bg-[#EA4335]" // Google Red / Gmail
    },
    {
        name: "Klaus Weber",
        text: "Top service, top qualité et top prix, je conseille vraiment.",
        rating: 5,
        color: "bg-[#34A853]" // Google Green
    },
    {
        name: "Philippe Leguebe",
        text: "Très satisfait, très sympathique, je recommande.",
        rating: 5,
        color: "bg-[#FBBC05]" // Google Yellow
    },
];

export default function Testimonials() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        centerMode: false,
    };

    return (
        <section className="py-8 bg-white relative overflow-hidden">
            {/* Background decoration matching PanneauxRoutiersCTA */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gray-200/40 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-0 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4 flex flex-col items-center">
                    {/* Pill label matching PanneauxRoutiersCTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-3 md:space-x-4 px-4 py-1.5 md:py-2 rounded-full bg-white border-2 border-neutral-100 shadow-[0_8px_20px_rgba(0,0,0,0.06)] mb-4"
                    >
                        <span className="text-[10px] md:text-[11px] font-black tracking-[0.25em] text-neutral-800 uppercase pt-[2px]">
                            Témoignages
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tight uppercase font-heading"
                    >
                        Ce que nos clients <br className="md:hidden" />
                        <span className="text-pmc-blue">disent</span>
                    </motion.h2>
                </div>

                {isMobile ? (
                    <div className="testimonial-slider-container mx-0 md:mx-4 relative z-0">
                        <Slider {...sliderSettings} className="px-4">
                            {testimonials.map((item, idx) => (
                                <div key={idx} className="p-2 outline-none">
                                    <TestimonialCard item={item} index={idx} isSlide={true} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map((item, idx) => (
                            <TestimonialCard key={idx} item={item} index={idx} isSlide={false} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function TestimonialCard({ item, index, isSlide }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: isSlide ? 0 : index * 0.1 }}
            className={`group relative bg-white border border-neutral-200 shadow-md p-6 md:p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${isSlide ? 'h-[300px]' : 'h-full'}`}
        >
            <div className="absolute top-6 right-8 text-neutral-100 group-hover:text-neutral-200 transition-colors duration-500">
                <FaQuoteLeft size={36} />
            </div>

            <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(item.rating)].map((_, i) => (
                    <HiStar key={i} className="text-[#f2b823] w-5 h-5 drop-shadow-sm" />
                ))}
            </div>

            <p className="text-gray-500 leading-relaxed italic mb-8 flex-1 relative z-10 text-[13px] md:text-base">
                "{item.text}"
            </p>

            <div className="flex items-center gap-3 md:gap-4 border-t border-neutral-100 pt-5 md:pt-6 relative z-10 mt-auto">
                <div className={`w-10 h-10 rounded-full ${item.color || 'bg-black'} flex items-center justify-center text-white font-black text-sm uppercase shadow-sm shrink-0`}>
                    {item.name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-black font-bold text-[13px] md:text-sm tracking-wide line-clamp-1">
                        {item.name}
                    </h4>
                    <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                        Client Vérifié
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
