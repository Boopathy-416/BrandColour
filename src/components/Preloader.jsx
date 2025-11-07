import React from "react";

export default function Preloader({ progress }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50 transition-all">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-xl font-semibold">{progress}%</p>
      <p className="text-sm text-gray-400 mt-2">Loading resources...</p>
    </div>
  );
}
