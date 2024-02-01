import { Route, Routes } from "react-router-dom";
import List from "./List.jsx";
import Completions from "./Completions/Completions.jsx";
import Map from "./Map.jsx";
import AttractionEdit from "./Attractions/AttractionEdit.jsx";
import Attractions from "./pages/Attractions.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Completions />} />
      <Route exact path="/attractions" element={<Attractions />} />
      <Route exact path="/attractions/:id/edit" element={<AttractionEdit />} />
      <Route exact path="/attractions/new" element={<AttractionEdit />} />
      <Route exact path="/shows" element={<List />} />
      <Route exact path="/restaurants" element={<List />} />
      <Route exact path="/map" element={<Map />} />
    </Routes>
  );
}

export default AppRoutes;
