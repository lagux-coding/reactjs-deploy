import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Isa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover relative grid min-h-screen">
      <Header />
      <div className="absolute bg-black bg-opacity-70 inset-0" />
      <div className="relative flex justify-center items-center mt-20">
        <img
          src="https://th.bing.com/th/id/R.a0f012d976a1b109ee2bdde1147fe6cf?rik=C6AoaugI7LDLaA&riu=http%3a%2f%2fkoikichi-auction.com%2fimages%2fupload%2fbreeder%2f111320_Breeder_ISA-LOGO.jpg&ehk=Hf1sTTJWFP0CQnkh7Ln%2bLlVW3%2fYSq1ZIAFuiJoHQ6xQ%3d&risl=&pid=ImgRaw&r=0"
          className="rounded-2xl w-[80%] max-w-[300px] h-auto"
          alt="Logo Isa"
        />
      </div>
      <div className="relative flex flex-col md:flex-row justify-center gap-4 mb-20 mt-16">
        <div className="w-full md:w-[600px]">
          <img
            src="https://www.koi.com/sales/upload/1975-3.jpg"
            className="rounded-2xl w-full h-auto"
            alt="Koi Fish"
          />
        </div>
        <div className="w-full md:w-[800px] h-auto">
          <div>
            <h1 className="text-white font-bold text-2xl md:text-4xl flex justify-center">
              Isa Koi Farm: Passion and Excellence in Showa Breeding
            </h1>
            <h2 className="text-slate-100 mt-14 mb-5">
              Founded in 1971 by Mitsunori Isa, Isa Koi Farm has become one of
              the most popular and respected breeders in Niigata, Japan. Known
              for his sincere dedication, passion, and likable personality, Mr.
              Isa has built a reputation that goes beyond koi quality alone.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Isa;
