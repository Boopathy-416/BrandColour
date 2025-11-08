import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// ✅ Import images instead of string paths
import poster from "../../assets/images/poster.png";
import l1 from "../../assets/images/l1.png";
import bag from "../../assets/images/bag.png";
import t3 from "../../assets/images/t3.png";
import cf from "../../assets/images/cf.png";
import tw from "../../assets/images/tw.png";
import k from "../../assets/images/k.png";

const images = [poster, l1, bag, t3, cf, tw, k];

export default function PosterSlider() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // GSAP slide animation
  const goToSlide = (index) => {
    const slides = containerRef.current.children;
    const total = slides.length;
    const next = (index + total) % total;

    gsap.to(slides, {
      xPercent: -100 * next,
      duration: 2.2,
      ease: "power3.inOut",
    });

    setCurrent(next);
  };

  // Auto-play every 3s
  useEffect(() => {
    intervalRef.current = setInterval(() => goToSlide(current + 1), 3000);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  // Hover zones
  const handleHover = (direction) => {
    clearInterval(intervalRef.current);
    goToSlide(current + direction);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden rounded-2xl shadow-lg">
      {/* Slides */}
      <div ref={containerRef} className="flex w-full h-full">
        {images.map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      {/* Center Overlay Content */}
      <div className="absolute inset-0 flex flex-col pointer-events-none items-center justify-center text-center text-white px-4 bg-black/40 backdrop-blur-[1px]">
        <h1 className="text-6xl md:w-1/2 md:text-7xl font-semibold mb-4 bebas  leading-tighter tracking-tight">
          We give women the confidence to live life fully.
        </h1>
        <p className="text-lg md:text-xl leading-tighter font-thin mb-6">
          We create <span className="mask-l-from-neutral-900 text-pink-300">makeup</span> that
          inspires.
        </p>
        <button className="border bg-[#ff9531] border-white border-b-4 px-7 py-1.5 rounded-full text-lg bebas tracking-widest text-black transition-all duration-300">
          Shop Now
        </button>

        {/* Arrow */}
        {/* <div className="mt-8 animate-bounce text-2xl">⬇️</div> */}
      </div>
      {/* Hover Controls */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full cursor-pointer z-10"
        onMouseEnter={() => handleHover(-1)}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full cursor-pointer z-10"
        onMouseEnter={() => handleHover(1)}
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all opacity-70 duration-500 ${
              i === current
                ? "ring-white bg-black ring-1 scale-110"
                : "bg-amber-800 ring-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
