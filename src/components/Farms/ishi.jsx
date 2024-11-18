import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

function ishi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover relative grid min-h-screen">
      <Header />
      <div className="absolute bg-black bg-opacity-70 inset-0" />
      <div className="relative flex justify-center items-center mt-20">
        <img
          src="https://ishikoi.vn/tassets/images/hinh-anh-footer-1.png"
          className="rounded-2xl w-[80%] max-w-[300px] h-auto"
          alt="Logo Ishi"
        />
      </div>
      <div className="relative flex flex-col md:flex-row justify-center gap-4 mb-20 mt-16">
        <div className="w-full md:w-[600px]">
          <img
            src="https://ishikoi.vn/tassets/images/hinh-anh-secIntroDirection.png"
            className="rounded-2xl w-full h-auto"
            alt="Koi Fish"
          />
        </div>
        <div className="w-full md:w-[800px]">
          <h1 className="text-white font-bold text-2xl md:text-4xl flex justify-center">
            Ishi Koi Farm: Breeding Japanese Koi fish in Vietnam
          </h1>
          <h2 className="text-slate-100 mt-14 mb-5">
            With a deep passion for koi, Ishi Koi Farm was established...
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ishi;
