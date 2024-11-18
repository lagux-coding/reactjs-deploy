import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

function kanno() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover relative grid min-h-screen">
      <Header />
      <div className="absolute bg-black bg-opacity-70 inset-0" />
      <div className="relative flex justify-center items-center mt-20 bg-white w-full p-2">
        <img
          src="https://auctionkoi.com/wp-content/uploads/2024/11/kanno-logo-128x130.png"
          className="rounded-2xl w-[80%] max-w-[300px] h-auto"
          alt="Logo Kanno"
        />
      </div>
      <div className="relative flex flex-col md:flex-row justify-center gap-4 mb-20 mt-16">
        <div className="w-full md:w-[800px]">
          <img
            src="https://www.kodamakoifarm.com/wp-content/uploads/2021/04/Kanno-Special-Auction-Landing-Page-Banner2.jpg"
            className="rounded-2xl w-full h-auto"
            alt="Koi Fish"
          />
        </div>
        <div className="w-full md:w-[800px] h-auto">
          <div>
            <h1 className="text-white font-bold text-2xl md:text-4xl flex justify-center">
              Explore the Legacy of Kanno Koi Farm
            </h1>
            <h2 className="text-slate-100 mt-14 mb-5">
              Established in the 1970s by Hiroshi Hirasawa and now managed by
              his son, Kazuhiro Hirasawa, Kanno Koi Farm is celebrated for its
              exceptional Goshiki and Sanke varieties. Known worldwide, their
              Goshiki stands out for its award-winning quality, admired for its
              unique color and pattern.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default kanno;
