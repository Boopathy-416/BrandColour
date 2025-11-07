import React from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import AutoTranslate from "./components/AutoTranslate";
import { useTranslation } from "react-i18next";
import Preloader from "./components/Preloader";
import usePreloader from "./hooks/usePreloader";
import "./App.css";

import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const { progress, loaded } = usePreloader([
    // "@import url('https://fonts.googleapis.com/css2?family=Momo+Trust+Display&display=swap');",
    // "https://jsonplaceholder.typicode.com/users",
  ]);

  useTranslation(); // initializes i18n context

  if (!loaded) {
    return <Preloader progress={progress} />;
  }

  return (
    <div className="app-container">
      <AutoTranslate />
      <Navbar />
      <main className="main-content">
        <AppRoutes />
      </main>
     
    </div>
  );
}
