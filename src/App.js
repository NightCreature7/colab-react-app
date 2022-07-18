import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Recruitmentpage from "./components/pages/Recruitmentpage";
import Authenticcommunication from "./components/pages/Authenticcommunication";
import Adviceleaders from "./components/pages/Adviceleaders";
import Femaleentrepreneur from "./components/pages/Femaleentrepreneur";
import Researchpage from "./components/pages/Researchpage";
import Notfound from "./components/pages/Notfound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment-day" element={<Recruitmentpage />} />
        <Route
          path="/authentic-communication"
          element={<Authenticcommunication />}
        />
        <Route path="/advice-leaders" element={<Adviceleaders />} />
        <Route path="/female-entrepreneurs" element={<Femaleentrepreneur />} />
        <Route path="/research-colab" element={<Researchpage />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
