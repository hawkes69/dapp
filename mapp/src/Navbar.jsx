import CastleIcon from '@mui/icons-material/Castle';

function Navbar() {
  return (
    <div className="flex flex-row gap-4 p-4 font-bold bg-slate-900 text-sky-400">
      <h1><CastleIcon /></h1>
      <h1>Attractions</h1>
      <h1>Map</h1>
    </div>
  );
}

export default Navbar;