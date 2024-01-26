import { BrowserRouter as Router } from 'react-router-dom';
import List from './components/Attractions/List.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Map from './components/Map.jsx';
import RailsRoutes from './components/RailsRoutes.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <RailsRoutes />
        {/* <Home /> */}
        <List />
        {/* <Map /> */}
      </div>
    </Router>
  );
}

export default App;