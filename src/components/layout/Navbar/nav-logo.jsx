
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NavLogo() {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.from(logoRef.current, {
        opacity: 1,
        // x: -30,
        duration: 0.6,
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div ref={logoRef} className="shrink-0">
      <a
        href="/"
        className="text-2xl md:text-3xl momo text-foreground hover:text-muted-foreground transition-colors" >
        bpy
      </a>
    </div>
  );
}
