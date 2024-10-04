import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Notworking from "./Pages/Notworking";
import Splash from "./Pages/Splash";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [splashPageShown, setSplashPageShown] = useState(false);

  // Effect to check if the splash page has been shown before
  useEffect(() => {
    // Check if the splash page has been shown before
    const isSplashPageShown = localStorage.getItem("splashPageShown");

    if (!isSplashPageShown) {
      // If splash page hasn't been shown before, set the state and update local storage
      setSplashPageShown(true);
      localStorage.setItem("splashPageShown", "true");
    }
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={loading ? <Splash /> : <Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/contact" element={<Cont />} />
          <Route path="/appform" element={<Applicat />} /> */}
          <Route path="/working" element={<Notworking />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
