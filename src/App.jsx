import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Equipment from "./pages/Equipment";
import News from "./pages/News";
import Recruit from "./pages/Recruit";

export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/business/*" element={<Business />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/recruit/*" element={<Recruit />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
