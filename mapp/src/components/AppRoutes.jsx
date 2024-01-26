import { Route, Routes } from "react-router-dom";
import List from "./Attractions/List.jsx";
import AttractionDetails from "./Attractions/AttractionDetails.jsx";
import Completions from "./Completions/Completions.jsx";
import Map from "./Map.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Completions />} />
      <Route exact path="/attractions" element={<List />} />
      <Route exact path="/attractions/:id" element={<AttractionDetails />} />
      <Route exact path="/map" element={<Map />} />
    </Routes>
  );
}

export default AppRoutes;
