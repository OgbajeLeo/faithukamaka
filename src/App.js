
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import About from "./pages/about";
import Blog from "./pages/blog";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
