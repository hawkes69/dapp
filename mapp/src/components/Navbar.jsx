import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row gap-4 p-4 w-full top-0 fixed z-50 font-bold bg-slate-900 text-sky-400">
      <Link to="/">
        <EmojiEventsIcon />
      </Link>
      <Link to="/attractions">Attractions</Link>
      <Link to="/shows">Shows</Link>
      <Link to="/restaurants">Restaurants</Link>
    </div>
  );
}

export default Navbar;
