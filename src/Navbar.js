import CastleIcon from '@mui/icons-material/Castle';
import Link from './Link';

function Navbar() {
  return (
    <div className="flex flex-row gap-4 p-4 font-bold bg-slate-900 text-sky-400">
      <Link><CastleIcon /></Link>
      <Link>Attractions</Link>
      <Link>Map</Link>
    </div>
  );
}

export default Navbar;