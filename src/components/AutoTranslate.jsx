// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";

// export default function AutoTranslate() {
//   const { i18n } = useTranslation();

//   useEffect(() => {
//     const translatePage = async () => {
//       const elements = document.querySelectorAll(
//         "body *:not(script):not(style)"
//       );
//       for (let el of elements) {
//         if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
//           const text = el.textContent.trim();
//           if (text && text.length > 1) {
//             try {
//               const res = await fetch(
//                 `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${
//                   i18n.language
//                 }&dt=t&q=${encodeURIComponent(text)}`
//               );
//               const data = await res.json();
//               el.textContent = data[0][0][0];
//             } catch (e) {
//               console.warn("Translation failed:", e);
//             }
//           }
//         }
//       }
//     };

//     translatePage();
//   }, [i18n.language]);

//   return null;
// }


import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AutoTranslate() {
  const { i18n } = useTranslation();

  useEffect(() => {
    let hasTranslated = false; // ✅ Prevents continuous reruns

    const translatePage = async () => {
      if (hasTranslated) return; // ✅ Skip if already translated
      hasTranslated = true;

      const elements = document.querySelectorAll("body *:not(script):not(style)");
      for (let el of elements) {
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
          const text = el.textContent.trim();
          if (text && text.length > 1) {
            try {
              const res = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${
                  i18n.language
                }&dt=t&q=${encodeURIComponent(text)}`
              );
              const data = await res.json();
              el.textContent = data[0][0][0];
            } catch (e) {
              console.warn("Translation failed:", e);
            }
          }
        }
      }
    };

    // ✅ Run once after full UI loads
    const timeout = setTimeout(() => {
      hasTranslated = false;
      translatePage();
    }, 800);

    return () => clearTimeout(timeout);
  }, [i18n.language]);

  return null;
}
