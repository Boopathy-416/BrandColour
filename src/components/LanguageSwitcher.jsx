import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "ta", name: "தமிழ்" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "zh", name: "中文" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ Close dropdown on outside click only
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="relative  inline-block text-left">
      {/* 🌐 Language Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center justify-center p-2 rounded-full  hover:bg-gray-100 transition-all duration-200"
        style={{ cursor: "pointer" }}
      >
         <FontAwesomeIcon size="24" icon={faLanguage} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-6 w-40 py-3 px-2 momo  bg-transparent ring-1 rounded-xl  shadow-lg/30 
           ring-black/5 ring-opacity-50  z-50"
        style={{
          fontWeight:"700",
          letterSpacing:"2px"
        }}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className={`block w-full  text-left px-3   py-2 text-sm   transition-all duration-200 ease-in hover:bg-gray-300 hover:scale-100  ${
                i18n.language === lang.code
                  ? "rounded-md border-l-4 border-t-3 backdrop-blur-4xl  border-1"
                  :" rounded-md hover:bg-black/50  hover:border-2  hover:tracking-wider "
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
