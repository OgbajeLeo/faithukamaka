
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Voiceover from "./pages/voiceover";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/voice" element={<Voiceover />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
