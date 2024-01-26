import { BrowserRouter as Router } from "react-router-dom";
import List from "./components/Attractions/List.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Map from "./components/Map.jsx";
import AppRoutes from "./components/AppRoutes.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes />
        {/* <Home /> */}
        {/* <List /> */}
        {/* <Map /> */}
      </div>
    </Router>
  );
}

export default App;
