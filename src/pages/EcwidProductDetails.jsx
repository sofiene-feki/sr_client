import React, { useEffect, useState } from "react";
import LicensePlateInput from "../components/product/LicensePlateInput";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getEcwidProductById } from "../functions/ecwid";
import { openEcwidCart } from "../redux/ui/cartDrawer";
import { motion } from "framer-motion";
import { FaShippingFast, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import SEO from "../components/common/SEO";

const EcwidProductDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const id = slug?.includes("--") ? slug.split("--").pop() : slug;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});

    const isPlaque = product?.categoryIds?.includes(124206781) ||
        product?.categories?.some(c => c.id === 124206781) ||
        product?.defaultCategoryId === 124206781 ||
        product?.name?.toLowerCase().includes("plaque");

    useEffect(() => {
        if (id) fetchProduct();
    }, [id]);

    useEffect(() => {
        if (product?.options) {
            const initial = {};
            product.options.forEach(opt => {
                if (opt.choices && opt.choices.length > 0) {
                    const def = opt.choices.find(c => c.isDefault) || opt.choices[0];
                    initial[opt.name] = def.text;
                }
            });
            setSelectedOptions(initial);
        }
    }, [product]);

    const calculatePrice = () => {
        if (!product) return 0;
        let base = product.price || 0;

        if (product.options) {
            product.options.forEach(opt => {
                const selectedText = selectedOptions[opt.name];
                if (selectedText) {
                    const choice = opt.choices?.find(c => c.text === selectedText);
                    if (choice && choice.priceModifier) {
                        if (choice.priceModifierType === "PERCENT") {
                            base += product.price * (choice.priceModifier / 100);
                        } else {
                            base += choice.priceModifier;
                        }
                    }
                }
            });
        }
        return base;
    };

    const getPriceDisplay = () => {
        const currentPrice = calculatePrice();
        if (product?.defaultDisplayedPriceFormatted) {
            const currencyMatch = product.defaultDisplayedPriceFormatted.match(/[^0-9.,\s-]+/);
            const currency = currencyMatch ? currencyMatch[0] : "€";
            if (product.defaultDisplayedPriceFormatted.startsWith(currency)) {
                return `${currency}${currentPrice.toFixed(2)}`;
            } else {
                return `${currentPrice.toFixed(2)} ${currency}`;
            }
        }
        return `${currentPrice.toFixed(2)} €`;
    };

    const fetchProduct = async () => {
        setLoading(true);
        try {
            const data = await getEcwidProductById(id);
            setProduct(data);
            setSelectedImage(data.hdThumbnailUrl || data.imageUrl || data.thumbnailUrl);
        } catch (error) {
            console.error("Error fetching Ecwid product details:", error);
            toast.error("Impossible de charger les détails du produit.");
        } finally {
            setLoading(false);
        }
    };

    const detectPlateType = (name = "") => {
        const n = name.toUpperCase();

        // Specific Luxembourg Codes
        if (n.includes("ST-1")) return "ST1";
        if (n.includes("ST-2")) return "ST2";
        if (n.includes("MC-1")) return "MC1";
        if (n.includes("MC-2")) return "MC2";
        if (n.includes("CMA-1")) return "CMA1";
        if (n.includes("CMA-2")) return "CMA2";

        // VH Series
        if (n.includes("VH-1-13") || n.includes("VH-1-3")) return "VH-1-13";
        if (n.includes("VH-1-14")) return "VH-1-14";
        if (n.includes("VH-1-5")) return "VH-1-5";
        if (n.includes("VH-1-6")) return "VH-1-6";
        if (n.includes("VH-2-6")) return "VH-2-6";

        // France
        if (n.includes("HYBRIDE") || n.includes("FRANCE")) return "HYBRIDE";
        if (n.includes("MH-2-2")) return "MH-2-2";
        if (n.includes("MH-2-7")) return "MH-2-7";

        // Fallbacks
        if (n.includes("STANDARD")) return "ST1";
        if (n.includes("MOTO")) return "MC1";
        if (n.includes("ANCIENNE") || n.includes("VH-")) return "VH-1-14";
        if (n.includes("OLD TIMER")) return "VH-1-6";

        return "ST1";
    };

    const handleAddToCart = () => {
        if (!product) return;
        const numericId = Number(product.id);
        const addOptions = { ...selectedOptions };
        if (isPlaque && plateNumber) {
            addOptions["Numéro de plaque"] = plateNumber;
        }

        if (window.Ecwid) {
            window.Ecwid.Cart.addProduct({
                id: numericId,
                quantity: quantity,
                options: addOptions,
                callback: (success, result, cart, error) => {
                    if (success) {
                        dispatch(openEcwidCart({ id: numericId, plateNumber: isPlaque ? plateNumber : null, quantity: quantity }));
                        toast.success(`${product.name} ajouté au panier !`);
                    } else {
                        console.error("Add failed in main window:", error);
                        // Still open cart with product ID to trigger iframe fallback
                        dispatch(openEcwidCart({ id: numericId, plateNumber: isPlaque ? plateNumber : null, quantity: quantity }));
                    }
                }
            });
        } else {
            dispatch(openEcwidCart({ id: numericId, plateNumber: isPlaque ? plateNumber : null, quantity: quantity }));
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-50">
                <div className="h-12 w-12 border-4 border-pmc-yellow border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
                <h2 className="text-2xl font-bold text-black mb-4 uppercase font-heading tracking-tight">Produit non trouvé</h2>
                <button onClick={() => navigate("/boutique")} className="text-pmc-yellow font-bold flex items-center gap-2 hover:underline">
                    <FaArrowLeft /> Retour à la boutique
                </button>
            </div>
        );
    }

    return (
        <main className="bg-neutral-50 min-h-screen pt-28 pb-20">
            {product && (
                <SEO
                    title={product.name}
                    description={product.description?.replace(/<[^>]*>?/gm, "").substring(0, 160)}
                    ogImage={selectedImage}
                    ogUrl={window.location.href}
                    keywords={`${product.name}, PMC Luxembourg, Ecwid`}
                />
            )}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center gap-2 text-neutral-500 hover:text-black transition-colors font-medium"
                >
                    <FaArrowLeft size={14} /> Retour
                </button>

                <div className="relative w-full min-h-auto flex flex-col md:flex-row bg-white shadow-md border border-neutral-200">
                    {/* Visual Side */}
                    <div className="relative md:w-1/2 w-full border-b md:border-b-0 md:border-r border-neutral-100 bg-white">
                        <div className="sticky top-32 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full flex justify-center items-center"
                            >
                                <img
                                    src={selectedImage}
                                    alt={product.name}
                                    className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px]"
                                />
                            </motion.div>

                            {!isPlaque && product.media && product.media.images && product.media.images.length > 1 && (
                                <div className="flex gap-3 overflow-x-auto mt-6 pb-2 scrollbar-hide px-2 max-w-full">
                                    {product.media.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(img.image1500pxUrl || img.imageUrl)}
                                            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all rounded shadow-sm relative group ${selectedImage === (img.image1500pxUrl || img.imageUrl)
                                                ? "border-black shadow-md scale-105"
                                                : "border-neutral-200 bg-white hover:border-black/50 hover:scale-105"
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-neutral-50 -z-10 group-hover:bg-neutral-100 transition-colors" />
                                            <img src={img.thumbnailUrl} alt="" className="w-full h-full object-cover p-1 relative z-10 bg-white" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 w-full flex flex-col items-start p-6 md:p-10 lg:p-12 z-10 bg-white relative">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col items-start text-left w-full"
                        >
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-2 leading-tight tracking-tight uppercase font-heading">
                                {product.name}
                            </h1>

                            <p className="text-xl md:text-2xl font-black text-pmc-yellow mb-4 tracking-tight">
                                {getPriceDisplay()}
                            </p>

                            <div className="prose prose-sm text-gray-500 mb-6 leading-relaxed font-light w-full border-b border-neutral-100 pb-6"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />

                            <div className="w-full space-y-4 md:space-y-6">
                                {product.options && product.options.map((opt, idx) => (
                                    <div key={idx} className="flex flex-col gap-2">
                                        <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black">
                                            {opt.nameTranslated?.fr || opt.name} {opt.required && "*"}
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {opt.choices?.map((choice, cIdx) => (
                                                <button
                                                    key={cIdx}
                                                    onClick={() => setSelectedOptions(prev => ({ ...prev, [opt.name]: choice.text }))}
                                                    className={`px-4 py-2 md:px-5 md:py-2.5 rounded-[4px] text-[13px] md:text-sm font-bold transition-all border-2 ${selectedOptions[opt.name] === choice.text
                                                        ? "bg-black text-white border-black shadow-md"
                                                        : "bg-white text-gray-800 border-neutral-200 hover:border-black"
                                                        }`}
                                                >
                                                    {choice.textTranslated?.fr || choice.text}
                                                    {choice.priceModifier ? ` (+${choice.priceModifier} €)` : ""}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black">
                                        Quantité
                                    </label>
                                    <div className="flex items-center border-2 border-neutral-200 rounded-[4px] overflow-hidden bg-white h-[48px] w-[120px]">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-12 h-full flex items-center justify-center hover:bg-neutral-100 transition-colors text-black font-bold text-lg"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-full text-center bg-transparent border-none text-black font-black focus:ring-0 text-base"
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-12 h-full flex items-center justify-center hover:bg-neutral-100 transition-colors text-black font-bold text-lg"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex w-full mt-6 justify-start">
                                    <button
                                        onClick={handleAddToCart}
                                        className="relative flex items-center justify-center w-full max-w-[420px] h-[56px] md:h-[64px]  border-2 border-gray-50/60 group hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-lg shadow-xl p-1"
                                    >
                                        <span
                                            className="flex items-center justify-center w-full h-full font-bold text-[15px] md:text-[18px] tracking-[0.02em] md:tracking-[0.04em] text-black border-[3px] border-black rounded-[4px] pt-[2px]"
                                            style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                                        >
                                            AJOUTER AU PANIER <FaShoppingCart className="ml-3 w-4 h-4 md:w-5 md:h-5" />
                                        </span>
                                    </button>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[11px] md:text-xs text-neutral-500 font-medium pt-6 border-t border-neutral-100">
                                    <div className="flex items-center gap-1.5">
                                        <FaShippingFast className="text-pmc-yellow w-4 h-4" />
                                        Livraison Rapide
                                    </div>
                                    <div className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full" />
                                    <div>Qualité Premium</div>
                                    <div className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full" />
                                    <div>Paiement Sécurisé</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
                </div>
            </div>
        </main>
    );
};

export default EcwidProductDetails;
