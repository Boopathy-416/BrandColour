import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faTwitter,
  faTiktok,
  faThreads,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SOCIAL_LINKS = [
  { icon: faInstagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  { icon: faFacebookF, href: "#", label: "Facebook", color: "hover:text-blue-600" },
  { icon: faTiktok, href: "#", label: "TikTok", color: "hover:text-black" },
  { icon: faYoutube, href: "#", label: "YouTube", color: "hover:text-red-600" },
  { icon: faTwitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: faThreads, href: "#", label: "Threads", color: "hover:text-gray-600" },
  { icon: faBluesky, href: "#", label: "Bluesky", color: "hover:text-blue-400" },
  { icon: faEnvelope, href: "#", label: "Email", color: "hover:text-yellow-600" },
];

const MENU_ITEMS = [
  { label: "MUSIC", href: "#music" },
  { label: "NEWS", href: "#news" },
  { label: "BIOGRAPHY", href: "#biography" },
  { label: "VIDEOS", href: "#videos" },
  { label: "EQUIPMENT", href: "#equipment" },
  { label: "STORE", href: "#store" },
];

export default function MobileMenu({ onClose }) {
  const containerRef = useRef(null);
  const menuItemRefs = useRef([]);
  const socialRefs = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, { opacity: 1, duration: 0.1 });

      gsap.from(menuItemRefs.current, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.08,
        delay: 0.1,
      });

      gsap.from(socialRefs.current, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.05,
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="md:hidden bg-white momo dark:bg-black border-t border-gray-300 dark:border-gray-700 w-full"
    >
      {/* Menu Items */}
      <div className="px-4 py-6 space-y-4">
        {MENU_ITEMS.map((item, index) => (
          <a
            key={item.label}
            ref={(el) => (menuItemRefs.current[index] = el)}
            href={item.href}
            onClick={onClose}
            className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-lg font-semibold transition-all"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="h-px bg-gray-300 dark:bg-gray-700" />

      {/* Social Links */}
      <div className="px-4 py-6 flex flex-wrap gap-4">
        {SOCIAL_LINKS.map((social, index) => (
          <a
            key={social.label}
            ref={(el) => (socialRefs.current[index] = el)}
            href={social.href}
            aria-label={social.label}
            className={`text-black dark:text-white transition-colors ${social.color}`}
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </div>
  );
}
