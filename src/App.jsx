import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import BookNow from "./pages/BookNow";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booknow" element={<BookNow />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
