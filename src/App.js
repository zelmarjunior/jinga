import { BrowserRouter, Outlet, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home";
import Samuel from "./components/Pages/DJs/samuel";
import Caio from "./components/Pages/DJs/caio";
import Tuy from "./components/Pages/DJs/tuy";
import Arktt from "./components/Pages/DJs/arktt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* DJS */}
        <Route path="/samuel" element={<Samuel />} />
        <Route path="/arctt" element={<Samuel />} />
        <Route path="/tuy" element={<Samuel />} />
        <Route path="/caio" element={<Samuel />} />
        {/* Services */}
        <Route path="/samuel" element={<Samuel />} />
        <Route path="/samuel" element={<Samuel />} />
        <Route path="/samuel" element={<Samuel />} />
        <Route path="/samuel" element={<Samuel />} />
        <Route path="/samuel" element={<Samuel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
