import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
// Icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SearchBar() {
  const suggestions = [
    "Search for shoes ..",
    "Search for dresses..",
    "Search for watches..",
    "Search for headphones..",
    "Search for bags..",
    "Search for t-shirts..",
    "Search for jackets..",
  ];

  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");

  // Animate placeholder every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % suggestions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [suggestions.length]);

  return (
    <div className="flex justify-center w-full items-center ">
      <div className="relative w-[80%] max-w-4xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={suggestions[index]}
          className="w-full text-[#342009]  tracking-widest px-14 py-3 text-lg rounded-lg border-y-4 border-2 border-[#342009e9]  focus:border-[#342009]  bg-[#3420091c]  outline-none transition-all duration-300 shadow-sm"
        />
        {/* Search Icon */}
        <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl " icon={faMagnifyingGlass} />
       
        {/* Clear Icon */}
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
