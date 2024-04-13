import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Notfound from "./Pages/Notfound";
import Privacy from "./Pages/Privacy";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/notfound" element={<Notfound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
