import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./components/AppRoutes.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
