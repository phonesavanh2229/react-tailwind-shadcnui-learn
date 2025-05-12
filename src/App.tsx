import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/nav-bar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./components/blog";
// import { CarouselPlugin } from "./components/Carousel";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="">
      <Navbar />
      {/* <CarouselPlugin /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
