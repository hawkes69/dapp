import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./components/AppRoutes.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="pt-16">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
