import FeaturedCourse from "./Components/FeaturedCourse/FeaturedCourse";
import Footer from "./Components/Footer/Footer";
import Herosection from "./Components/HeroSection/Herosection";
import LatestRelease from "./Components/LatestRelease/LatestRelease";
import NavbarWithMegaMenu from "./Components/Navbar/Navbar";
import TakeNextStep from "./Components/TakeNextStep/TakeNextStep";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <NavbarWithMegaMenu />
        <Herosection />
        <FeaturedCourse />
        <LatestRelease />
        <TakeNextStep />
      </div>
      <Footer />
    </>
  );
}

export default App;
