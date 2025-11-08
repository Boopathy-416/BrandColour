import React from "react";
import PosterSlider from "./componets/HomePosterSlider";
import WhatsNew from "./componets/WhatsNew";
import HotSale from "./componets/HotSale";
import Footer from "../components/layout/footer/Footer"
function Home() {
 

  return (
    <>
      <section className="w-full   bg-gray-400 flex items-center justify-center">
        <PosterSlider />
      </section>
      <WhatsNew />
      <HotSale />
      <Footer />
    </>
  );
}

export default Home;
