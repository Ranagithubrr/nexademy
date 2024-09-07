import FeaturedCourse from "./Components/FeaturedCourse/FeaturedCourse";
import Herosection from "./Components/HeroSection/Herosection";
import NavbarWithMegaMenu from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <NavbarWithMegaMenu />
      <Herosection />
      <FeaturedCourse />
    </div>
  );
}

export default App;
