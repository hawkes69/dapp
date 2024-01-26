import CastleIcon from "@mui/icons-material/Castle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row gap-4 p-4 font-bold bg-slate-900 text-sky-400">
      <Link to="/">
        <CastleIcon />
      </Link>
      <Link to="/attractions">Attractions</Link>
      <Link to="/map">Map</Link>
    </div>
  );
}

export default Navbar;
