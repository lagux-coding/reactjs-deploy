import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

function saki() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover relative grid min-h-screen">
      <Header />
      <div className="absolute bg-black bg-opacity-70 inset-0" />
      <div className="relative flex justify-center mt-28">
        <img
          src="https://sff-koi.com/wp/wp-content/themes/sffkoi_theme/cmn/img/global/logo.svg"
          className="rounded-2xl w-[80%] max-w-[300px] h-auto"
          alt="Logo Saki"
        />
      </div>
      <div className="relative flex flex-col md:flex-row justify-center gap-4 mb-20 mt-16">
        <div className="w-full md:w-[800px]">
          <img
            src="https://i.ytimg.com/vi/kHbvk72l_rk/maxresdefault.jpg"
            className="rounded-2xl w-full h-auto"
            alt="Koi Fish"
          />
        </div>
        <div className="w-full md:w-[800px] h-auto">
          <div>
            <h1 className="text-white font-bold text-2xl md:text-4xl flex justify-center">
              Sakai Koi Farm: A Legacy of Excellence in Nishikigoi Breeding
            </h1>
            <h2 className="text-slate-100 mt-14 mb-5">
              With over 120 years of experience, Sakai Koi Farm stands as a
              symbol of innovation and quality in koi breeding. Starting in 1890
              with Ichiroji Sakai breeding Magoi, our family has evolved through
              three generations, ultimately focusing on the unique Nishikigoi.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default saki;
