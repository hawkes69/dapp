import { Route, Routes } from "react-router-dom";
import List from "./Attractions/List.jsx";
import AttractionDetails from "./Attractions/AttractionDetails.jsx";
import Home from "./Home.jsx";
import Map from "./Map.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/attractions" element={<List />} />
      <Route exact path="/attractions/:id" element={<AttractionDetails />} />
      <Route exact path="/map" element={<Map />} />
    </Routes>
  );
}

export default AppRoutes;
