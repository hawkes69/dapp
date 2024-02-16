import { useState } from "react";
import PropTypes from "prop-types";
import IMAGES from "~/images/Images";

import { Modal, Box } from '@mui/material';

function humanReadable(camelCase) {
  return camelCase.replace(/([A-Z])/g, ' $1')
              .replace(/^./, function(str){ return str.toUpperCase(); });
}

function CompletionIndicator({ name, attractionsCompletion, showsCompletion, restaurantsCompletion}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const color = name + "Color";
  const grayscale = name + "Grayscale";
  const bronze = name + "Bronze";
  const gold = name + "Gold";

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    width: "max-content",
  };

  return (
    // This block is very confusing. That's due to the color being revealed top down so the order of images must be backward. 

    <div>
      <div className="w-32 h-32 relative" onClick={handleOpen}>
        {attractionsCompletion != 0 && 
          <div className="overflow-hidden absolute z-30" style={{ maxHeight: `${attractionsCompletion}%` }}>
            <img src={IMAGES[grayscale]} />
          </div>
        }

        {(attractionsCompletion != 0 || showsCompletion != 0) &&
          <div className="overflow-hidden absolute z-20" style={{ maxHeight: `${attractionsCompletion != 0 ? 100 : showsCompletion}%` }}>
            <img src={IMAGES[color]} />
          </div>
        }

        {attractionsCompletion == 0 &&
          <div className="overflow-hidden absolute z-10" style={{ maxHeight: `${showsCompletion != 0 ? 100 : restaurantsCompletion}%` }}>
            <img src={IMAGES[bronze]} />
          </div>
        }

        {(attractionsCompletion == 0 && showsCompletion == 0) && 
          <img className="absolute z-0" src={IMAGES[gold]} />
        }
      </div>
      <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <h2 className="font-bold text-xl text-center mb-2">{humanReadable(name)}</h2>
            <hr className="border-black mb-4"/>
            <ul>
              <li>Attractions: {Math.round(100 - attractionsCompletion)}%</li>
              <li>Shows: {Math.round(100 - showsCompletion)}%</li>
              <li>Restaurants: {Math.round(100 - restaurantsCompletion)}%</li>
            </ul>
          </Box>
        </Modal>
    </div>
  );
}

CompletionIndicator.propTypes = {
  name: PropTypes.string.isRequired,
  attractionsCompletion: PropTypes.number.isRequired,
  showsCompletion: PropTypes.number.isRequired,
  restaurantsCompletion: PropTypes.number.isRequired,
};

export default CompletionIndicator;
