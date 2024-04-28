import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dansblok from "./pages/Dansblok";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Calender from "./pages/Calender";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Dansblok" element={<Dansblok />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
