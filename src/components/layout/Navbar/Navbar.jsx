// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import NavLogo from "./nav-logo";
// import NavMenu from "./nav-menu";
// import NavSocials from "./nav-social";
// import MobileMenu from "./mobile-nav";
// import useNavbarAnimation from "../../../hooks/use-navbar-animation";
// import { useMediaQuery } from "../../../hooks/use-media-query";
// import LanguageSwitcher from "../../LanguageSwitcher";
// import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const navbarRef = useNavbarAnimation();

//   useEffect(() => {
//     if (isLanguageOpen) {
//       setIsOpen(true);
//     }
//   }, [isLanguageOpen]);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav
//       ref={navbarRef}
//       className="fixed top-0 left-0 right-0 z-50 momo bg-transparent border-b-black border  backdrop:blur-md"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           <NavLogo />

//           {!isMobile && (
//             <>
//               <NavMenu />
//               <div className="flex items-center gap-4">
//                 <LanguageSwitcher
//                   isOpen={isLanguageOpen}
//                   onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
//                 />
//                 <NavSocials />
//               </div>
//             </>
//           )}

//           {isMobile && (
//             <div className="flex items-center gap-4">
//               <LanguageSwitcher
//                 isOpen={isLanguageOpen}
//                 onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
//                 isMobile
//               />

//               <button
//                 onClick={toggleMenu}
//                 className="text-black hover:text-gray-500 transition-colors p-2"
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           )}

//           <div className="  cursor-pointer hover:scale-105 duration-200  transition-all  ">
//             <FontAwesomeIcon className="text-xl px-2" icon={faUser} />
//             <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
//           </div>
//         </div>

//         {isMobile && isOpen && !isLanguageOpen && (
//           <MobileMenu onClose={() => setIsOpen(false)} />
//         )}
//       </div>
//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavLogo from "./nav-logo";
import NavMenu from "./nav-menu";
import NavSocials from "./nav-social";
import MobileMenu from "./mobile-nav";
import useNavbarAnimation from "../../../hooks/use-navbar-animation";
import { useMediaQuery } from "../../../hooks/use-media-query";
import LanguageSwitcher from "../../LanguageSwitcher";

// Icons
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import ShoppingCartModal from "./modals/ShoppingCartModal";

// Modals


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // 🔐 Auth & Cart modals
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const [cartCount, setCartCount] = useState(2); // just example

  const isMobile = useMediaQuery("(max-width: 768px)");
  const navbarRef = useNavbarAnimation();

  useEffect(() => {
    if (isLanguageOpen) setIsOpen(true);
  }, [isLanguageOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔁 Switch auth modals
  const switchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const switchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-40 bg-transparent momo border-b border-black/20 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <NavLogo />

            {!isMobile && (
              <>
                <NavMenu />
                <div className="flex items-center gap-4">

                  {/* 🌐 Language */}
                  <LanguageSwitcher
                    isOpen={isLanguageOpen}
                    onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
                  />

                  <NavSocials />

                  {/* 👤 / 🛒 Buttons */}
                  <div className="flex items-center gap-4 cursor-pointer">
                    <FontAwesomeIcon
                      className="text-xl hover:scale-110 transition"
                      icon={faUser}
                      onClick={() => setShowLoginModal(true)}
                    />

                    <div className="relative" onClick={() => setShowCartModal(true)}>
                      <FontAwesomeIcon
                        className="text-xl hover:scale-110 transition"
                        icon={faCartShopping}
                      />
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {cartCount}
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </>
            )}

            {/* 📱 Mobile buttons */}
            {isMobile && (
              <div className="flex items-center gap-4">
                <LanguageSwitcher
                  isOpen={isLanguageOpen}
                  onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
                  isMobile
                />

                {/* 👤 & 🛒 */}
                <FontAwesomeIcon
                  className="text-lg"
                  icon={faUser}
                  onClick={() => setShowLoginModal(true)}
                />

                <div className="relative" onClick={() => setShowCartModal(true)}>
                  <FontAwesomeIcon className="text-lg" icon={faCartShopping} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>

                <button
                  onClick={toggleMenu}
                  className="text-black hover:text-gray-500 transition p-2"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            )}
          </div>

          {isMobile && isOpen && !isLanguageOpen && (
            <MobileMenu onClose={() => setIsOpen(false)} />
          )}
        </div>
      </nav>

      {/* ✅ Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={switchToSignup}
      />

      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={switchToLogin}
      />

      <ShoppingCartModal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
      />
    </>
  );
}
