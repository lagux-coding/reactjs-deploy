import Footer from "../components/Footer";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow flex-col md:flex-row">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

