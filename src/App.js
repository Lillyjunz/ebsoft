import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Notfound from "./Pages/Notfound";
import Privacy from "./Pages/Privacy";
import Splash from "./Pages/Splash";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={loading ? <Splash /> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
