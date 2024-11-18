import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

function dainichi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover relative grid min-h-screen">
      <Header />
      <div className="absolute bg-black bg-opacity-70 inset-0" />
      <div className="relative flex justify-center items-center mt-20 bg-white w-full p-2">
        <img
          src="https://dainichikoifarm.com/wp-content/themes/dainichi_231122/assets/images/common/main_logo.svg"
          className="rounded-2xl w-[80%] max-w-[300px] h-auto"
          alt="Logo Dainichi"
        />
      </div>
      <div className="relative flex flex-col md:flex-row justify-center gap-4 mb-20 mt-16">
        <div className="w-full md:w-[800px]">
          <img
            src="https://dainichikoifarm.com/wp-content/themes/dainichi_231122/assets/images/top/mv02.jpg"
            className="rounded-2xl w-full h-auto"
            alt="Koi Fish"
          />
        </div>
        <div className="w-full md:w-[800px]">
          <h1 className="text-white font-bold text-2xl md:text-4xl flex justify-center">
            Dainichi Koi Farm: Excellence in World-Class Koi Breeding
          </h1>
          <h2 className="text-slate-100 mt-14 mb-5">
            Located in Sanbusho, Ojiya, Japan, Dainichi Koi Farm is a globally
            respected name in koi breeding. Founded by the late Mano and now
            led by his sons, Futoshi and Shigeru Mano, Dainichi has become
            synonymous with high quality and impeccable koi body structure,
            attracting enthusiasts worldwide who seek to own a Dainichi koi.
          </h2>
        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

export default dainichi;
