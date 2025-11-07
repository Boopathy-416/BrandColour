import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProductCard({ product }) {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600">{product.color}</p>
        <p className="font-bold text-pink-600 mt-2">${product.price}</p>
      </div>
    </div>
  );
}
