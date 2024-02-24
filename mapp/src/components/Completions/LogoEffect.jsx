import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import ConfettiExplosion from 'react-confetti-explosion';
import useSound from 'use-sound';

import IMAGES from "~/images/Images";
import confetti from "~/sounds/confetti.mp3";

function LogoEffect({ imageLinks }) {
  const [kaboom, setKaboom] = useState(false);
  const [play] = useSound(confetti);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setKaboom(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed flex h-full w-full justify-center items-center" style={{marginTop: "-76px", backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
      <div className="w-72 h-72 relative">
        <div className="overflow-hidden absolute z-30 logo-animation">
          <img src={IMAGES[imageLinks[0]]} />
        </div>

        <div className="overflow-hidden z-20 absolute">
          <img src={IMAGES[imageLinks[1]]} />
        </div>
        {kaboom &&
          <>
            <div>{play()}</div>
            <ConfettiExplosion className="absolute" style={{right: "144px"}} />
          </>
        }
      </div>
    </div>
  );
}

export default LogoEffect;

LogoEffect.propTypes = {
  imageLinks: PropTypes.array.isRequired,
};
