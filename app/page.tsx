import Banner from "./components/landing/Banner";
import Provide from "./components/landing/Provide";
import Why from "./components/landing/Why";
import Clientsay from "./components/landing/Testimonicals";
import Newsletter from "./components/landing/Newsletter";
import Navbar from "./components/landing/Navbar/Navbar";
import Footer from "./components/landing/Footer";
import Team from "./components/landing/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-14 w-full">
        <Banner />
        <Provide />
        <Why />
        <Team />
        <Clientsay />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}
