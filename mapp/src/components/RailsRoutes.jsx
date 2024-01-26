import { Route, Routes } from "react-router-dom";
import List from "./Attractions/List.jsx";
import AttractionDetails from "./Attractions/AttractionDetails.jsx";
import Home from "./Home.jsx";
import Map from "./Map.jsx";

function RailsRoutes() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/attractions" component={List} />
      <Route exact path="/attractions/:id" component={AttractionDetails} />
      <Route exact path="/map" component={Map} />
    </Routes>
  );
}

export default RailsRoutes;
