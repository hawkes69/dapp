import { useState, useEffect } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

import IMAGES from "~/images/Images";


function LogoEffect({ imageLinks, park }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [kaboom, setKaboom] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setKaboom(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-72 h-72 relative">
        <div className="overflow-hidden absolute z-30 logo-animation">
          <img src={IMAGES[imageLinks[0]]} />
        </div>

        <div className="overflow-hidden z-20 absolute">
          <img src={IMAGES[imageLinks[1]]} />
        </div>
        {kaboom && <ConfettiExplosion />}
      </div>
    </div>
  );
}

export default LogoEffect;