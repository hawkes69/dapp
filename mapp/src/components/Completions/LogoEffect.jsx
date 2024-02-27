import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import ConfettiExplosion from 'react-confetti-explosion';
import useSound from 'use-sound';

import IMAGES from "~/images/Images";
import confetti from "~/sounds/confetti.mp3";

function toCamelCase(text) {
  const textWithoutPunctuation = text.replace(/[^\w\s]/g, ''); // Needed for main street but good to have
  return textWithoutPunctuation.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function LogoEffect({ backgroundImageSuffix, overlayImageSuffix, file }) {
  const [kaboom, setKaboom] = useState(false);
  const [play] = useSound(confetti);

  const backGround = `${toCamelCase(file)}${backgroundImageSuffix}`;
  const overlay = `${toCamelCase(file)}${overlayImageSuffix}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setKaboom(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  console.log(`${file}${backgroundImageSuffix}`)

  return (
    <div className="fixed flex h-full w-full justify-center items-center" style={{marginTop: "-76px", backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
      <div className="w-72 h-72 relative">
        <div className="overflow-hidden absolute z-30 logo-animation">
          <img src={IMAGES[overlay]} />
        </div>

        <div className="overflow-hidden z-20 absolute">
          <img src={IMAGES[backGround]} />
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
  backgroundImageSuffix: PropTypes.string.isRequired,
  overlayImageSuffix: PropTypes.string.isRequired,
  file: PropTypes.string,
};
