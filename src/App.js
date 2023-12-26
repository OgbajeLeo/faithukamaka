
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import About from "./pages/about";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
