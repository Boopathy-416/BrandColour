import { useState } from "react";
import ProductModal from "./ProductModal";


export default function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  // image change every 800ms while hovering
  useState(() => {
    let interval;
    if (hover) {
      interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % product.images.length);
      }, 800);
    }
    return () => clearInterval(interval);
  }, [hover]);

  return (
    <>
      <div
        className="relative overflow-hidden  transition-all duration-300"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setImgIndex(0);
        }}
      >
        {/* Image */}
        <img
          src={product.images[imgIndex]}
          alt={product.name}
          className={`w-full h-[420px] object-cover transform transition-transform duration-700 ${
            hover ? "scale-110" : "scale-80"
          }`}
        />

        {/* Overlay button */}
        {hover && (
          <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-3 cursor-pointer animate-fade-in">
            <button
              className="w-full h-10 font-medium tracking-wide"
              onClick={() => setModalOpen(true)}
            >
              Add To Cart
            </button>
          </div>
        )}

        {/* Info */}
        <div className="p-4 text-center">
          <h3 className="text-gray-800 text-base mb-2">{product.name}</h3>
          <p className="text-black font-semibold text-sm">
            USD ${product.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <ProductModal product={product} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
