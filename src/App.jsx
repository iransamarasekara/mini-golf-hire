import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import BookNowLayout from "./pages/BookNowLayout";
import Footer from "./components/Footer";
import BookingForm1 from "./components/BookingForm1";
import BookingForm2 from "./components/BookingForm2";
import BookingForm3 from "./components/BookingForm3";

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
            <Route path="/booknow" element={<BookNowLayout />}>
              <Route
                path="/booknow/customer_details"
                element={<BookingForm1 />}
              />
              <Route
                path="/booknow/billing_details"
                element={<BookingForm2 />}
              />
              <Route path="/booknow/event_details" element={<BookingForm3 />} />
            </Route>
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
