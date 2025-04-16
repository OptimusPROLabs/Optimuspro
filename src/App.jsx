import { Route, Routes } from "react-router-dom";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/scrollToTop";
import PostDetails from "./pages/PostDetails";
import Resources from "./pages/Resources";

function App() {
  return (
    <div className="relative w-[100%] h-auto mx-auto max-w-screen-2xl">
      {/* <div className="w-[100%] h-auto px-3 md:px-14"> */}
      <div className="w-[100%] h-auto px-0 md:px-0">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/blog/:slug" element={<PostDetails />} />
          <Route path="*" element={"NOT FOUND"} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
