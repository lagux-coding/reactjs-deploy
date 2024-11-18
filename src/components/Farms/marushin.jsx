import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

function marushin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover relative grid min-h-screen">
      <Header />
      <div className="absolute bg-black bg-opacity-70 inset-0" />
      <div className="relative flex justify-center items-center mt-24">
        <img
          src="https://auctionkoi.com/images/marushin-logo.png"
          className="rounded-2xl w-[80%] max-w-[300px] h-auto"
          alt="Logo Marushin"
        />
      </div>
      <div className="relative flex flex-col md:flex-row justify-center gap-4 mb-20 mt-16">
        <div className="w-full md:w-[800px]">
          <img
            src="https://www.kodamakoifarm.com/wp-content/uploads/2023/03/marushin-koi-farm.jpg"
            className="rounded-2xl w-full h-auto"
            alt="Koi Fish"
          />
        </div>
        <div className="w-full md:w-[800px]">
          <h1 className="text-white font-bold text-2xl md:text-4xl flex justify-center">
            Discover Marushin Koi Farm
          </h1>
          <h2 className="text-slate-100 mt-14 mb-5">
            Marushin Koi Farm, owned by Mr. Mitsuhiro Tanaka, has become a
            renowned name in the koi industry, specializing in high-quality
            Doitsu Showa, Ginrin Showa, and Showa varieties. Founded in 1968,
            this farm has consistently delivered excellence in koi breeding,
            gaining a reputation for its koi's impressive body size and
            striking Sumi patterns.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default marushin;
