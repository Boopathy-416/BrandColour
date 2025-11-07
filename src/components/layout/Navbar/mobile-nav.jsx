import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faTwitter,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SOCIAL_LINKS = [
  {
    icon: faInstagram,
    href: "https://www.instagram.com/mr.chevrolet_46?igsh=MWl6Z2h2N3d2bGlnZA%3D%3D&utm_source=qr ",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: faFacebookF,
    href: "https://www.facebook.com/",
    label: "Facebook",
    color: "hover:text-blue-600",
  },

  {
    icon: faYoutube,
    href: "https://www.youtube.com/",
    label: "YouTube",
    color: "hover:text-red-600",
  },
  {
    icon: faTwitter,
    href: "https://x.com/",
    label: "Twitter",
    color: "hover:text-blue-400",
  },
  {
    icon: faThreads,
    href: "https://www.threads.com/",
    label: "Threads",
    color: "hover:text-gray-600",
  },

  {
    icon: faEnvelope,
    href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    label: "Email",
    color: "hover:text-yellow-600",
  },
];

const MENU_ITEMS = [
  { label: "New Arrivals", href: "/new" },
  { label: "Hot Sales", href: "/sale" },
  { label: "Big Discount", href: "/trends" },
  { label: "Festival Collection", href: "#videos" },
  { label: "Sets", href: "#equipment" },
  { label: "Accessories", href: "#store" },
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
      className="md:hidden z-50 tracking-widest bg-white momo dark:bg-black/40 border-t
       border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg/30 w-full"
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
      <div className="px-4 py-6  flex flex-wrap gap-4">
        {SOCIAL_LINKS.map((social, index) => (
          <a
            key={social.label}
            ref={(el) => (socialRefs.current[index] = el)}
            href={social.href}
            aria-label={social.label}
            className={`text-black   dark:text-white transition-colors ${social.color}`}
          >
            <FontAwesomeIcon
              className="shadow-2xl shadow-amber-50 "
              icon={social.icon}
              size="xl"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
