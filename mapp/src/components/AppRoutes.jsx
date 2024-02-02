import { Route, Routes } from "react-router-dom";
import Completions from "./Completions/Completions.jsx";
import Map from "./Map.jsx";
import AttractionEdit from "./Attractions/AttractionEdit.jsx";
import Attractions from "./pages/Attractions.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Shows from "./pages/Shows.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Completions />} />
      <Route exact path="/attractions" element={<Attractions />} />
      <Route exact path="/attractions/:id/edit" element={<AttractionEdit />} />
      <Route exact path="/attractions/new" element={<AttractionEdit />} />
      <Route exact path="/shows" element={<Shows />} />
      <Route exact path="/shows/:id/edit" element={<AttractionEdit />} />
      <Route exact path="/shows/new" element={<AttractionEdit />} />
      <Route exact path="/restaurants" element={<Restaurants />} />
      <Route exact path="/restaurants/:id/edit" element={<AttractionEdit />} />
      <Route exact path="/restaurants/new" element={<AttractionEdit />} />
      <Route exact path="/map" element={<Map />} />
    </Routes>
  );
}

export default AppRoutes;
